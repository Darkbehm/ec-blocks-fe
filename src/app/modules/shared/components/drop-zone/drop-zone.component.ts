import { Component, Input, OnInit } from '@angular/core';
import {
  faFileVideo,
  faImages,
  IconDefinition,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FileHandle } from '../../interfaces/file-handle.interface';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss'],
})
export class DropZoneComponent implements OnInit {
  faIcon!: IconDefinition;
  faTrash = faTrash;

  faEye = faEye;

  @Input() color: string = '';
  @Input() fileType: string = '';
  @Input() max: number = 0;

  file: FileHandle | null = null;
  constructor() {}

  ngOnInit() {
    switch (this.fileType) {
      case 'image':
        this.faIcon = faImages;
        break;
      case 'video':
        this.faIcon = faFileVideo;
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
    console.log(e.target.files);
    let files = e.target.files;

    files = Array.from(files);

    files.forEach(async (file: File) => {
      console.log(file);
      const fileBase64 = await this.getBase64(file);
      this.file = {
        file: file,
        url: fileBase64!,
      };
    });
  }

  deleteImage(e: any) {
    e.value = null;
    this.file = null;
  }

  fileDropped(fileList: FileHandle[]) {
    this.file = fileList[0];
  }
}
