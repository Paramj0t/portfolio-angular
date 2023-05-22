.1

Authentication add karo.


.2

All the js code is exposed to the user isliye auth server side peh hoti h.

Client side browser side k acode toh dikhta rheta isliye auth nhi hoti us taraf.

Json web token use ho rha session nhi kyu? Video dekho.


.3


.4


.5

Template driven form use kr rhe easy h.


.6

Firebase mai jake rules auth vale krde.

401 error aiga agr ab read ya write try karega toh. 

Authentication needed 401 mtlb.


.7

.8

Auth service

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData { // yeh otuput aiga docs seh dekhlo kya output interface bnalo and generic type mai use krlo
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}


  signup(email: string, password: string) {
//idrh use krliya interface 
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AlzaSyBAn-qj05e_2f4JtlQfgD24zzR-yBsj62E', {
      email,
      password,
      returnSecureToken: true
    })
	// kya kya bhejna or kya kya milega or kidr bhejna sab docs pdhlo and angular ka use krlo bhejme mai simple
  }
}


onSubmit(form: NgForm) {
    console.log(form);

    if (!form.valid) return;

    const { email, password } = form.value; // destructuring obj

    if(this.isLoginMode) {

    } else {

      this.authService.signup(email, password).subscribe( // subs kara
        (resData) => {
          console.log(resData);
        },
        (err) => console.error(err)
      );
      form.reset();
    }
  }


.9

Error handling

 error: string = null;

this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (err) => {
          this.error = err.message; // error mssg
        }
      );


.10

Improvement in error handling

 signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AlzaSyBAn-qj05e_2f4JtlQfgD24zzR-yBsj62E', {
      email,
      password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => { // subs mai krne ki jagah idhr krlo.
        return throwError(errorRes.message);
    }))
  }

Better is to use operators in service rather than doing with subscribe.


.11

Same login ka bnado

Code repetirion ho rhi toh 

Yeh variable observable mai store krvane kelia bnaya h jisse baad mai subs kr sake.
let authObs: Observable<AuthResponseData>; // yeh authObs observable dega and observable will yeild AuthResponseData

if(this.isLoginMode) {

      authObs = this.authService.login(email, password);

    } else {

      authObs = this.authService.signup(email, password);

    }


this.isLoginMode ?  authObs = this.authService.login(email, password) : authObs = this.authService.signup(email, password);



Idhr code repetition htadi h .subscribe wala if mai bhi tha else mai bhi toh htadiya h and if else ki jagah use ternary operator
    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      err => {
        console.log(err);
        this.error = err;
      }
    )



.12 [IDHR SEH VIDEO VAPIS DEKHLO ADV CHEEZE]

Video seh hi smjo


.13

Video seh hi smjo

!!user = !(not user)


.14

Subject is good for reactively updating the user interface.

BehaviorSubject - diff with subject is that behaviorSubject  also gives subscribers immediate access to the previously emitted value if they havent subscribed  to the point of time the value was emitted.

User = new BehaviorSubject<User>(null);

This.authService.user.pipe(take(1, exhuastMap(user => {})).subscribe()

Take sirf at point of time user btaiga future wala nhi subsribe kare ga bs at point jo h vo subscribe karega


......... Video dekhlo.......

.
.
.
