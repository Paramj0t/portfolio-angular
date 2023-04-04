import { Component, OnInit, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  myData: string[][] = [
    ['Name', 'Paramjot Singh'],
    ['DOB', '10/06/2000'],
    ['Work Exp', '0 Years'],
    ['Education', 'Btech 2023'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Im passionate Full Stack web developer having an experience of web applications with Mern Stack',
    'Currently, working as SWE Intern in Biz2Credit',
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
    .subscribe({
      next: (result: any) => {
        for (let breakpoint of Object.keys(result.breakpoints)) {
          if(result.breakpoints[breakpoint]) {
            if(breakpoint === Breakpoints.HandsetPortrait) {
              this.pcMode = false;
            }

            if(breakpoint === Breakpoints.WebLandscape) {
              this.pcMode = true;
            }
          }

          
        }
      },
    });
  }

}