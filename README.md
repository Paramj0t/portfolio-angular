.1

Server peh bhejni request kaise krna yeh sab angular forms mai ata h.


.2

Angular tujhe apne forms mai sab deta h ek js obj dedega usko use kr skte ho and usse cheeze kr skte ho.

Html forms h ek angular forms h toh angular use krlo help milegi.


.3

2 approaches

	1) Template driven
	2) Reactive 


.4

Template driven form

Ab jo form bnaige usmeh method and action nhi rakhenge kyuki hume request nhi bhejni server peh, yeh sab hum chchate angular handle kare.


.5

Template driven ki hi baat ho ri abhi jab tk btaya na jai change ho rha.

Form module ko import krle app module mai.

Angular will detect automatically your html form but it will not detect your controlls in forms.

ngModel is a directive made availble in the forms module which help angular to know about the controlls.

Register controlls manually with help of ngModel and name.


 <input type="text" id="username" class="form-control" ngModel name="username"/>


.6

Button type submit placed in html form element submits the form default beahiour hoga … idhr mt dalna onSubmit fxn kahi or dalenge angular wala.

ngSubmit is a directive and gives one event which will get triggered when the form is submitted by default behaviour.

It is template dirven apporach toh sab kuch template mai hi hoga

Form element is kind of selector for a directive build into angular which creates the js object automatically.

 <form (ngSubmit)="onSubmit(f)" #f>

onSubmit(form: HTMLFormElement) {
    console.log(form); // isse js obj toh print hua nhi uske lia use ngForm
  }


Js obj chaiye toh use NgForm

 <form (ngSubmit)="onSubmit(f)" #f="ngForm">

onSubmit(form: NgForm) {
    console.log(form);
  }


.7

Js obj mil jata properties 


.8

View child she bhi kr skte the w/o passing in the onSubmit method

onSubmit peh toh sirf submit peh hoga waise bhi access chaiye toh use viewChild

<form (ngSubmit)="onSubmit()" #f="ngForm">


 @ViewChild('f') signupForm: NgForm;

onSubmit() {
    console.log(this.signupForm);
  }



.9

Validation with help of angular

<input type="text" id="username" class="form-control" ngModel name="username" required/>

<input type="email" id="email" class="form-control" ngModel name="email" email/>

Required email yeh sab directive h angular ke built in to validate.

Required is a selector treated as angular directives.

Required toh html mai hi hota h.

Print krke dekhlo



.10

Validation karo 

<button class="btn btn-primary" type="submit" [disabled]="!f.valid">Submit</button>

Property binding ki help she.

And tere pass form ki puri access h #f she.

CSS mai bhi inbuild class use kr skte angular ki 

input.ng-invalid.ng-touched {
  border: 1px solid red;
}



.11

Validation on particular cheez

<input type="email" id="email" class="form-control" ngModel name="email" email required #email="ngModel"/>

<span class="help-block" *ngIf="!email.valid && email.touched"> Please enter a valid email </span>

Same jaise #f ref li thi form ki idhr #email ref leli form ki with ngModel she.



.12

Defualt value kelia 

<select id="secret" class="form-control" name="secret" [ngModel]="defaultQues">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
</select>

We have use ngModel not as two way but as property binding.

defaultQues = 'pet'; // yeh pet h yeh options ki value h by defualt yeh select hojaigi ngModel she



.13

Two way binding bhi kr skte

 <div class="form-group">
         <textarea name="qa" rows="3" [(ngModel)]="answer"></textarea>
 </div>
{{answer}}

And it will come in form object 


Bindgins-

	1) No binding is to tell angular about input is a controll
	2) One way binding is to give that control by default value.
	3) Two way binding to instantly output or do whatever you want to do.



.14


Grouping form controls

<div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">

ngModelGroup is a directive userData ts mai nhi define kiya bs idhr aise likhdiya automatically name bn gya refer krne kelia and #userDatat wala bhi ts mai nhi hota coz vo ref h and ref sirf template html mai chlti.

 <p *ngIf="!userData.valid && userData.touched">User Data invalid</p> // reference ko use kr rhe h

Yeh group of form control ki reference mai ... Phele humne ek ek field ki dekhi thi ab pure group ki dekh rhe h.



.15

Radio Button

<div class="radio" *ngFor="let gender of genders">
          <label for="">
            <input type="radio" name="gender" ngModel [value]="gender" required>
            {{gender}}
          </label>
 </div>


ngModel likhne seh vo control bnta h.




.16


Setting form values krna h ek baari mai sara on click of button 

suggestUserName() {
    const suggestedName = 'Superuser';

    this.signupForm.setValue({ // setValue ki help seh krdo sab.
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      qa: '',
      gender: 'male'
    })
  }


Toh setValue override krdeta h saari properties agr phele seh kuch likha ho toh.(not better approach)

suggestUserName() {
    const suggestedName = 'Superuser';

    this.signupForm.form.patchValue({  
      userData: {
        username: suggestedName // dekh yeh class ka variable nhi h toh this.krke nhi kara dyaan do
      }
    })
  }

