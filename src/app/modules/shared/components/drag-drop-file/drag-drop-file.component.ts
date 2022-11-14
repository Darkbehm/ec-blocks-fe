import { Component } from '@angular/core';
import { FileHandle } from '../../interfaces/file-handle.interface';
import { faImages, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drag-drop-file',
  templateUrl: './drag-drop-file.component.html',
  styleUrls: ['./drag-drop-file.component.scss'],
})
export class DragDropFileComponent {
  faImages = faImages;
  faTrash = faTrash;
  faEye = faEye;
  fileList: any[] = [];

  file: string | ArrayBuffer | null = null;

  async getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        res(reader.result);
      };

      reader.onerror = (error: Event) => {
        console.log('Error: ', error);
        rej(error);
      };
    });
  }

  async selectFile(e: any) {
    let files = e.target.files;

    if (this.fileList.length === 3) {
      return;
    }

    if (files.length <= 3) {
      console.log(files);
      files = Array.from(files);

      console.log(files);

      files.forEach(async (file: File) => {
        const fileBase64 = await this.getBase64(file);
        this.fileList?.push({ file: file, url: fileBase64 });
        console.log(this.fileList);
      });
    }
  }

  deleteImage(position: number) {
    this.fileList = this.fileList.filter((index, _) => index !== position);
  }

  fileDropped(fileList: FileHandle[]) {
    console.log(fileList);
    this.fileList.push(...fileList);
  }
}
