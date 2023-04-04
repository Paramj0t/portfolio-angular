import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Memories',
      technologies: 'MERN',
      description: [
        'Made this application using mern stack',
      ],
    },
    {
      title: 'Amazon Clone',
      technologies: 'MERN',
      description: [
        'Made amazon clone',
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
