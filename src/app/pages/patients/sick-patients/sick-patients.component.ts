import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../interfaces/patient.interface';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-sick-patients',
  templateUrl: './sick-patients.component.html',
  styleUrls: ['./sick-patients.component.scss']
})
export class SickPatientsComponent implements OnInit {

  ELEMENT_DATA!: Patient[];
  displayedColumns: string[] = ['id', 'idTriage', 'fullName', 'age', 'gender', 'symptom', 'checkIn'];
  dataSource = new MatTableDataSource<Patient>(this.ELEMENT_DATA);

  constructor(private patientSvc: PatientsService) { }

  ngOnInit(): void {
    this.getSickPatients();
  }

  public getSickPatients(){
    let resp = this.patientSvc.getSickPatients();
    resp.subscribe(sicks => this.dataSource.data = sicks as Patient[])
  }

}
