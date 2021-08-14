import { TestBed } from '@angular/core/testing';

import { TaxInVoiceService } from './tax-in-voice.service';

describe('TaxInVoiceService', () => {
  let service: TaxInVoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxInVoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
