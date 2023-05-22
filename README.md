.1

.2

Index html file serve hoti h na ki particular component

<app-root>hello</app-root> it is app component

Main.ts file sabseh pehele execute hoti scripts chlti

Main.ts there we bootstrap angular app and pass the app.module.ts as an argument, in this module we tell angular you should know AppComponent bootstrap mai likha h reads the setup and knows the selector app-root and angular is able to handle app-root in index html and uski help she app.component.html chalega

.3

View source mai script h jo angular app chalaigi

Components sehh hi angular chl rhi h

Alg alg components bna skte

.4

App component is normal angular component and on other hand it is special root component it is listed in app.module in bootstrap array which tell angular it is specail component ki isse bootstrap the whole application with root component so all the other component will not be added in index.html unke selector idhr add nhi honge there selector will be added in app.com.html file.

.5

Component is a typescript class so that angular is able to instantiate it to create object based on the class

import { Component } from '@angular/core';
@Component({ // decorator typescript ka
          selector: 'app-server', // unique hona chiaye
          templateUrl: './server.component.html', 
        //   styleUrls: ['./server.component.css']
}) // decorator h yeh, it enhance the class
export class ServerComponent {
}


.6

Angular uses components to build web pages and modules to basically bundle diff pieces eg components of app into packages

Bootstrap in module btata ki starting time peh konse component ki awareness honi chaiye angular ko btata

Index.html mai or component nhi dalenge and isliye bootstrap arr  ko touch nhi karenge

By default angular scan nhi karega banne sehh angular doesnot know tujhe specify krna padega

// declaration mai add krke btao bootstrap mai nhi
declarations: [
    AppComponent,
    ServerComponent
  ],

// it allow to add modules to this module
 imports: [
    BrowserModule // built in modules bhi hoti angular ki gives base fxn to start our app
  ],
 
We can split app into diff modules and use modules in our app modules

.7

Ng generate component servers = ng g c servers

This command is used to make new component using cli

Jiss folder mai run karega udhr jake component banega by default app mai bnta

<app-server></app-server>
<app-server></app-server> // components are resuable selector she aise baar baar likhdo

New component bnaya cli sehh toh app.module mai btane ki khud sehh need nhi automatically btadeta hai

.8

 templateUrl: './servers.component.html',

 template: '<app-server></app-server>' component.ts file mai template mai html hota h udhr bhi direct html likh skte uss file ki reference bhi de skte

Idhr likhne she acha new file bnalo .component.html wali

Templates can be used inline in template and can point to the link in templateUrL

.9

styleUrls: ['./app.component.css'] 

Style wala array h coz multiple ko point kr skte html wala nhi tha

styles: [`h3 { color: red; }`]

Ya toh inline use karo ya external file simple

And file html file mai bootstrap toh use kr hi skte h

.10

 selector: 'app-root' // it works as a css selector ki app-root use krlo kahi bhi

// selector: 'app-root',// element style hi use krte h <app-root></app-root>
  // selector: '[app-root]',  // attribute <div app-root></div>
  selector: '.app-root', // class 

Sirf 3 cheeze hi supported h id yeh sab nhi h supported

.11 data binding

Slide

.12

{{}}

Hardcode nhi krni html mai toh ek method h string interpolation

Component.ts = typescript
Component.html = template
Module.ts = module
Testing

String interpolation {{}} mai vo cheez aigi any expression which returns string

You can write multiline expression in string interpolation ki if else kr rha yeh sab nhi kyuki ek tareeke sehh vo statement hogai

You have to get string or aisi cheez jo string mai covert ho skti ho and usko vo automatically convert kr skte h

<button class="btn btn-primary" [disabled]="allowNeverServer">{{allowNeverServer}}</button>

Ts sehh direct pdhliya jata h automatically html mai


.13

[] isse bind hota and isse property bind hoti

 <button class="btn btn-primary" disabled>Add Server</button> 
<button class="btn btn-primary" [disabled]="allowNeverServer">Add Server</button>

Idhr humne jaise disabled attribute tha uspeh property binding krdi aisse kisi peh bhi kr skte

Ab sab dynamic ho rha dono methods mai

We can bind to others property also bas type dekhliyo

Dom mai hr element ki kuch property hoti h and uspeh binding krdi h

In this we are dyanmically binding with native(html ki) disabled property 

