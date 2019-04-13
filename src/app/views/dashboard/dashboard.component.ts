import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public name = 'Name';
  public inputFromAddressComponent: string;
  public selectedOption = '1';
  public isAddressValid = false;

  constructor() { }

  ngOnInit() {
  }

  //
  //  get Input from atomic input component
  //  from emit call
  onGetInput(inputStr: string) {
    this.inputFromAddressComponent = inputStr;
  }

  onIsAddressValid(isValid: boolean) {
    this.isAddressValid = isValid;
  }
}
