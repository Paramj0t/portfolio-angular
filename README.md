.1


.2

Ek compo sab mt rakho alg alg rakho betterment kelia

Kisi folder ke ander create knri ho toh 

Ng g c folder1/folder2/name

By default app folder hota jidr component create hota.


.3

Communication hr jagah ho skti … abhi compo to compo dekh rhe

.4

By default all prop of components are only accessible inside the component not outside.

You should be clear ki konsi property world ko export krno mtlb component sehh bahar nikalni.

Jo bhi ts file mai likha vo properties h vo component isliye accessible thi ngfor if mai … ab bahar access deni h toh explicitly mention krna padega.

Custom property bindings (ts child sehh parent template[html])

Jismeh @input laga decorator uspeh bind karo mtlb bind to element agr element mai lgaya toh

Child mai @input tha parent ne bind krliya and parent ne data neeche beeja 

@Input() element: {type: string, name: string, content: string};

 <app-server-element *ngFor="let element of serverElements" [element]="serverElements"></app-server-element>


.5

Apni property bnake usko bind kra h @Input she

Ab mujhe apne component peh kuch or name chaiye x property ka or same property bahar use ho rhi h uska kuch or name sehh ho toh alias dedo

 @Input('srvElement') element: {type: string, name: string, content: string};
 // srv element alias h bahar is name sehh use hoga ab


.6

Parent -> data neeche -> child @Input sehh or property bind hogi child ki -> parent shh. (Custom property binding)


Binding to custom events

 <app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit>

// yeh custom event h apne component peh

onServerAdded(serverData: {serverName: string, serverContent: string}) { // isliye idhr serverData ka type khud sehh diya h ki isi type ka hona chaiye custom h khud ka isliye agr click event hota toh we cant change it
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


Child component mai emit karenge event ko parent ki taraf and parent html mai catch karega

Component.ts child ki
serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // yeh eventemitter bnaliya jismeh jo data accept kr rha vo <idhr dediya>() and obj bnaliya () [construcotr call krke].


Event emiiter is a obj in angular which allows you to emit your own event.


We added @Input to make a property bindable from outside.

Now we need to add something to property to make it kind of listnable from outside

 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }

<app-cockpit (serverCreated)="onServerAdded($event)" (blueprintCreated)="onBlueprintAdded($event)"></app-cockpit> // custom event

@input sehh she ander lete the and @Output she bahar jo name h wiase hi hota idhr


Sab kuch bnaigai compoonent peh ho rha h


.7

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

// aliasing is name sehh use karo ab.


.8


Yeh upr ke dono mehtod parent child wale the … siblings ke nhi


.9

View encapsulation of angular

Angular ka behaviour h ki css property jo uss component peh h uspeh hi rahegi


Or kahi kahi jaise p element peh color kiya tha inspect peh vo p[ng …] something arha toh vo angular ki specific h toh that component bta rha

Same attribute dedeta toh all elements in one component to differentiate



.10

If you want to change view encapsultaion of angular


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None = idhr selectors change nhi krta angular isliye app wise lg jate
						.Emulated = defualt behaviour 
						.native same as emulated it used shadow dom technology
})


.11

We can use local reference only in template not in ts file

 <input type="text" class="form-control" [(ngModel)]="newServerName"> // jab ng model use nhi krna toh use ref

 <input type="text" class="form-control" #serverNameInput> // ref leli and is ref ko sirf template(hmtl) mai hi use kr skte ho ts code mai ni

<button
        class="btn btn-primary"
        (click)="onAddServer(serverNameInput)">Add Server</button>

 ab ts code mai html ke throw fxn mai pass kr skte event mai … direclty nhi kr skte the


onAddServer(serverNameInput: HTMLInputElement) { // type dekhle ab param ki tarah aya toh use krlo direct way nhi h

    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.newServerContent})
    console.log(serverNameInput);

  }


.12


Local ref mai kya ho rha tha ki ref li and method call hua toh pass hua ts mai lekin hume phele hi access chaiye toh ky kare

  <input type="text" class="form-control" #serverContentInput>

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef; // view child decorator use kara with selector of the element ref jo di h and clg krke dekha konsa type h ElementRef h.


onAddServer(serverNameInput: HTMLInputElement) {

    this.serverCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value})
//this.serverContentInput.nativeElement mtlb ki us element ko access kara and .value lagadi uspeh.
    console.log(serverNameInput);

  }


Isse dom ki access mil gai h but dom ke sath idhr sehh mt khelo and kuch property dom ki change na karo 

.value = 2; aise mt karo kuch bad way … angular ke pass better way h vohi use krna vo age aiga.


.13

Ng-content

<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement">
         <p>
            <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
            <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
          </p>
</app-server-element>

<div class="panel-body">
          <ng-content></ng-content> // use this agr lena h toh parent sehh code html ka
Ng content ki jagah code ajaiga parent she.
</div>

Projected into your child component.


.14

Slides


.15

Angular support couple of life cylce hooks.

Life cycle hooks sab interface h tabhi implements ho rhe.

And bina implements kare bhi chl jaiga but karlo implments.

Agr refernce change nhi hui mtlb vo change nhi hua h toh mtlb ki ng on changes nhi chalega.

ngDocheck do baar call hota kyuki we are in dev mode here angular have extra change detection cycle.

Yeh sab order mai hi likha h

import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input('srvElement') element: {type: string, name: string, content: string};
  
  constructor() {
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanged called', changes); 
   }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called'); 
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called');
  }
}


.16

Sab kuch angular core sehh hi ho rha h import 

ngAfterViewInit mtlb template render hone ke baad hi humare pass dom ki access h tabhi kuch access kr paiga.


Viewchild ki acess afterviewinit baad hi h


@ViewChild('elementDiv') ele: ElementRef;

 <div class="panel-body" #elementDiv>

 ngAfterViewInit(): void { // is hook sehh hi accessible h
      console.log('ngAfterViewInit called');
      console.log(para);
  }



.17

 <p #contentPara>- // paraent mai ref deke child ke lifecyle hooks mai access kiya
            <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
            <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
          </p>

 <ng-content></ng-content> child mai

 @ContentChild('contentPara') para: ElementRef; // Content child similar as view child

It will run after 

ngAfterContentInit(): void {
      console.log('ngAfterContentInit called');
      console.log(ele);
  }

Is hook sehh chalega.

