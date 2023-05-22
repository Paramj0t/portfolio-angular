.1


.2

Ng Modules are the way of bundling or bulidng blocks together that would be component, directives, services, and pipe.

Sab kuch module seh ho rha angular mai staring mai ... Angular ko btana toh padega na.

Atleast one module honi chiaye app.module.


.3

App Module smjte h ab.

Declarations -> components, directives and custom pipes

Imports -> allow others modules to get used in this module. (split app in multiple modules)

Providers -> services ko provide krte.

Bootstrap -> for starting your app root component. 2-3 btadiye toh 2-3 root component hojainge app slow hojaigi kyuki ab 2-3 root ban gai alag alag.

Entry component -> dynamic component hota.

Every module works on their own do not communicate with each other.

 Saari module ek hi jaisi pattern follow krti h app.module wala hi.


.3

.4 

services ko kahi bhi rk skta use ... Lekin or sab mai btana padega hume

.5

.6

.7

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule {}


App mdoule mai recipesModule krle.
 imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule
  ],


.8

Hr jagah ab same hi krna multiple modules mai.


.9

Shared modules

By chance 2 modules mai same code h toh kya kare?

Toh same hi procedure h ek or module bnale or sahi seh krle.

You can only declare component derictives pipes once.

Imports are okay to declare more than once but declaration only once.

Simple baat h module mai sab krlo and code htado direct module import krlo.


.10

Services ko better h injectable mai providedIn krke btado.

Module service kelia bhi bnalo phir import krdo.

Services are injected in root level ... Hume export nhi krna pdhta exception h or sabko krna padega.

Inke module seh export mt kro bs direclty use krlo.



.11

Auth kelia bhi module bnalo sab same hi h.

Double declarations are not allowed only imports allowed.


.12

Lazy Loading

When we are not using lazy loading we load every cheez but aise nhi hona chaiye jis page peh jao vohi load hona chaiye.

In lazy loading we only load app module 


.13

Network tab mai dekh konsi konsi file arhi h 

Lazy loading krdo but ismeh delay ajaiga ki 

 { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}

#ClassName h

Modules htado ab jiski lazy loading kr rhe and path sahi krlo.



.14

Jab hume chaiye tabhi download ho rhi toh ismeh time lg rha download hone mai iski optimisation dhundo. Delay ata isliye usko htao lazy loading seh.

Pre-load lazy load modules to avoid delay bta do angular ko.

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // yeh ho rhi 
  exports: [RouterModule]
})

It will preload the bundle as soon as possible.

Intiall download bundle toh small hi h. Kuch ideal time ho user browsing the page tab ho toh preload krdega tab.


.15 and .16 uski practice

Services kidr provide kare?

Video

