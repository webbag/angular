import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, InputComponent, AsyncPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit  {

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl()
  })

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(value => {
      console.log(value);
    })

  }

  data$ = this.loginForm.valueChanges.pipe(map(values => `${values.login}: ${values.password}`))

  handleSubmit() {
    console.log(this.loginForm.controls)
  }

  reset() {
    this.loginForm.reset();
  }

  setDefault() {
    this.loginForm.setValue({
      login: "set login",
      password: "set pass"
    })
  }

}
