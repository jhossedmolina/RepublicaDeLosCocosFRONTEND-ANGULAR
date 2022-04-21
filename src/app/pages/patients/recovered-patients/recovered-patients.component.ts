import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../interfaces/patient.interface';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-recovered-patients',
  templateUrl: './recovered-patients.component.html',
  styleUrls: ['./recovered-patients.component.scss']
})
export class RecoveredPatientsComponent implements OnInit {

  ELEMENT_DATA!: Patient[];
  displayedColumns: string[] = ['id', 'idTriage', 'fullName', 'age', 'gender', 'symptom', 'checkIn'];
  dataSource = new MatTableDataSource<Patient>(this.ELEMENT_DATA);

  constructor(private patientSvc: PatientsService) { }

  ngOnInit(): void {
    this.getRecoveredPatients();
  }

  public getRecoveredPatients(){
    let resp = this.patientSvc.getRecoveredPatients();
    resp.subscribe(recovered => this.dataSource.data = recovered as Patient[])
  }

}
