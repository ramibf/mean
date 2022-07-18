import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id:1,teamOne:'FCB',teamTwo:'RMD',scoreOne:'1',scoreTwo:'2'},
    {id:2,teamOne:'CA',teamTwo:'EST',scoreOne:'0',scoreTwo:'2'},
    {id:3,teamOne:'SEV',teamTwo:'ATM',scoreOne:'3',scoreTwo:'2'},
    {id:4,teamOne:'ARS',teamTwo:'PSG',scoreOne:'2',scoreTwo:'2'}
   ];
   let teams=[
    {id:1,name:"Dortmund",foundation:'az',staduim:"signal"    },
    {id:2,name:"Bayern",foundation:'azr',staduim:"alianza arena"}
];

   return {matches,teams};

  }
}
