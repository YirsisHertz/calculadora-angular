import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  number_one: number
  number_two: number 

  private sum: number
  private subtraction: number
  private multiplication: number
  private divition: number

  setOperations(): void{
    this.sum = this.number_one + this.number_two
    this.subtraction = this.number_one - this.number_two
    this.multiplication = this.number_one * this.number_two
    this.divition = this.number_one / this.number_two
  }

  getSum(): number{
    return this.sum
  }

  getSubtraction(): number{
    return this.subtraction
  }

  getMultiplication(): number{
    return this.multiplication
  }

  getDivition(): number | string{
    return this.divition == Infinity ? "No Definido" : this.divition
  }

}
