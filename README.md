.1

Routing kr rhe but index.html same hi h coz SPA h.


.2

Bina loading ke routing bs page change hota rahe index.html ek hi rhae

.3

import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // w/o the slash path dedo wrt to localhost:4200/users
  { path: 'users', component: UserComponent }, 

  { path: 'servers', component: ServersComponent } 
];

// object dedo path component ke sath dono

 imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // idrh register krdo angular ko btado
  ],


<div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <router-outlet></router-outlet> // iski help she display kr pa reh h component and yeh directive h
</div>


.4

RouterLink directive h.


Href mai daloge toh reload hoga and we don’t want to reload toh kya kare

Routerlink use karo restart nhi krna padega reload nhi hoga app state change nhi hogi.

<li role="presentation" class="active"><a routerLink="/">Home</a></li> 
<li role="presentation"><a routerLink="/server">Servers</a></li>
<li role="presentation"><a [routerLink]="'/user'">Users</a></li>
<li role="presentation"><a [routerLink]="['/users']">Users</a></li>


Router link catches the click on the element prevents the default from happening does not send req jo href krti thi jisse reload hota tha


.5

Relative path is when you give it without slash - With the relative path it always append the path you specify in the router link to the end of the current path and imp here the current path depends on the which component you are currently on.

Absolute path is when you give it with slash

 <a [routerLink]="['servers', ]">Reload page</a> // relative path… ismeh
 <a [routerLink]="['/servers']">Reload page</a> // absolute path relative to localhost:4200


<a [routerLink]="['./servers']">Reload page r</a> // ./servers same as servers added to the current loaded path.

<a [routerLink]="['../servers']">Reload page r</a> ../ file structure mai upr gaya then ./servers or server kriya jisse vo upr wale component ke age /servers lg jaiga.


.6

<li role="presentation" class="active"><a routerLink="/">Home</a></li> // class active h usko dynamically add krna h toh kaise kare?


 <li role="presentation"><a routerLink="/" routerLinkActive="active">Home</a></li>
 <li role="presentation"><a routerLink="/servers" routerLinkActive="active">Servers</a></li>
 <li role="presentation"><a [routerLink]="'/users'" routerLinkActive="active">Users</a></li>
 <li role="presentation"><a [routerLink]="['/users']" routerLinkActive="active"></a></li>

Ab sabmeh routerLinkActive krdiya h jo bhi link active hogi usmeh active bootstrap class lg jaigi ya koi bhi lgalo class angular automatic smj jaiga


.7 

RouterlinkActive tune krdiya h lekin ek default / path active hi rheta hamesha toh uske lia 

<li role="presentation"><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
 exact path dedo.


.8

Changing the router programmatically mtlb koi click event peh change krni h toh.

 constructor(private router: Router) { }

onLoadServers() {
    // complex calculation hui kuch
    
    this.router.navigate(['/servers']); // yeh karo navigate krdo 
  }



.9

Relative path bhi de skta

this.router.navigate(['./servers']);

Navigate method doesnot know which path you are on unlike router link. Toh tum btado navigate ko by passing js obj

Root domain is localhost:4200

Hum bta skte h angular ko activated route konsa h

 constructor(private router: Router, private route: ActivatedRoute) { }


 this.router.navigate(['./servers', {relativeTo: this.route}]); // ki



.10

Route parameters


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // w/o the slash path dedo wrt to localhost:4200/users
  { path: 'users', component: UserComponent }, 
  { path: 'users/:id/:name', component: UserComponent }, 
  { path: 'servers', component: ServersComponent } 
];


.11

Data of route params

ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

<p>User with ID {{user.id}} loaded.</p>
<p>User name is {{user.name}}</p>


.12

We load out data with snapshot obj on  out route, now if we load a new route angular finds the fitting route loads the component initilaizes the component and gives us the data snapshot here that only happens if we havent been on the component before.

Abhi jis component mai h and udhr hi sirf change kr rhe toh link change ho rhi component re render nhi ho rha.

Angular cleverly doesnot re instantiate the component that will only cost us performance.

Its fine to use the snapshot for the first initialization but to be able to react to subsequent changes we need a different approach 

Params is an observable.

Observables is the feature added by 3rd pacakage not by angular and it is used by angular which allow you to easily work async tasks.

And jo link change ho rhi h uske parameters kabhi bhi ho skti we don’t know isliye asyc fxn h

Observable is an easy way to subscribe to some event might happen in the future then execute the code when it happens without having to wait for it now.

Params hold the parameter you define in the route as properties.


 this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );


.13

Angular cleans up the subscription when the component is destroyed.

Angular automatically unsubcribe kr deta lekin its better tu unsubscribe krde.

import { Subscription } from 'rxjs';

export class UserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

   ngOnInit() { // yeh jab ek baari hi kare … and yeh observable nhhi h jo destroy krna pade
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.paramsSubscription = this.route.params.subscribe( // yeh baar baar observe krne kelia
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe(); // yeh automatically kr deta lekin tu khud krde observable ko unsubscribe kyuki apne bnaiga toh krne padenge.
  }
}



.14

