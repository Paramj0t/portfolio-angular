.1


.2

Abhi hum jo bhi kr rhe browser mai kr rhe ... Toh jab bhi hum reset kre ya reload kre toh humara data ud jata h.

Toh hume data rkhna h toh hum server mai rkh skte db mai backend mai.


.3

Angular ka code sab pdh skte ... Isliye angular dont directly communicate with db it uses apis to connect to server.


.4


.5

Firebase mai real time database bnaliya h ab usse connect karenge ... 2 modes test mode mai bnaya jisse authenticate nhi krna pade for sekhne kelia.


.6

You never communicate direct with db yaad rkhna. Firebase mai hum routes daal skte api endpoints bolte unhe and unko hit kr skte h.

App module mai

import { HttpClientModule } from '@angular/common/http';

imports: [BrowserModule, FormsModule, HttpClientModule],

Dekh jab bhi hum data bhejte h toh json data bhejte h but Angular https client takes out js obj and automatically converts it to json.

Http request are managed by observables.

.subscribe nhi karoge toh mtlb ki koi response mai interested nhi h toh angular post req bhejega hi nhi isliye subscribe karo. Req are only sent when you subscribe.

Hover krle dekhliya kr ki kya return krta fxn.

2 request send hui 1st is options verb ki mtlb ki yeh post request bhej skte ho ya nhi check kiya then post verb ki.

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {} // idhr bnalo

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json', postData).subscribe(responseData => {
      console.log(responseData); // yeh req bheji and response aya
    })
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}


Network tab ache seh dekhlo.

Net ke bina req nhi bhej skte


.7

No subscription no request chaiye get ho post ho koi bhi verb ho.

private fetchPost() {
    this.http.get('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json').subscribe(responseData => {
      console.log(responseData);
    })
  }


Js obj mila hume.


.8

Ab hume js obj arha h and usko array mai krna h toh we can use operators.

private fetchPost() {
    this.http
      .get('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map((responseData: {[key: string]: Post}) => {
        return Object.entries(responseData); // yeh operator ka use kiya directly convert krdiya array mai and return krna mt bhulna coz tabhi subscribe hoga.
      }))
      .subscribe((responseData) => {
        console.log(responseData); // yeh response data ab array mai hoga coz tune opertaor ki help seh change krdiya h.
      });
  }



.9

Type kelia interface bnaliya

export interface Post {
  title: string;
  content: string;
  id?: string;
}

private fetchPost() {
    this.http
      .get('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map((responseData: {[key: string]: Post}) => { // idhr use krliya type deke jisse ts ko pta rahe.
        return Object.entries(responseData); 
      }))
      .subscribe((responseData) => {
        console.log(responseData); 
      });
  }


private fetchPost() {
    this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
//get is generic type idhr bhi type define kr skte ho ... U store type which this response return as the body once its done.
Response body type store hota h neeche krne ki jagah idhr krdo
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }))
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

 .post<{name: string}> // yeh bhi response jo aya uska hi likha h name: string krke {name: '-NTgtpUMyvugdfxJSCcG'}
 aise krke kuch aya tha console peh vohi type diya h generic type mai jo response aya h.


Post mai bhi response data ka type h get mai bhi resposne data ka type h.



.10

loadedPosts = []; // ismeh store krke frontend peh dikha do

 private fetchPost() {
    this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }))
      .subscribe((responseData) => {
        this.loadedPosts = responseData // as we know array aya usko stor krliya h apne array mai and then display on frontend
      });
  }
 

Do teen cheeze pta chali ki p tag ke ander h1 yeh sab nhi ate and spread operator does not work in html.


.11

Loader kelia 

 isFetching = false;

private fetchPost() {
    this.isFetching = true; // true kara

    this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }))
      .subscribe((responseData) => {
        this.loadedPosts = responseData

        this.isFetching = false; // false kara
      });
  }


.12

Using a service for http req

Component ko lean rakho sab kuch dirty work services mai le jao.

Service mai sara fetching ka code likhdiya.

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content}
    this.http
      .post<{name: string}>(
        'https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }))
      .subscribe((responseData) => {
        // this.loadedPosts = responseData
        // this.isFetching = false;
      });
  }
}


Component mai apne methods toh bnai but usmeh service ke methods ka use kiya.

onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  private fetchPost() {
    this.isFetching = true;
    this.postsService.fetchPosts();
  }



.13

isFetching wala logic chl nhi pa rha tha uske lia humne kiya ki

 fetchPosts() { // yeh return krdiya
    return this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }))
  }

Service mai observable return krdia and req bhi nhi gai coz subscribe nhi kiya and isko apne component mai subscribe krliya jisse req bhi chali gai and isFetchidng false bhi hogya.

