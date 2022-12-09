import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { PrismjsService } from '../../services/prismjs.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent
  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy
{
  @Input() language: string = '';
  @Input() code: string = '';
  ngOnChanges(changes: SimpleChanges) {
    this.form.setValue({ content: changes['code']?.currentValue || '' });
    this.renderer.setProperty(
      this.codeContent.nativeElement,
      'innerHTML',
      changes['code']?.currentValue || '',
    );
    this.highlighted = true;
  }

  @Output() getCode: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;

  sub!: Subscription;
  highlighted = false;

  form = this.fb.group({
    content: this.code || '',
  });

  get contentControl() {
    return this.form.get('content');
  }

  constructor(
    private prismjsService: PrismjsService,
    private fb: FormBuilder,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.listenForm();
    this.synchronizeScroll();
  }

  ngAfterViewInit() {
    this.prismjsService.highlightAll();
  }

  ngAfterViewChecked() {
    if (this.highlighted) {
      this.prismjsService.highlightAll();
      // this.highlighted = false;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private listenForm() {
    this.sub = this.form.valueChanges.subscribe((val) => {
      const modifiedContent = this.prismjsService.convertHtmlIntoString(
        val.content!,
      );
      this.renderer.setProperty(
        this.codeContent.nativeElement,
        'innerHTML',
        modifiedContent,
      );
      this.highlighted = true;
      this.getCode.emit(modifiedContent);
    });
  }

  private synchronizeScroll() {
    const localSub = fromEvent(this.textArea.nativeElement, 'scroll').subscribe(
      () => {
        const toTop = this.textArea.nativeElement.scrollTop;
        const toLeft = this.textArea.nativeElement.scrollLeft;

        this.renderer.setProperty(this.pre.nativeElement, 'scrollTop', toTop);
        this.renderer.setProperty(
          this.pre.nativeElement,
          'scrollLeft',
          toLeft + 0.2,
        );
      },
    );

    this.sub.add(localSub);
  }
}
