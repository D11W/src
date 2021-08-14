import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    UpdateClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ],
  exports:[
    ClientComponent
  ]
})
export class ClientsModule { }
