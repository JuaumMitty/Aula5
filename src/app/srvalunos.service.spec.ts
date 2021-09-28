import { TestBed } from '@angular/core/testing';

import { SrvalunosService } from './srvalunos.service';

describe('SrvalunosService', () => {
  let service: SrvalunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvalunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
