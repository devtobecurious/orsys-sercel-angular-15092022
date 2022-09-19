import { TestBed } from '@angular/core/testing';

import { FilmsDataLayerService } from './films-data-layer.service';

describe('FilmsDataLayerService', () => {
  let service: FilmsDataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsDataLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
