import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory.module.routing';
import { MaterialDeliveryComponent } from './material-delivery/material-delivery.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ReturnsComponent } from './returns/returns.component';
import { DamagedComponent } from './damaged/damaged.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [
    InventoryComponent,
    MaterialDeliveryComponent,
    MaterialListComponent,
    ReturnsComponent,
    DamagedComponent
  ]
})
export class InventoryModule { }