Query parameters ki
And fragments kelia.

<a
        href="#"
        [routerLink]="['/servers', 5, 'edit']" // routerLink
        [queryParams]="{allowEdit: '1'}" // query params ?key=value.
        fragment="loading" // fragments #..
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}

 // yeh tareeke seh dynamic nhi hoga bas first time chalge

</a>


Programmatic way.

onLoadServer(id: number) {     
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }



.15

Retrieve query params


 constructor(private serversService: ServersService, private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

One time kelia h reactive nhi h yeh same problem 

this.route.queryParams.subscribe();
this.route.fragment.subscribe();



.16

Parsing parameters from the route is string.


.17

Yeh sab apne apne routes peh  hote the phele new new component ab hume chaiye ki nested mai ho toh childrens bnalo

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // w/o the slash path dedo wrt to localhost:4200/users
  {
    path: 'users',
    component: UserComponent,
    children: [{ path: 'users/:id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id/edit', component: ServerComponent },
      { path: ':id', component: EditServerComponent },
    ],
  },
];


Aise children mai routes dedo isse yeh nested hojati h

 <router-outlet></router-outlet>
And template mai router outlet use krlo.


.18

.19

Agr ek page she durse mai jai toh  and reserve rkhna h query params toh use this

queryParamsHandling= 'preserve'

.20

Redirecting and wildcard routes( glt routes daalne peh )

404 error handling krdo nhi toh redirect krdo

{
    path: 'not-found',
    component: PageNotFoundComponent // yeh toh bnao idr redirect krdo
  },
  {
    path: '**', // this is wild card route
    redirectTo: '/not-found' // it redirects to not-found path jo upr define kiya h.
  }

Wild card route ko bottom of the array rakho kyuki it covers all routes jo nhi pata


.21

Ab routing module alg krdi h kyuki agr jyada routes hui app.module mai bt hojaigi


import {NgModule} from '@angular/core'
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // w/o the slash path dedo wrt to localhost:4200/users
  {
    path: 'users',
    component: UserComponent,
    children: [{ path: 'users/:id/:name', component: UserComponent }],
  },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id/edit', component: ServerComponent },
      { path: ':id', component: EditServerComponent }
    ],
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({ 

Ngmodule alg h ngmodel alg h.

		// here we configufe the router module added our own routes to it
        imports: [RouterModule.forRoot(appRoutes)], // routermodule mai approutes wala array pass kr rhe h 

		//now you simply export configured router module
        exports: [RouterModule] // yeh isliye kyuki wapis app module mai import krna h toh idhr she export karo
})
export class AppRoutingModule{
        
}


App module mai yeh do cheeze krlo.

import { AppRoutingModule } from './app-routing.module';

imports: [BrowserModule, FormsModule, AppRoutingModule],


Ismeh basically humne routing ki module bnadi h phir usko use krliya h app module ma.



.22


Routing guards jisse protect kr sake kisi route ko.

Ki access ho tabhi visit karega route ko



.23

Protecting routes with canActivate interface

Return inside a promise gives promise back

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticate().then((authenticated: boolean) => {
      return authenticated ? true : this.router.navigate(['/']);
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}


//yeh toh backedd she aya data
export class AuthService {
    loggedIn = false;
    isAuthenticate() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 1000)
        })
        return promise;
    }
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}


.24

CanActivateChildren wala interface bhi h jo only checks for children.

Hr children peh jake canActivate krne she acha parent peh canActivateChild lgado.


.25

canDeactive ki bhai kuch change kiya h ab leave kr rhe ho site but user she phele confirmation lelo.

Guard always needs to be a service.

A service can be a interface also.

import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs-compat";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}


children: [
      { path: ':id/edit', component: ServerComponent, canDeactivate: [CanDeactivateGuard] }, // idhr dediya
      { path: ':id', component: EditServerComponent },
      // { path: ':id', canActivate: [AuthGuard], component: EditServerComponent }
    ],


Ek baar iski video vapis dekhlena concept acha h


.26

{
    path: 'not-found',
    component: ErrorPageComponent,
    data: {message: 'Page not found'} // yeh hum direct bhi define kr skte the but direct us class mai define isliye nhi kiya kyuki yeh route baar baar use ho skta h koi or error toh idhr she hi pass kr skte … data pss krdo
  },

Static data hua yeh


export class ErrorPageComponent implements OnInit {

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.errorMessage = this.route.snapshot.data['message'];

    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )

  }
}



.27

How to pass dynamic data with resolve guard


Aysnc data kelia resolver use kiya h


import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from "@angular/core";
interface Server {
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}


 { path: ':id', component: EditServerComponent, resolve: {server: ServerResolver} },


ngOnInit() {
    // this.server = this.serversService.getServer(1);
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }


providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],


Guard wala mushkil tha vapis dekhlena ek baar.


.28

imports: [RouterModule.forRoot(appRoutes, {useHash: true})]

useHash she http://localhost:4200/#/ aise hojaiga # lg jaiga 

Yeh mt use kara karo but jo browser configure ni kr pa rha and index.html nhi de pa rhe unke lia yeh karo.

