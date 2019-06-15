import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  valueCurrent: number;
  currency100000: any[] = [];
  currency50000: any[] = [];
  currency20000: any[] = [];
  currency10000: any[] = [];
  currency5000: any[] = [];
  currency1000: any[] = [];
  currency500: any[] = [];
  currency100: any[] = [];
  currency50: any[] = [];
  currency10: any[] = [];

  allCurrency: any[] = [];

  length100000: number = 0;
  length50000: number = 0;
  length20000: number = 0;
  length10000: number = 0;
  length5000: number = 0;
  length1000: number = 0;
  length500: number = 0;
  length100: number = 0;
  length50: number = 0;
  length10: number = 0;

  data = new FormControl();
  activeCurrency: boolean = false
  currencyPattern = "[a-zA-Z ]*"; 
  indexKoma: any
  message: any
  messageActive: boolean = false

  destroyItem(){
    this.valueCurrent = 0;
    this.currency100000 = []
    this.currency50000 = []
    this.currency20000 = []
    this.currency10000 = []
    this.currency5000 = []
    this.currency1000 = []
    this.currency500 = []
    this.currency100 = []
    this.currency50 = []
    this.currency10 = []
    this.allCurrency = []

    this.activeCurrency = false
  }

  onEnter(value: any) {
    this.destroyItem();

    this.indexKoma = value
    const valueLength = value.length
    if(valueLength > 0){
      for(let a = 0; a < valueLength; a++){
        if(value.charAt(a) == 'R'){
          this.indexKoma = this.indexKoma.replace('R', '')
        }
        else if(value.charAt(a) == 'p'){
          this.indexKoma = this.indexKoma.replace('p', '')
        }
        else if(value.charAt(a) == ''){
          this.indexKoma = this.indexKoma.replace(' ', '')
        }
        else if(value.charAt(a) == '.'){
          this.indexKoma = this.indexKoma.replace('.', '')
        }
        this.indexKoma = this.indexKoma.replace(',00', '')
      }
    }
  
    
    this.valueCurrent = +this.indexKoma

    if(this.valueCurrent == 0){
      this.message = "missing value"
      this.messageActive = true

      setTimeout(() => {
        this.messageActive = false
      }, 3000);
    }
    else if(isNaN(this.valueCurrent)) {
      this.message = "invalid separator"
      this.messageActive = true

      setTimeout(() => {
        this.messageActive = false
      }, 3000);
    }
    else if(50 > this.valueCurrent){
      this.message = "Minimal Value Rp 50"
      this.messageActive = true

      setTimeout(() => {
        this.messageActive = false
      }, 3000);
    }

    const validate1 = 100000;
    const validate2 = 50000;
    const validate3 = 20000;
    const validate4 = 10000;
    const validate5 = 5000;
    const validate6 = 1000;
    const validate7 = 500;
    const validate8 = 100;
    const validate9 = 50;

    if(this.valueCurrent >= validate1){
      for(let i = 1; this.valueCurrent >= validate1; i++){
        this.valueCurrent = this.valueCurrent - validate1
        this.currency100000.push({
          id: i,
          currenValue: validate1,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate2; i++){
        this.valueCurrent = this.valueCurrent - validate2
        this.currency50000.push({
          id: i,
          currenValue: validate2,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate2){
      for(let i = 1; this.valueCurrent >= validate2; i++){
        this.valueCurrent = this.valueCurrent - validate2
        this.currency50000.push({
          id: i,
          currenValue: validate2,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate3){

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate4){

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate5){

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate6){

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate7){

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate8){

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate9){

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }

    this.length100000 = this.currency100000.length - 1
    this.length50000 = this.currency50000.length - 1
    this.length20000 = this.currency20000.length - 1
    this.length10000 = this.currency10000.length - 1
    this.length5000 = this.currency5000.length - 1
    this.length1000 = this.currency1000.length - 1
    this.length500 = this.currency500.length - 1
    this.length100 = this.currency100.length - 1
    this.length50 = this.currency50.length - 1

    if(this.currency100000.length > 0){
      this.allCurrency.push(
        this.currency100000[this.length100000]
      )
    }

    if(this.currency50000.length > 0) {
      this.allCurrency.push(
        this.currency50000[this.length50000]
      )
    }

    if(this.currency20000.length > 0) {
      this.allCurrency.push(
        this.currency20000[this.length20000]
      )
    }

    if(this.currency10000.length > 0) {
      this.allCurrency.push(
        this.currency10000[this.length10000]
      )
    }

    if(this.currency5000.length > 0) {
      this.allCurrency.push(
        this.currency5000[this.length5000]
      )
    }

    if(this.currency1000.length > 0) {
      this.allCurrency.push(
        this.currency1000[this.length1000]
      )
    }

    if(this.currency500.length > 0) {
      this.allCurrency.push(
        this.currency500[this.length500]
      )
    }

    if(this.currency100.length > 0) {
      this.allCurrency.push(
        this.currency100[this.length100]
      )
    }

    if(this.currency50.length > 0) {
      this.allCurrency.push(
        this.currency50[this.length50]
      )
    }

    if(this.currency10.length > 0) {
      this.allCurrency.push(
        this.currency10[0]
      )
    }

    setTimeout(() => {
      this.activeCurrency = true
    }, 100);
   
  }

  onClick() {
    this.destroyItem();

    this.indexKoma = this.data.value
    const valueLength = this.data.value.length
    if(valueLength > 0){
      for(let a = 0; a < valueLength; a++){
        if(this.data.value.charAt(a) == 'R'){
          this.indexKoma = this.indexKoma.replace('R', '')
        }
        else if(this.data.value.charAt(a) == 'p'){
          this.indexKoma = this.indexKoma.replace('p', '')
        }
        else if(this.data.value.charAt(a) == ''){
          this.indexKoma = this.indexKoma.replace(' ', '')
        }
        else if(this.data.value.charAt(a) == '.'){
          this.indexKoma = this.indexKoma.replace('.', '')
        }
        this.indexKoma = this.indexKoma.replace(',00', '')
      }
    }
  
    
    this.valueCurrent = +this.indexKoma

    if(this.valueCurrent == 0){
      this.message = "missing value"
      this.messageActive = true

      setTimeout(() => {
        this.messageActive = false
      }, 3000);
    }
    else if(isNaN(this.valueCurrent)) {
      this.message = "invalid separator"
      this.messageActive = true

      setTimeout(() => {
        this.messageActive = false
      }, 3000);
    }

    const validate1 = 100000;
    const validate2 = 50000;
    const validate3 = 20000;
    const validate4 = 10000;
    const validate5 = 5000;
    const validate6 = 1000;
    const validate7 = 500;
    const validate8 = 100;
    const validate9 = 50;

    if(this.valueCurrent >= validate1){
      for(let i = 1; this.valueCurrent >= validate1; i++){
        this.valueCurrent = this.valueCurrent - validate1
        this.currency100000.push({
          id: i,
          currenValue: validate1,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate2; i++){
        this.valueCurrent = this.valueCurrent - validate2
        this.currency50000.push({
          id: i,
          currenValue: validate2,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate2){
      for(let i = 1; this.valueCurrent >= validate2; i++){
        this.valueCurrent = this.valueCurrent - validate2
        this.currency50000.push({
          id: i,
          currenValue: validate2,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate3){

      for(let i = 1; this.valueCurrent >= validate3; i++){
        this.valueCurrent = this.valueCurrent - validate3
        this.currency20000.push({
          id: i,
          currenValue: validate3,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate4){

      for(let i = 1; this.valueCurrent >= validate4; i++){
        this.valueCurrent = this.valueCurrent - validate4
        this.currency10000.push({
          id: i,
          currenValue: validate4,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate5){

      for(let i = 1; this.valueCurrent >= validate5; i++){
        this.valueCurrent = this.valueCurrent - validate5
        this.currency5000.push({
          id: i,
          currenValue: validate5,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate6){

      for(let i = 1; this.valueCurrent >= validate6; i++){
        this.valueCurrent = this.valueCurrent - validate6
        this.currency1000.push({
          id: i,
          currenValue: validate6,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate7){

      for(let i = 1; this.valueCurrent >= validate7; i++){
        this.valueCurrent = this.valueCurrent - validate7
        this.currency500.push({
          id: i,
          currenValue: validate7,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate8){

      for(let i = 1; this.valueCurrent >= validate8; i++){
        this.valueCurrent = this.valueCurrent - validate8
        this.currency100.push({
          id: i,
          currenValue: validate8,
          description: null
        })
      }

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }
    else if(this.valueCurrent >= validate9){

      for(let i = 1; this.valueCurrent >= validate9; i++){
        this.valueCurrent = this.valueCurrent - validate9
        this.currency50.push({
          id: i,
          currenValue: validate9,
          description: null
        })
      }

      if(this.valueCurrent > 0){
        this.currency10.push({
          id: 1,
          currenValue: this.valueCurrent,
          description: "no available fraction"
        })
        this.valueCurrent = this.valueCurrent - this.valueCurrent
      }

    }

    this.length100000 = this.currency100000.length - 1
    this.length50000 = this.currency50000.length - 1
    this.length20000 = this.currency20000.length - 1
    this.length10000 = this.currency10000.length - 1
    this.length5000 = this.currency5000.length - 1
    this.length1000 = this.currency1000.length - 1
    this.length500 = this.currency500.length - 1
    this.length100 = this.currency100.length - 1
    this.length50 = this.currency50.length - 1

    if(this.currency100000.length > 0){
      this.allCurrency.push(
        this.currency100000[this.length100000]
      )
    }

    if(this.currency50000.length > 0) {
      this.allCurrency.push(
        this.currency50000[this.length50000]
      )
    }

    if(this.currency20000.length > 0) {
      this.allCurrency.push(
        this.currency20000[this.length20000]
      )
    }

    if(this.currency10000.length > 0) {
      this.allCurrency.push(
        this.currency10000[this.length10000]
      )
    }

    if(this.currency5000.length > 0) {
      this.allCurrency.push(
        this.currency5000[this.length5000]
      )
    }

    if(this.currency1000.length > 0) {
      this.allCurrency.push(
        this.currency1000[this.length1000]
      )
    }

    if(this.currency500.length > 0) {
      this.allCurrency.push(
        this.currency500[this.length500]
      )
    }

    if(this.currency100.length > 0) {
      this.allCurrency.push(
        this.currency100[this.length100]
      )
    }

    if(this.currency50.length > 0) {
      this.allCurrency.push(
        this.currency50[this.length50]
      )
    }

    if(this.currency10.length > 0) {
      this.allCurrency.push(
        this.currency10[0]
      )
    }

    setTimeout(() => {
      this.activeCurrency = true
    }, 100);
   
  }
  
}
