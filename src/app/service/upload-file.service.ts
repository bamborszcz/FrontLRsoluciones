import { HttpClient, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { FileUploadModel } from '../models/fileUploadModel';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  public files: Array<FileUploadModel> = [];

  @Output() complete = new EventEmitter<string>();
  constructor(private http: HttpClient) { }

 public uploadFile(file: FileUploadModel, param: string): void {

    const fd = new FormData();
    fd.append(param, file.data);

    const req = new HttpRequest('POST', 'http://127.0.0.1:8080/photos/fd', fd, {
      reportProgress: true,

});


    file.inProgerses = true;


    file.sub = this.http.request(req).pipe(

      map( event => {

        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;

          case HttpEventType.Response:
            return event;
        }
      }),

      catchError((error: HttpErrorResponse) => {
          file.inProgerses = false;
          file.canRetry = true;
          file.canCancel = true;
          return (`${file.data.name} upload failed.`);

        })

    ).subscribe(
      (event: any) =>{
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          this.complete.emit(event.body);
          this.onFileComplete(event);
        }
      }
    );
  }

  public removeFileFromArray(file: FileUploadModel) {

    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
    }

    public onFileComplete(data: any){
      console.log(data);

    }

}
