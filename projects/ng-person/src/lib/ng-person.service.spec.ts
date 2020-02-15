import { TestBed } from '@angular/core/testing';

import { NgPersonService } from './ng-person.service';

describe('NgPersonService', () => {
  let service: NgPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPersonService);
  });

  it('should support first name only', () => {
    expect(service.getInitials('Akop')).toEqual('A');
  });
  
  it('should support first and last name', () => {
    expect(service.getInitials('akop kesheshyan')).toEqual('AK');
  });
});
