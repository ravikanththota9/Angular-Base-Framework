import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialDeliveryComponent } from './material-delivery/material-delivery.component';
import { ReturnsComponent } from './returns/returns.component';
import { DamagedComponent } from './damaged/damaged.component';

const routes: Routes = [
  {
    path: '', component: InventoryComponent,
    children: [
      { path: 'material-list', component: MaterialListComponent },
      { path: 'material-delivery', component: MaterialDeliveryComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'damaged', component: DamagedComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {
}
