import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogserviceService {
  private modalCallBack = new Subject<any>(); // Source
  public modalcallBack$ = this.modalCallBack.asObservable(); // Stream

  constructor(private matDialog: MatDialog) {}

  openFromDialog(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.data = data;
    dialogConfig.minWidth = '400px';
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    modalDialog.componentInstance.actionButtonFunction.subscribe(
      (data: any) => {
        this.modalCallBack.next(data);
      }
    );
    modalDialog.afterClosed().subscribe((clsoed) => {});
  }
}
