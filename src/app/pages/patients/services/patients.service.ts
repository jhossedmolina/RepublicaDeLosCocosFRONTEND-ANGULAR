import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../interfaces/patient.interface';
import { PatientInCare } from '../interfaces/patientInCare.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private apiURL = environment.API;
  constructor(private http: HttpClient) { }

  getSickPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL + '/Patient');
  }

  getPatientsInCare(): Observable<PatientInCare[]> {
    return this.http.get<PatientInCare[]>(this.apiURL + '/PatientInCare');
  }

  getRecoveredPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL + '/RecoveredPatient');
  }


}