private fetchPost() {
    this.isFetching = true;

    // this.postsService.fetchPosts();

    this.postsService.fetchPosts().subscribe(posts => { // yeh subs krliya
      this.isFetching = false;
      this.loadedPosts = posts;
    })
  }

Best prac h services use krlo.

Can subs in service also agr component mai chaiye toh can subs in component also returing form serivce.



.14

Service mai
deletePosts() {
    return this.http.delete('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json');
  }

Component use krliya
onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = []; // yeh sub subs ke ander krna coz jab tk subs nhi hua mtlb sahi nhi hua tb tk mt krna
    });

		// idhr mt krna yeh soochke ki method ke baad karo toh same baat nhi h same baat.
  }



.15

Error ajai toh kya kare?

Error handling in 2nd argument.

 private fetchPost() {
    this.isFetching = true;
    // this.postsService.fetchPosts();
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, err => {
      console.log(err); // err response obj aiga
    })
  }

As we know second argument error hota h kuch bhi krlo phir.



.16

Subscribe ek hi jagah h and hume error handling do jagah krni ek jagah subs h lekin toh use subject 

Services

 error = new Subject<string>();

this.http
      .post<{name: string}>(
        'https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      }, (err) => {
        this.error.next(err) // subject ko next krlo and hr jagah subscribe krlo
      });
  }


Component 

this.postsService.error.subscribe(err => { // idhr subject ko subs krliya.
      this.error = err;
    })



.17

CatchError operator bhi hota h


 fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }),
      catchError((error) => {
        return throwError(error); // throw Error observale use krlo jisse .subs kr ske.
      }))
  }


.18

Template mai error dislpay simple h



.19

Headers bhejne h

Header hum bhej skte h koi bhi req(verb) ke sath.

Header are key value pairs.

fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({'Custom-Headers': 'hello'}) // yeh headers set krdiye h (k:v pairs)
      })
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }),
      catchError((error) => {
        return throwError(error);
      }))
  }


.20

Query params

Hum Url mai bhi set kr skte but bad practice

fetchPosts() {
    return this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({'Custom-Headers': 'hello'}),
        params: new HttpParams().set('print', 'pretty-print') // query params set hogai  ?print=pretty-print
      })
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }),
      catchError((error) => {
        return throwError(error);
      }))
  }


Multiple query params 

fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('search', 'hey');
    searchParams = searchParams.append('search1', 'hey1');
    
    return this.http
      .get<{[key: string]: Post}>('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({'Custom-Headers': 'hello'}),
        params: searchParams // idhr dedo vo obj HttpParams wala
      })
      .pipe(map(responseData => {
        return Object.entries(responseData);
      }),
      catchError((error) => {
        return throwError(error);
      }))
  }

Network tab ko clear krliya kr phie dekhliya kr.(response header payload sab dekhlo)

Hamesha phele preflight req jati options verb wali.



.21

Angualr abhi response data de rehi unpack krke hume pura response chaiye.

this.http
      .post<{name: string}>(
        'https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json',
        postData, {
          observe: 'response' // idhr seh change kr skte h reponse.
        }
      )
      .subscribe((responseData) => {
        console.log(responseData);
      }, (err) => {
        this.error.next(err)
      });
  }

Observe: 'body' // defauolt
	  : 'response'
	  : 'events'


.22

We can also change responseType

deletePosts() {
    return this.http.delete('https://angular-http-7cedf-default-rtdb.firebaseio.com/posts.json', {
      observe: 'events',
      responseType: 'json' // by default json hota 
    });
  }

Default is json angular khud hi parse krti.


.23

For eg hum authenticate kr rhe h and hume sab outgoing req mai kuch headers bhejna h toh hum kya kare?

DRY follow

Interceptors

import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('req is on its way');
    return next.handle(req); // return krna zaroori nhi toh req nhi jaigi 
}

providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],

Idhr btado providers mai ab interceptor hr req mai jaiga.


.24

We can change the req body from interceptors.

Req body is immutable isliye nhi bnake karo.

import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('req is on its way');
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'xyz')});
    // return next.handle(req); // return krna zaroori nhi toh req nhi jaigi
    return next.handle(modifiedReq); // new bnai h req and yeh bheji upr wali nhi
  }
}



.25

Handle observable h

Response  mai bhi hum changes kr skte h

import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('req is on its way');
    const modifiedReq = req.clone({headers: req.headers.append('Auth', 'xyz')});
    
    return next.handle(modifiedReq).pipe(tap(event => { // response mai bhi hum kuch kr skte h ... Idhr tap opertor h map chaiye map seh modify tap seh only tap krke ajao.
      console.log(event);
      if(event.type ===  HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}


Interceptor ki help seh hum req res dono seh interact kr pate


.26

Multiple interceptor lga skte ... Order matter krna h(left to right)   

providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}, {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}]
