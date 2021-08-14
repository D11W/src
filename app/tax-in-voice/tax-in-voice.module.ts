import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TaxInVoiceRoutingModule } from './tax-in-voice-routing.module';
import { TaxInVoiceComponent } from './tax-in-voice/tax-in-voice.component';



@NgModule({
  declarations: [
    TaxInVoiceComponent,

  ],
  imports: [
    CommonModule,
    TaxInVoiceRoutingModule,
    FormsModule
  ],
  exports: [
    TaxInVoiceComponent
  ]
})
export class TaxInVoiceModule { }
