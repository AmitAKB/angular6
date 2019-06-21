import { Component, OnInit, Input, HostListener, ElementRef, Output, OnChanges, EventEmitter } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    providers: [NgbModal],
	styleUrls: ['./dialog.component.scss'],
	animations: [
		trigger('dialog', [
		  transition('void => *', [
			style({ transform: 'scale3d(.3, .3, .3)' }),
			animate(100)
		  ]),
		  transition('* => void', [
			animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
		  ])
		])
	]
})
export class dialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean = true;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}