import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from './components/lib-button/lib-button.component';



@NgModule({
  declarations: [LibButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LibButtonComponent
  ]
})
export class ButtonModule { }
