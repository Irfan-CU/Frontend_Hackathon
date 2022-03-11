import { TestBed } from '@angular/core/testing';

import { OrganirouteService } from './organiroute.service';

describe('OrganirouteService', () => {
  let service: OrganirouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganirouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
