import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PatientInCare } from '../interfaces/patientInCare.interface';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients-in-care',
  templateUrl: './patients-in-care.component.html',
  styleUrls: ['./patients-in-care.component.scss']
})
export class PatientsInCareComponent implements OnInit {

  ELEMENT_DATA!: PatientInCare[];
  displayedColumns: string[] = ['idPatient', 'fullName', 'age', 'gender', 'symptom', 'idTriage', 'idSurgery',
                                'surgeryName', 'nameDoctor', 'registrationDate', 'diagnostic']
  dataSource = new MatTableDataSource<PatientInCare>(this.ELEMENT_DATA);

  constructor(private patientSvc: PatientsService) { }

  ngOnInit(): void {
    this.getPatientsInCare();
  }

  public getPatientsInCare(){
    let resp = this.patientSvc.getPatientsInCare();
    resp.subscribe(care => this.dataSource.data = care as PatientInCare[])
  }

}
