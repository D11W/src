import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaxInVoiceComponent} from './tax-in-voice/tax-in-voice.component';

const routes: Routes = [
  {path:"taxInVoice",component:TaxInVoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxInVoiceRoutingModule { }
