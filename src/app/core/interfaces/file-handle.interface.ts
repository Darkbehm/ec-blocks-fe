import { SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File | undefined;
  url: SafeUrl;
}
