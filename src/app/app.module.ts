import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsInCareComponent } from './pages/patients/patients-in-care/patients-in-care.component';
import { TabPatientsComponent } from './pages/patients/tab-patients/tab-patients.component';
import { SickPatientsComponent } from './pages/patients/sick-patients/sick-patients.component';
import { RecoveredPatientsComponent } from './pages/patients/recovered-patients/recovered-patients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabPatientsComponent,
    SickPatientsComponent,
    PatientsInCareComponent,
    RecoveredPatientsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
