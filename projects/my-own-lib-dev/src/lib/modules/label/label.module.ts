import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibLabelComponent } from './components/lib-label/lib-label.component';



@NgModule({
  declarations: [
    LibLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LibLabelComponent
  ]
})
export class LabelModule { }
