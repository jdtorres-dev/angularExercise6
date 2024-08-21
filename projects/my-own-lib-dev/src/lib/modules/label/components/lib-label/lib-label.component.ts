import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-lib-label',
  templateUrl: './lib-label.component.html',
  styleUrls: ['./lib-label.component.css']
})
export class LibLabelComponent {
  @Input() text: string = '';
  @Input() color: string = 'black';
  @Input() fontSize: string = '14px';
  @Input() fontWeight: string = 'normal';
}
