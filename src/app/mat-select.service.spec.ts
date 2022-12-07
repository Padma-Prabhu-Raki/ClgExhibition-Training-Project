import { TestBed } from '@angular/core/testing';

import { MatSelectService } from './mat-select.service';

describe('MatSelectService', () => {
  let service: MatSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
