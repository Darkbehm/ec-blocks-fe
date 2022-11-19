import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../../../core/interfaces/file-handle.interface';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @Input() max: number = 0;
  @Input() color: string = '';
  @Input() fileType: string = '';
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
    this.background = this.color + '50';

    let files = e.dataTransfer?.items;

    if (!this.validateType(files!)) {
      e.dataTransfer!.dropEffect = 'none';
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#fafffd';
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
    const filesTest = e.dataTransfer?.items;

    if (!this.validateType(filesTest!)) {
      return;
    }
    // console.log('Archivos desde la directiva',files);
    for (let i: number = 0; i < this.max; i++) {
      const file = files?.item(i);
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file!),
      );
      fileHandle = {
        file: file!,
        url,
      };
      this.fileList.push(fileHandle);

      if (files?.length! <= this.max) {
        break;
      }
    }

    this.files.emit(this.fileList);
    this.fileList = [];
  }

  validateType(files: DataTransferItemList): boolean {
    let isvalidType: boolean = false;

    const fileList = Array.from(files);

    for (let file of fileList) {
      console.log(this.fileType);
      if (file.type.includes(this.fileType)) {
        isvalidType = true;
      } else if (
        this.fileType === 'other' &&
        !file.type.includes('image') &&
        !file.type.includes('video')
      ) {
        isvalidType = true;
      } else {
        isvalidType = false;
        break;
      }
    }

    return isvalidType;
  }
}
