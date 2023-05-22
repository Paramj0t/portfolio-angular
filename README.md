.1

.2

Service

Communication between components we can use services.

.3

Service is a normal ts class

export class LoggingService {
        logStatusChange(status: string) {
                console.log('A server status changd' + status);
        }
}

 const service = new LoggingService();
 service.logStatusChange(accountStatus); 
// yeh instance bnake nhi krna h aise service use ni krte.



.4

Do Not instantiate services on our own.

Its angular dependencies injector ki help she hota h.

It injects instance of the class into our component automatically.

constructor(private loggingService: LoggingService) {} // this makes instace of the service automatically.

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService] // yeh array mai btado Ts ko angular ko nhi ko yeh service chaiye. Ab tu constructor mai likh skta h
})

DRY principle use krti.


.5

Store and managing data kelia bhi service used.

export class AccountService {
accounts = [// data
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  addAccount(name: string, status: string) { // methods
         this.accounts.push({name, status});
  }
  updateStatus(id: number, status: string) {
          this.accounts[id].status = status;
  }
}



.6

Hirarchical injector mai yeh hota ki same instance parents ke child mai jati saare.

Instacne only propogate down not up.


.7

Jaise humne bola ki parent she child mai jata but hum child ek contstrucotr mai phir she likh rhe h toh new isntace bn rhi h and hume same chaiye toh kya kare.

Constuctor mai rakho lekin providers she htado … constructor mai rkhna mtlb it tells angular ki we need instance and providers tell which instance.


.8

Highest level app.component nhi h app.module h providers mai dedo

Service ko Service ke ander use krna toh provide in app.module level

Services ko provider mai btaya jata h. 

App.module mai krdo or hr jagah comment krdo jisse puri app mai same service ho.

Ab iski help she hum service ke ander service use kr skte h. toh hume meta data dena padega mtlb decorator 

You don’t add @Injectable() to the service  you want to inject but to the service where you want to inject something.

Mtlb jidr injectable likha h udhr hi injection lagega mtlb udhr hi service inject kr skta h use kr skta h. (Receiver)

import {Injectable} from '@angular/core'
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  constructor(private loggingService: LoggingService) {
  }
}

Future angular mai @injectable hr jagah dalo chaiye inject kr rhe ho ya ni.

Inject krke normally hi jaise use krte constructor mai waise hi use krlo.


.9

Component to component kaise lean ho rha acha ho rha service she dekhte h


If we want to provide an event which we can trigger in one component and listen in other.


Service mai property bnali  
statusUpdated = new EventEmitter<string>();

Component1 mai emit krdiya
this.accountsService.statusUpdated.emit(status);


Component2 mai subscribe krliya
this.accountService.statusUpdated.subscribe((status: string) => alert('hey'));
