import { TestBed } from '@angular/core/testing';

import { GdevSearchService } from './gdev-search.service';

describe('GdevSearchService', () => {
  let service: GdevSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdevSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
