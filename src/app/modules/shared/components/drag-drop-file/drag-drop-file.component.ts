import { Component, Input, OnInit } from '@angular/core';
import { FileHandle } from '../../../../core/interfaces/file-handle.interface';
import {
  faImages,
  faPlay,
  faFilm,
  faFile,
  faFileVideo,
  faTrash,
  faEye,
  IconDefinition,
  faArchive,
  faFolder,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drag-drop-file',
  templateUrl: './drag-drop-file.component.html',
  styleUrls: ['./drag-drop-file.component.scss'],
})
export class DragDropFileComponent implements OnInit {
  faIcon!: IconDefinition;
  faTrash = faTrash;
  faEye = faEye;
  faAction!: IconDefinition;
  altIcon!: IconDefinition;

  title: string = '';

  emptyMessage: string = 'Todavia no has subido';
  fileList: any[] = [];

  @Input() color: string = '';
  @Input() fileType: string = '';
  @Input() max: number = 0;

  file: string | ArrayBuffer | null = null;

  ngOnInit() {
    switch (this.fileType) {
      case 'image':
        this.faIcon = faImages;
        this.title = 'Imagenes';
        this.faAction = faEye;
        this.emptyMessage += ' imagenes';
        break;
      case 'video':
        this.faIcon = faFileVideo;
        this.title = 'Videos';
        this.faAction = faPlay;
        this.altIcon = faVideo;
        this.emptyMessage += ' videos';
        break;
      case 'other':
        this.faIcon = faFile;
        this.title = 'Archivos';
        this.altIcon = faFolder;
        this.faAction = faEye;
        this.emptyMessage += ' archivos';
        break;
      default:
        break;
    }
  }

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

    if (this.fileList.length === this.max) {
      return;
    }

    if (files.length <= this.max) {
      // console.log(files);
      files = Array.from(files);

      // console.log(files);

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
    console.log('fileList de la directiva ', fileList);

    console.log('fileList del componente ', this.fileList);
    if (this.fileList.length < this.max) {
      for (let file of fileList) {
        this.fileList.push(file);

        if (this.fileList.length === this.max) {
          break;
        }
      }
    }
  }
}
