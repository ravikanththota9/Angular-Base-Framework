import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { AuditReportsComponent } from './audit-reports/audit-reports.component';
import { RevenueByProjectsComponent } from './revenue-by-projects/revenue-by-projects.component';

const routes: Routes = [
  {
    path: '', component: ReportsComponent,
    children: [
      { path: 'audit-reports', component: AuditReportsComponent },
      { path: 'revenue-by-projects', component: RevenueByProjectsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {
}