<button class="btn btn-primary" [disabled]="allowNeverServer">Add Server</button>


.14

Property binding use it for chainging property

String interpolation is used for printing something

[property] = "ts code likho and vo return karo jo [property] mng rhi h" yeh sab angular smjhega na ki html

{{ts code same cheez hi h string hona chaiye idhr bs}}

<button class="btn btn-primary" [disabled]="allowNeverServer">Add Server</button>
<button class="btn btn-primary" [disabled]="allowNeverServer">{{allowNeverServer}}</button>
<button class="btn btn-primary" [disabled]="allowNeverServer" [innerText]="!allowNeverServer"> </button>


.15 event

<button class="btn btn-primary" [disabled]="allowNeverServer" [innerText]="!allowNeverServer" onclick="" (click)="onCreateServer()"> </button>

Onclick toh attribute h uspeh js ka code likh skte but vo event binding nhi h

() parenthesis ke ander likho jo event html support kr rha usko and "" phir bind krdo

.16

<input type="text" class="form-control" (input)="onUpdateServerName($event)">

Agr data pass krna event sath toh we can emit $ ki help ke event ko 

 onUpdateServerName = (event: Event) => {
    console.log(this);
    this.serverName = (<HTMLInputElement>event.target).value; (casting krni padegi for ts)
  }

.17

Two way data binding mai hum event binding and property binding dono ek sath kr skte

[()] isliye aise h coz () for event and [] for property

ngModel is special directive padhenge age kya hota h directive 

It will triger on input event and update the value of serverName and on the other hand since it is 2 way binding it will update the value  of input also

There is diff  between two way binding and event sehh handle krna then string interpolation krna  yeh 2 way binding NHI HAI yaad rakhna don’t get confuse isliye agr initial value h variable ki vo input mai show nhi hoti but agr 2 way binding ki h toh vo udhr show hojati

<input type="text" class="form-control" [(ngModel)]="serverName">

.18

Components are such type of instruction ek tareeke she directive h

Angular please add out component in this place mtlb ek tareeke sehh instruction hi h toh Indeed components are directives with template there are components without directives

Custom directive build kr skte

We typically add directive as atribute selector but jaise selector of component kara tha waise kr skte

And directive mai attribute ki tarah likhte, component mai element ki tarah

Decorator hi h ts ka

.19

Directives eg component ngModel ngIf ngFor …

*ngIf * is for structural directive as it changes the structure of DOM

<p *ngIf="server">Server Working</p> "iske ander kuch bhi a skta jo true false return kare function bhi kuch bhi"

New element add and remove hota h as it is not present to add yeh nhi ki hide ho remove hota h DOM sehh yaad rkhna


.20

Ng if else hogya yeh

<p *ngIf="server; else noServer">Server Working</p>
<ng-template #noServer><p>No server</p></ng-template>

# it is giving local reference #anyName

Ng-template is a directive(component)  used to mark places in the dom to show conditionally else ki help seh

.21

Attribute directives is wihtout *

It does not add or remove elements. They only change the element they were placed on.

ngStyle is also a directive

[ngStyle] this means ki binding property on the directive

Basically property of directive h

<p [ngStyle]="{backgroundColor: getColor()}">Server with ID {{serverId}} is {{serverStatus}}</p>

It takes js object [ngStyle]="js obj k=propertyName : v="

.22

ngClass is also a directive

It is similar to ngStyle

It helps to add css class and remove css class

[ngClass] = {k=className: v=condition determining ki yeh class lagegi ya ni}

Class tabhi lagegi jab condition true hogi

Sab jagah camelCase hi h

@Component({
  // decorator typescript ka
  selector: 'app-server', // unique hona chiaye
  templateUrl: './server.component.html',
  //   styleUrls: ['./server.component.css']
  styles: [
    `
      .onLine {
        color: white; // aise daal toh di h chlani h class toh ngClass ka use krna padega
      }
    `,
  ],
}) 

Yeh sirf class kelia h ngClass agr direct html element daal diya toh chl jaiga automatically 


.23

ngFor is also a structural directive

In ke pass sare variable ki access h ts file ke tabhi toh of servers kr pa rha h

<app-server *ngFor="let server of servers"></app-server> // ispeh for lga toh ispeh chalne lag gaya 

.25 

Index kaise nikale?

Index is reserve keyword in angular

<app-server *ngFor="let server of servers; let i = index"></app-server>

