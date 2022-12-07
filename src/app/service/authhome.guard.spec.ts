import { TestBed } from '@angular/core/testing';

import { AuthhomeGuard } from './authhome.guard';

describe('AuthhomeGuard', () => {
  let guard: AuthhomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthhomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
