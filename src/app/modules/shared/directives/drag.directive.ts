import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../interfaces/file-handle.interface';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter<
    FileHandle[]
  >();
  @HostBinding('style.background') background: string = '';

  fileList: FileHandle[] = [];
  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('dragover', ['$event'])
  onDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#078bd750';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#078bd7';
  }

  @HostListener('drop', ['$event'])
  onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#fafffd';

    let fileHandle: FileHandle | null = null;

    // if (e.dataTransfer?.files.length > 1)
    // const file = e.dataTransfer?.files[0];

    let files = e.dataTransfer?.files;
    console.log(files?.length);

    if (this.fileList.length + files?.length! <= 3) {
      for (let i: number = 0; i < files?.length!; i++) {
        const file = files?.item(i);
        const url = this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file!),
        );

        fileHandle = {
          file: file!,
          url,
        };

        this.fileList.push(fileHandle);
      }
    } else {
      return;
    }

    this.files.emit(this.fileList);
  }
}
