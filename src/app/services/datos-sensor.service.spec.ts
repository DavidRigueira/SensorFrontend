import { TestBed } from '@angular/core/testing';

import { DatosSensorService } from './datos-sensor.service';

describe('DatosSensorService', () => {
  let service: DatosSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
