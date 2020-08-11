import {Subscription} from 'rxjs/internal/Subscription'

export class FileUploadModel {
  data: File;
  state: string;
  inProgerses: boolean;
  progress: number;
  canRetry: boolean;
  canCancel: boolean;
  sub?: Subscription;
}
