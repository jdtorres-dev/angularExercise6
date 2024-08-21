import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-lib-button',
  templateUrl: './lib-button.component.html',
  styleUrls: ['./lib-button.component.css']
})
export class LibButtonComponent {
  @Input() label: string = 'Sumbit';
  @Input() color: string = 'Primary';
  
  get buttonClass(): string {
    return `btn-${this.color}`;
  }

}
