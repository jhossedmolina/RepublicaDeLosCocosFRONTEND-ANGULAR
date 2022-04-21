import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPatientsComponent } from './pages/patients/tab-patients/tab-patients.component';

const routes: Routes = [
  { path: 'tabPatients', component: TabPatientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
