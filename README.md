
.1

Vohi hote directives structural … yeh sab


.2

ngFor and ngIf directives hi h

Inbuilt wale h 

ngFor/ngIf saare properties accessible h ts file ki.

<li
     class="list-group-item" *ngFor="let number of numbers">
     {{number}} // string interpolation krke hi display kr skte dynamic html mai
</li>


We cant have more than one structural directive on same element
 <li
         class="list-group-item" *ngFor="let number of numbers" *ngIf="number % 2 === 0">
         {{number}}
 </li>

Or ek peh do karo bhi mt


.3

ngStyle/ ngClass directive hi h

<li
          class="list-group-item" *ngFor="let number of numbers" [ngClass]="{odd: true}" [ngStyle]="{backgroundColor: 'green'}">
          {{number}}
</li>

<ng-template [ngIf]="onlyOdd">
        <p>Only odd</p>
      </ng-template>



.4

Angular mai styles camelCase mai honge css mai camel-case aise honge bem naming convention

import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
        selector: '[appBasicHighlight]' // idhr jo likha h ki [] square brackets ke ander vo tune isliye nhi likha kyuki angular ne bola vo isliye likha kyu ki ab tu name kahi bhi bina square brackets ke use kr sskta … array nhi h.
})
export class BasicHighlightDirective implements OnInit { // component tarah hi h sab hooks chlte

        constructor(private elementRef: ElementRef) {}

        ngOnInit() {
                this.elementRef.nativeElement.style.backgroundColor = 'green';
        }
}

 declarations: [
    AppComponent,
    BasicHighlightDirective // inform angular in app module
  ],

 <p appBasicHighlight>Style me with my directive</p> naki [appbace…] aise.



.5

ngOnInit() {
                this.elementRef.nativeElement.style.backgroundColor = 'green'; // yeh mt karo coz angular bina dom ke bhi render krta h template ko toh phir yeh properties nhi chalegi.
}


Ng g d name directive cli she banane kelia


import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]' // is selector she ab kahi bhi access kr skte ho 
})

export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); // better way aise karo change kuch bhi (elementRef, property to set, kay set ki)
  }
}

Html mai kaise kr pa rhe selector ke through dimag lagao


Renderer is better approach to manipulate the dom.

Why better?
Angular is not limited to running in the browser jidr browser nhi hua udhr dom kaise hoga isliye use renderer.


.6

We need to react to element on which directives sit on.

New decorator add krlo iske lia

It  takes event name as input dom mai built in wale. @HostListener(event dom wala built in name)
 @HostListener('mouseenter') mouseoveranyname(eventData: Event) {
    
  }

Yeh automatically chlta h khud she.


.7

Ab renderer ke bina krna h toh use @HostBinding


export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'green';
  }
}


.8

Ab dynamic colors bhi use krne, hostbinding ke toh kya karenge?

<p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">Style me with my directive</p>


@Input() defaultColor: string = 'transparent'; // input use krlo na simple dynamic kelia
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; 
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
    this.backgroundColor = this.defaultColor;// yeh krdo aise
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }



Ab host binding mai nhi chl rha tha iniliay kyu ki abhi property set nhi hui thi bahar default wali toh abhi jab sath set hoaji before rendering and after properties are available tab sahi chalega ngOnInit

ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }


Using directive name as property jaise ngClass mai hua hua.

Input('BetterHighlightDirective') highlightColor: string = 'blue'; // same name ka alias ho skta directive ke

Then use directive in [] brackets and give property []="''" and quotes mtlb string nhi quotes ke ander ke quotes mtlb string hote h.

Or agr string pass kr rhe property binding mai toh can use it without [] brackets and name = "" direct bajai 
[name] = "''"



.9

Structual directive

Property binding hoti h, event binding hoti h, two way binding hoti h, string interpolation hoti h.

*

<ng-template [ngIf]="onlyOdd"> // jab kuch optionallly render krna ho toh use ng-template and uspeh we can use ngif yeh sab attribute ki tarah and normal jagah peh we use it as structral directive ki tarah *.
        <p>Only odd</p>
</ng-template>

Behind the scene aise work krta h


.10

Constructor mai public private daaldiya kr nhi toh automatically this. Yeh sab nhi hota

Star automatically converts to ng-template syntax peh


<ng-template [appUnless]="onlyOdd">
        <p>Only odd</p>
</ng-template>

<p *appUnless="onlyOdd">Only odd</p>


import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) { // set method bnadiya and same name hona chaiye jo selector ka h
   
 if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear;
    }

  }

// templateRef(What) gives access of Template same as elementRef gives acess to element, viewContainerRef(Where) tells where should we render out directive.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  
}


.11

Ng switch

Switch statement hi h

<div [ngSwitch]="value">
        <p *ngSwitchCase="5">value is 5</p>
        <p *ngSwitchCase="10">value is 10</p>
        <p *ngSwitchDefault>value is default</p>
</div>
