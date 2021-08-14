import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInVoiceListComponent } from './tax-in-voice-list.component';

describe('TaxInVoiceListComponent', () => {
  let component: TaxInVoiceListComponent;
  let fixture: ComponentFixture<TaxInVoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxInVoiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInVoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
