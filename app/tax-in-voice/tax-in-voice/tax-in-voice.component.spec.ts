import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInVoiceComponent } from './tax-in-voice.component';

describe('TaxInVoiceComponent', () => {
  let component: TaxInVoiceComponent;
  let fixture: ComponentFixture<TaxInVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxInVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
