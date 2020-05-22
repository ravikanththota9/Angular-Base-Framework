import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsTasksComponent } from './projects-tasks/projects-tasks.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CustomerInvoicesComponent } from './customer-invoices/customer-invoices.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { InspectionComponent } from './inspection/inspection.component';
import { CustomerSurveyComponent } from './customer-survey/customer-survey.component';
import { DocumentsComponent } from './documents/documents.component';
import { SettingsComponent } from './settings/settings.component';
import { GlobalDashboardComponent } from './global-dashboard/global-dashboard.component';


const routes: Routes = [
  { path: 'g-dashboard', component: GlobalDashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects-tasks', component: ProjectsTasksComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'customer-invoice', component: CustomerInvoicesComponent },
  { path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'contractors', component: ContractorsComponent },
  { path: 'inspection', component: InspectionComponent },
  { path: 'customer-survey', component: CustomerSurveyComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
