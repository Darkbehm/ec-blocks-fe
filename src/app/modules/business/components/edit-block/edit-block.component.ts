import { Component } from '@angular/core';
import { faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.scss'],
})
export class EditBlockComponent {
  faWrench = faWrench;
  faJS = faJs;
  faCSS = faCss3Alt;
  faHTML = faHtml5;
  faClose = faTimes;

  jsonCode: string = ``;
  jsCode: string = ``;
  cssCode: string = ``;
  htmlCode: string = ``;
}
