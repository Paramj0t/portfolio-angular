import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'param-portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.pcMode = false;

              if (breakpoint === Breakpoints.WebLandscape) this.pcMode = true;
            }
        },
      });
  }

  ngOnInit() {

    this.activatedRoute.fragment.subscribe((value) => this.jumpTo(value));
    
    }

    jumpTo(section: any) {
    
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    
    }
}
