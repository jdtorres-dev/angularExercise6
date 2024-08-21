import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnLibDevComponent } from './my-own-lib-dev.component';

describe('MyOwnLibDevComponent', () => {
  let component: MyOwnLibDevComponent;
  let fixture: ComponentFixture<MyOwnLibDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOwnLibDevComponent]
    });
    fixture = TestBed.createComponent(MyOwnLibDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
