import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [ParentComponent],
  imports: [CommonModule],
  exports: [ParentComponent],
})
export class ParentModule {}
