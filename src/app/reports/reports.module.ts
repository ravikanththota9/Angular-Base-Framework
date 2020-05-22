import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule } from './reports.module.routing';
import { AuditReportsComponent } from './audit-reports/audit-reports.component';
import { RevenueByProjectsComponent } from './revenue-by-projects/revenue-by-projects.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [
    ReportsComponent,
    AuditReportsComponent,
    RevenueByProjectsComponent
  ]
})
export class ReportsModule { }
