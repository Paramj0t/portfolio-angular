.1 (slides toh sabki dekhlena)

You receive 3 types of data packages. Handle data handle error handle completion.

Some observable gets completed some not like http req gets completed but button click does not as user can press n no. of times.

Observables are diff approach of handling async code.


.2

Observables are contructs to which you subscribe to be informed about change in data 


.3

Jo observables h phele she unko import nhi krna but jo nhi h and creating your own unko karo.

Subscribe returns subscription

import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubs: Subscription;

  constructor() { }

  ngOnInit() {
//interval value deta h hr time interval baad increment hoti rheti setTimeout ki tarah h.
     this.firstObsSubs = interval(1000).subscribe((value) => { // .subscribe return subscription.
       console.log(value);
     })
  }

  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe(); // jab bhi leave hoga component toh toh unsubscribe hojaiga.
  }
}


Jab tune unsubscribe nhi kiya tha na toh jab tu component she jata tha tab ngDestroy call hota h waise but jab tu component leave krta h toh observable peh subscribe hi rheta h and vapis ata h toh new observable toh bnta hi h or purana chlta rheta but isse memory leak hogi isliye apne bnai hoi observables ko unsubscribe kardo.

Unsubscribe krne she jab component leave hua usee observable dead hojata h and vapis ai toh new bnta h


.4

Custom pura apna bnaliya h

ngOnInit() {
// yeh tune apna obs bnaliya interval ki tarah ismeh subs karo ab 
    const customInteralObs = Observable.create((observer) => { // observer hi listener h

      let count = 0;

      setInterval(() => {
        observer.next(count); // telling observer about the data.
        ++count;
      }, 1000)

    })


    this.firstObsSubs = customInteralObs.subscribe(data => {
      console.log(data);
    }),

  }


  ngOnDestroy(): void {
    this.firstObsSubs.unsubscribe(); // jab bhi leave hoga component toh toh unsubscribe hojaiga.
  }



.5

Error

Whenever obs throws error it dies. Tab you no need to unsubscribe.

 const customInteralObs = Observable.create((observer) => {      
 let count = 0;
      setInterval(() => {

        observer.next(count);  
        if(count > 3) {
          observer.error(new Error('Error')); // yeh error throw krdiya h 
        }
        ++count;
      }, 1000)
    })

    this.firstObsSubs = customInteralObs.subscribe(data => {
      console.log(data);
    }, error => { // idhr 2nd argument error hi h phela subscribe tha
      console.log(error);
    })
  }


Completion

When it gets completed it automatically get unsubscribed but agr tum kr bhi doge toh no problem.


ngOnInit() {

      const customInteralObs = Observable.create((observer) => { 
      let count = 0;

      setInterval(() => {
        observer.next(count); 

        if(count == 2) { // yeh completion kelia 
          observer.complete();
        }

        if(count > 3) { 
          observer.error(new Error('Error'));
        }

        ++count;
      }, 1000)
    })

    this.firstObsSubs = customInteralObs.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => { // completion mai koi argument nhi ata or upr dono mai argument ate h
      console.log('completed');
    })
  }
  

Error cancel the observables it does not complete it.

Interval setInterval ki tarah h.


.6

Operators

 const obs = customInteralObs.pipe(map((data) => { // jo data subscribe krne peh mil rha bo ab aise mil skta operator through.
      return 'Round ' + data;
    }), … or agruments bhi daal skte.)


const obs = customInteralObs.pipe(
      filter((data: number) => { // aise bhi kr skte multiple arguments and hr ek she return true karoge tabhi age jaiga.
        return data > 0;
      }),
      map((data) => {
        return 'Round ' + data;
      })
    );


//idhr name change krlena kyuki opertoar lgne ke baad jo observable aya uspeh subscribe krna
    this.firstObsSubs = obs.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed');
    })
  }

Phele jo bhi krna karlo chain bnake phir subscribe krlo … yeh sab operator ki help she kr skte h.


.7 

Subjects


Event emitter event emit krne mai bhi help krta h and observable bhi h.

Old approach was event emit krdo and phir subscribe krlo service bnake, rxjs ki help she kr skte ho yeh.

Subject is also an object you can subscribe to but it is more active because you can actively call .next on it from outside yeh kind of observable hi h glt mt smjna mujhe lga nhi h but yeh h tabhi subscrbe kr pa reh h, observable passive hote callback bhejte uske ander next call kiya jata.

Don’t use eventemitter use subject.

import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({providedIn: 'root'})
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();
  activatedEmitter = new Subject<boolean>(); // subject bnaliya same event emitter ki tatah
}

onActivate() {
    // this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true) // actively listen krne kelia code ke ander
  }


ngOnInit() {
    this.userService.activatedEmitter.subscribe(didActivate => { // you can subscribe a subject
      this.userActivated = didActivate;
    })
  }


Agr async opertions nhi h toh use subject code mai actively listen krne kelia.

Don’t use event emitter, use subject it is good way.

And unsubcribe subject also.

It is special kind of observable.

When we don’t have passive event source like aync operations https request tab use subject as event emitter.

Input output mai subject use mt karo bas cross component baat krni h toh use subject.




![Uploading image.png…]()
