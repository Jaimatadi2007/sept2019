import { TestBed } from '@angular/core/testing';

import { CatserService } from './catser.service';

describe('CatserService', () => {
  let service: CatserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
