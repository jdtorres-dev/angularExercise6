import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibLabelComponent } from './lib-label.component';

describe('LibLabelComponent', () => {
  let component: LibLabelComponent;
  let fixture: ComponentFixture<LibLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibLabelComponent]
    });
    fixture = TestBed.createComponent(LibLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