.patchValue mai hume allowed h ki ek do bhi set kr skte saara form override nhi hoga.


SetValue to set your whole form and patch value to override part of the forms usmeh override whole form hota tha.



.17


Form Data

onSubmit() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);

	This.signupForm.reset();   // it will not only empty the form but also reset the state ... Agr empty krna tha toh setValue seh ho skti thi but pura reset krna h. Classes bhi reset hojati isse.
	
  }


Kuch bhi karo is form data sath can also display on template.

Majority of usecase kelia yehi use hoti.



.18


Reactive approach

Ismeh form programmatically banega typescript mai usemh template html mai bnta tha.



.19

In angular form is group of controls

 imports: [
    BrowserModule,
    FormsModule, // yeh template driven kelia
    ReactiveFormsModule // yeh reactive kelia
  ],


 signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({ // hr key value pair form control h
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male'),
    });

ngOnInit mai isliye kara kyuki render hone seh phele form bnao then render karo simple.
Poperrty declaration ki jagah peh bhi bna skte the but better coding practice sekho.



<form [formGroup]="signupForm"> // humara fromGroup lo angular ko btaya
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            class="form-control">
            formControlName="username" // yeh string h .. Yeh btaya ki humari formControl lo.
            <!-- [formControlName]="'username'" --> // yeh property binding h.
        </div>


[] = "property"

[] = "'string'" // h dono property binding


Yeh sab directive h unki binding hoti property event yeh sab



.20

 <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">

ngSubmit directive hi use kr rhe form submit mai ab submit krdiya toh reference lelete the but template dirven mai #ref wala krte the idhr vo nhi karenge coz tune form hi ts mai bnaya h toh udhr toh access h hi phele seh toh ref lene ki zaroort padi hi ni.

onSubmit() {
    console.log(this.signupForm); // ts mai hi variable h phele seh hi.
  }



.21


We are not configuring our form in template(html) we are only synchronizing it with ts code. We configure it in ts code.

ngOnInit() {

    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required), // do not execute only pass ref angular khud required ko call krlefi
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
    });

  }

First argument mai toh value 2nd mai validation.

Yeh hum validation kr rhe h  2nd argument mai ts ki help seh.



.22

 <span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched">Please ender valid username!</span>

Aise bhi validation kr skte signupForm ki toh access h hi kyuki ts mai define kara tha template mai access h.

Classes toh is method seh bhi add hoti badhiya baat.

Un classes ko target kr skte h.



.23


 ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required), // do not execute only pass ref angular khud required ko call krlefi
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
    });
  }


Form group ke ander form group ho skte h


<div formGroupName="userData"> // jaise schema ts file mai h waise html mai bhi bnao
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              class="form-control"
              formControlName="username"
            />
            <!--  yeh string h -->
            <!-- [formControlName]="'username'" // yeh property binding h. -->
          </div>
          <span
            *ngIf="
              !signupForm.get('userData.username').valid && // idhr get mai sahi path do userData.username chalega na ki userName
              signupForm.get('userData.username').touched
            "
            >Please ender valid username!</span
          >
          <div class="form-group">
            <label for="email">email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              formControlName="email"
            />
          </div>
</div>


Sync mai rakho dono ts html ko.




.24

Dyanmically kr rhe h

ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required), // do not execute only pass ref angular khud required ko call krlefi
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) // yeh dynamically add krne kelia form mai
    });
  }


 onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }


<div class="form-group" *ngFor="let hobby of signupForm.get('hobbies').controls; let i = index">
      <input type="text" class="form-control" formControlName="i">
</div>




.25

Own validation dalni toh kya kare?

Ki kuch username allow nhi krne hui toh

Validator is just a fxn which gets executed by angular automatically when it checks the validity of the form control.

forbiddenNames(control: FormControl): {[s: string]: boolean} {
    return this.forbiddenUsername.indexOf(control.value) !== -1 ?  {'nameIsForbidden': control.value} :  null; // error bhej rhe nameisforbidden wala
  }

-1 deta h indexof

{true bheja and false mai null obj false mt bhejna yaad rkhana}



.26

Error dekhane kelia

Individual control peh error mssg add ho rha h.

'email': new FormControl(null, [Validators.required, Validators.email]),

 <span *ngif="signupForm.get('userData.username').errors['nameIsForbidden']"></span>

.error['required']

Error code use kre h 



.27

Async validators bhi chaiye

forbiddenEmail(control: FormControl): boolean | Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === 'test@test.com' ? resolve({'emailIsForbidden': true}) : resolve(null);
      }, 1500)
    })
    return promise;
  }


'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),

Ayscn kelia 3rd argument mai dalo



.28

We have 2 observable in forms

ngOnInit() {
       this.signupForm.valueChanges.subscribe(value => console.log(value)); // changes with each key stroke obj print hota rheta

       this.signupForm.statusChanges.subscribe(value => console.log(value)); // print invalid pending valid

  }

Value changes and status changes.



.29

Set value and patch value idhr bhi h template ki tarah.

