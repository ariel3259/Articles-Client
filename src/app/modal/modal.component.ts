import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() label: string = ''
  @Input() title: string = ''
  @Input() btnClass: string = ''
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: TemplateRef<any>){
    this.modalService.open(content)
  }
}
