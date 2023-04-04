import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "MSIT",
      course: 'BTECH',
      duration: '2019-2023',
      score: '80%',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
