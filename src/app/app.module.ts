import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
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

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ForgotPasswordComponent,
      HeaderComponent,
      SidenavComponent,
      HomeComponent,
      DashboardComponent,
      CustomersComponent,
      ProjectsComponent,
      ProjectsTasksComponent,
      InvoicesComponent,
      CustomerInvoicesComponent,
      ContractorsComponent,
      InspectionComponent,
      CustomerSurveyComponent,
      DocumentsComponent,
      SettingsComponent,
      GlobalDashboardComponent
   ],
   imports: [
      BrowserModule,
      ChartsModule,
      AppRoutingModule,
      AgGridModule.withComponents([]),
      NgSelectModule,
      FormsModule
   ],
   providers: [],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
