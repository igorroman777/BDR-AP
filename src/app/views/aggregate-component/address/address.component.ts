import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  public vorname = 'Vorname';
  public nachname = 'Nachname';

  public isVornameValid: boolean;
  public isNachnameValid: boolean;

  inputVornameFromAddressComponent: string;
  inputNachnameFromAddressComponent: string;

  constructor() { }

  ngOnInit() {
  }

  //
  //  get Input from atomic input component
  //  from emit call
  onGetInputVorname(inputStr: string) {
    this.inputVornameFromAddressComponent = inputStr;
  }
  onGetInputNachname(inputStr: string) {
    this.inputNachnameFromAddressComponent = inputStr;
  }

  onIsVornameValid(isValid: boolean) {
    this.isVornameValid = isValid;
    this.isValid.emit(this.isVornameValid && this.isNachnameValid);
  }

  onIsNachnameValid(isValid: boolean) {
    this.isNachnameValid = isValid;
    this.isValid.emit(this.isVornameValid && this.isNachnameValid);
  }



}
