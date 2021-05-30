import { Component, OnInit } from '@angular/core';
import { Tenune } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  monIncome:number = 0;
  monExpense:number = 0;
  tenure:Tenune[] = [];
  selectedTenure:string = '';
  checked:boolean = true;
  emi:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.tenure = [
      { label : '3 Months' , value : '3'},
      { label : '6 Months' , value : '6'},
      { label : '9 Months' , value : '9'},
      { label : '12 Months' , value : '12'}
    ]
  }

}
