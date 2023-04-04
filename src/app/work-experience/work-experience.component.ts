import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'SWE Intern',
      company: 'Biz2Credit',
      duration: 'Aug 2023',
      description: [
        'Working as an Intern'
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
