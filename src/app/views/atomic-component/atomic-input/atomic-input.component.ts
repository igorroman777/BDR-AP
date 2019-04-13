import { Component, OnInit, OnDestroy, EventEmitter, ElementRef, ViewChild, Input, Output, OnChanges} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atomic-input',
  templateUrl: './atomic-input.component.html',
  styleUrls: ['./atomic-input.component.css']
})
export class AtomicInputComponent implements OnInit, OnDestroy {
  @Input('label') label: string;
  @Output() getInput: EventEmitter<string> = new EventEmitter<string>();
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  atomicFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.atomicFormGroup = this._formBuilder.group({
      atomicInputCtrl: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }
  getInputErrorMessage() {
    return this.atomicFormGroup.controls.atomicInputCtrl.hasError('required') ? 'errormsg.controls.required.enter' :
      this.atomicFormGroup.controls.atomicInputCtrl.hasError('maxlength') ? 'errormsg.controls.maxlength.10' : '';
  }

  onChanges() {
    // send/emit to parent component
    this.getInput.emit(this.atomicFormGroup.controls.atomicInputCtrl.value);
    this.isValid.emit(this.atomicFormGroup.valid);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
