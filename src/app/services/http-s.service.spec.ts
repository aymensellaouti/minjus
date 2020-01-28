import { TestBed } from '@angular/core/testing';

import { HttpSService } from './http-s.service';

describe('HttpSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSService = TestBed.get(HttpSService);
    expect(service).toBeTruthy();
  });
});
