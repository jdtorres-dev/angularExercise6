import { TestBed } from '@angular/core/testing';

import { MyOwnLibDevService } from './my-own-lib-dev.service';

describe('MyOwnLibDevService', () => {
  let service: MyOwnLibDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyOwnLibDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
