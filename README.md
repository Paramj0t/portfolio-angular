.1

NgRx

It is used for state management.


.2

Application state kya hoti h?

Component interaction yehi sab mai ngrx kaam ata jaise services yeh sab use kr skte rxjs use kr skte ... But ab aya h ngrx for state management.


.3

Redux 

State management pattern. It is a library.

State is just data.

Action js obj h 

Reducers js fxn h

We can use redux with angular but ngrx is angular representation of redux.


.4

Npm i @ngrx/store

Store and reducers are tightly coupled together.


.5

Never touch the existing state.

Code dekhle vscode mai

.6

Action is interface 

Payload toh actual data hi hota.

.7

... Kuch points likh rha jo smj arhe h

Ek reducer fxn h usmeh multiple actions h




...

Videos hi dekhlo with code

Steps 

	1) Action file mai string identifier bnao
	2) Udhr class bnao jisse hum action obj bna skte action file mai hi.
	3) Reducer fxn mai case bnale ab but agr mutliple h toh action mai type bhi export krde jisse sab cover hojai.
	4) Uske baad toh dispatch krna h jidr bhi fxn likhi h

Payload mai toh data ata obj bnalo payload ko agr usmeh ek seh jada data h toh.

Data immutabley hi add hona chaiye.

Mutable kuch na ho.

Js methods map filter in sab seh copy hi arhi h.

App state bnalo jissmeh particular state dedo and ab direclty app state use krlo

...state krlo and jo state change krno vo krlo no problem usemh.

Dispatch toh action ho rhe store mai.

We can select from store mtlb fetch krne kleia

Intial setup mushkil h but phir easy h redux = ngrx

.
.
.

1st part done 2nd dekho ab ->

Alg alg services ki alg alg ngrx krle and unka store bnale alg alg and gloabl store app.module mai dalde.

But tab bhi ek gloabal store bnale app folder mai udhr hi app state and app reducer rkhlo

Service mai hum store seh select kr rhe component mai hum dispatch kr rhe genreally yehi ho rha.

Any action u dispatch always reaches all reducers.

State slices hoti h.

Ab actions hr reducer pass ja rhe toh sab unique rakho usko rkhne kelia u can add prefixing  [feature name] daldo phele hi prefixing bolte usse

Side effects ki baat krte ab NgRx Effects.

Npm i @ngrx/effects

Action alg h udhr seh reduces chl rha and udhr seh hi effects chalega

Inner observable mai handle error

Appmodule mai btado effects ka.

Npm i ngrx/store-devtools and extednsion dalle chrome peh

Npm i @ngrx/router-store for devtools kelia hi h.

Resolve krlo

.
.
.

Thora complicated h vapis dekhna padega.
