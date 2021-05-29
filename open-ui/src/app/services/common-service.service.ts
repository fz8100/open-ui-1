import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cards } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  cardList: cards[] = [
    {
      heading:'Quick cash disbursement',
      description:'Get term loans that your business needs in 72 hours',
      image:'/assets/images/money.png'
    },
    {
      heading:'Low-interest rate',
      description:'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      image:'/assets/images/low-interest.png'
    },
    {
      heading:'Zero paperwork',
      description:'Get started instantly by submitting only your basic details and bank statements',
      image:'/assets/images/paperwork.png'
    },
    {
      heading:'Ace your business finances',
      description:'Manage business accounting and everything in between on one platform',
      image:'/assets/images/app.png'
    },
    {
      heading:'Loans to fight COVID-19',
      description:'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      image:'/assets/images/covid.png'
    }
  ];

  constructor() { }

  getCardsList(){
    return of(this.cardList)
  }
}
