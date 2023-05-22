.1


.2

ngMoudles ka code htana toh angular team ne standalone modules nikale jisse ngModules na use krni pade.


.3

Standalone component ngModule ke declaration mai nhi ane chaiye.

@Component({
  standalone: true, // jis component ko banan standalone vo bnado
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})

@NgModule({ 
  declarations: [AppComponent, WelcomeComponent], // idhr seh htake
  imports: [BrowserModule, SharedModule, DetailsComponent], //  idhr btado
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

Or ab directly kahi bhi use krlo

Directives and pipes can be turned into standalone.


.4

Its not enough to add standalone flag to true but you have to import into component or modules.


.5

Ek hi jagah import karo ya toh module ya toh component.


.6

Idea behind standalone component is that they work without modules.

But app component ki module htadi toh kaise use hoga uske lia hume main.ts mai change krna padega

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent);



.7

Services and standalone.

Services toh hr jagah use krlo {provided in krke} but agr provided in nhi h and new instances banni hr component mai toh use 

@Component({
   providers: [AnalyticsService]
})


And same instance krni h toh main.ts mai 

bootstrapApplication(AppComponent, {
  providers: [AnalyticsService]
});

Yeh krlo lekin dono seh acha h providedIn krdo best.



.8

Routing and Standalone

Ab module nhi h coz standalone h toh angular router-outlet yeh sab kuch nhi janta coz module ht gai isliye ab componetn mai btana padega

@Component({
  standalone: true,
  imports: [ WelcomeComponent, RouterModule], // RouterModule btadi
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


Ab app-routing-module chalani h toh use 

Main.ts mai yeh changes krlo jisse routing chlne lag jai standalone sath.

bootstrapApplication(AppComponent, {
  providers: [AnalyticsService, importProvidersFrom(AppRoutingModule)]
});


.9

Lazy loading

loadComponent: () => import('').then(mod=>mod.AboutComponent)

This syntax works with standalone component to get lazzy loading together.
