import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {ClientListComponent} from './client-list/client-list.component';
import {UpdateClientComponent} from './update-client/update-client.component';

const routes: Routes = [
  {path:"client",component:ClientComponent},
  {path:"clientList",component:ClientListComponent},
  {path:"edit",component:UpdateClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
