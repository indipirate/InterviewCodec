import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() actionButtonFunction = new EventEmitter<any>(true);
  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  emitEventForParent(): void {
    this.actionButtonFunction.emit(this.data);
    this.onNoClick();
  }

}
