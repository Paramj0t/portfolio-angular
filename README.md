
…1

Slides dekhlo and rkhlo and bookmark kr rha site and links viedoes mai hi h


…2

Node js is required to run angular cli


…3

AngularJs(1) vs Angular2 frk h and Angular 2 peh hi sab build h


…5

Ng new mai no white space and test keyword use nhi krna

ng new my-first-app --no-strict (strict mode dekhenge baad mai)

Ng serve for dev server ko run krne kelia and ng serve --open direct open krdega by default 4200 port hota


..6

Index.html chlti sabseh phele and dynamically commonents chlte h

HTML // app component jo dikhta h
<input type="text" [(ngModel)]="name"> // ngModel is a directive(tool) bascially it tells angular to listen to anything you enter here and store it in name property
Modal nhi h Model h pheli baat
 
<input type='text' /> yeh bhi chl rha h /> krlo ya > same baat h

Yeh sab common empty tag h mtlb closing nhi h inki
<br>
<hr>
<img>
<input>
<link>
<meta>

Self-closing tags in HTML are sometimes also known as empty tags

<p>{{ name }}</p> // yeh component.ts file seh aiga name

Module // ismeh hum btate angular ko ki which pieces belonga to our app
import { FormsModule } from '@angular/forms';  // yeh to h ts ka feature h ki kuch bhi use krna toh btao phele ki where things are

 imports: [BrowserModule, FormsModule],

@ngmodule is angular module

Ng = angular

…7

…8

…9
Vanilla js is plain js hi uske upr typescript ES5-6 toh versions h

…10

Angular.json 

 "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
Bootstrap chalane kelia yeh karo mtlb angular.json mai dedo



->

Angular chl toh script seh hi rhi.

View page source usmeh script tag hoga udhr seh chl rhi angular.

