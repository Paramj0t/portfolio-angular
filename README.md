.1

Pipes are used to transform a value and output it.

Eg jaise param small name h usko html mai dikhana caps mai h toh in sab cheezo kelia pipe use hota h and rahe param small name but print caps mai ho.


.2

 {{ server.instanceType | uppercase }} 

 {{ server.started | date }}


| pipe sybmol dala | uppercase jisse upercase hogya, | date pipe date set krde sahi seh.

Yeh sab inbuilt pipes h.


.3

Configure pipes

 {{ server.started | date:'fullDate'  }}

:'' aise krke params bhej skte it accepts string.


.4

Official docs dekhlo pipes ki.


.5

Chaining pipes

It executed from left to right.

 {{ server.started | date:'fullDate' | uppercase }}
 
Order matter krta h.


.6

Pipe is something that u put something and u get something out.

Just like component and derective you need to add pipes in declaration in app.module.

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe
  ],


import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ // pipe decorator use krlo
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform { // implement krlo interface ko jusse method override karna pade.
  transform(value: any) {
      return value.substr(0, 10) + '...'; // pipe will always return something
  }
}


  <strong>{{ server.name | shorten}}</strong> 

Interface krna is good practice.


.7

export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number, , ... Aise krke input le skte params ko) {
      return value.substr(0, limit) + '...';
  }
}

 <strong>{{ server.name | shorten:2:3:3: aise krke chain kr skte parameter ko }}</strong>


.8

*ngFor="let ... | idhr pipe use krskta ngfor mai hi"



.9

Filter mode mai pipe change nhi hoti.

Pure pipe does not re calculate or execute when data change but impure does.

@Pipe({
  name: 'shorten',
  pure: false
})

Decorator mai pure false krdo.

It will cause perfomance impure wala.

Pure pai tab change hoti thi jab argument change hote the but impure ab kuch bhi change ho re calculate hogi. It is bad behaviour impure wala.



.10

Aysnc pipes

Resolve hone seh phele promise is a object


appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });


 {{appStatus | async}}

Aysnc ki help seh vo watch kr rha continuosly ki data change ho rha ya nhi coz aysnc nhi hoga toh change nhi hoga frontend peh backend peh ho chuka async seh frontedn peh bhi change hojaiga.


Aysnchronous operation peh continuous watch kela ayscn pipe use karo.
