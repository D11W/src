import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "",redirectTo:"home",pathMatch:"full"},
  // {path:"register",component:RegisterComponent},
  // {path:"login",component:LoginComponent}, 
  // {path:"header",component:HeaderComponent},
  // {path:"footer",component:FooterComponent},
  // {path:"home",component:HomeComponent},
  // {path:"forgot",component:ForgotPasswordComponent},
  // {path:"changepassword", component:ChangePasswordComponent},
  // {path:"taxInVoice",component:TaxInVoiceComponent},
  // {path:"client",component:ClientComponent},
  // {path:"clientList",component:ClientListComponent},
  // {path:"deleteClient/:id",component:ClientListComponent},
  // {path:"update/:id",component:UpdateClientComponent},
  // {path:"taxInVoiceList",component:TaxInVoiceListComponent}

  {path:"auth",loadChildren:()=>import("./users/users.module").then(mod=>mod.UsersModule)},
  {path:"client",loadChildren:()=>import("./clients/clients.module").then(mod=>mod.ClientsModule)},
  {path:"tax",loadChildren:()=>import("./tax-in-voice/tax-in-voice.module").then(mod=>mod.TaxInVoiceModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
