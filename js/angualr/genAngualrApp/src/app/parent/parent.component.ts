import { Component, OnInit } from '@angular/core';
import { DialogserviceService } from '../dialogservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public counter: number;
  private modalCallbackSubscription: Subscription;
  constructor(private service: DialogserviceService) {}

  ngOnInit(): void {
    this.counter = 0;
    this.service.modalcallBack$.subscribe((modalOptions) => {
      this.counter++;
      this.handleModalCallback(modalOptions);
    });
  }

  openFormModal(type: string, data: any): void {
    const options: any = {
      title: 'title',
      name: 'name',
      id: 'id',
      actionButtonText: 'ADD',
      content: 'Hi Children',
      showActionButton: true,
      isHtml: true,
      formData: data,
    };
    this.service.openFromDialog(options);
    console.log(this.modalCallbackSubscription);
  }
  handleModalCallback(data: any): void {
    console.log('Iam a function of Parent compoent.');
  }
}
