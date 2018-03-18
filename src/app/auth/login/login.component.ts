import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ca-login',
  template: `
    <form (submit)="login(loginForm)" #loginForm="ngForm" [class.is-submitted]="isSubmitted">
      <ca-field label="email">
        <input
          required
          type="email"
          name="email"
          [(ngModel)]="email"
          autofocus/>
      </ca-field>
      <ca-field-error *ngIf="isSubmitted" [control]="loginForm.controls['email']"></ca-field-error>
      <ca-field label="password">
        <input
          required
          minlength="8"
          type="password"
          [(ngModel)]="password"
          name="password"/>
      </ca-field>
      <ca-field-error *ngIf="isSubmitted" [control]="loginForm.controls['password']"></ca-field-error>
      <button>Go</button>
    </form>
  `,
  styles: [
    `:host {
      margin: 100px auto;
      display: flex;
      justify-content: center;
    }`,
    `form {
      width: 300px;
      display: flex;
      flex-direction: column;
    }`,
    `.is-submitted input.ng-invalid {
      box-shadow: inset 0 0 1px 1px rgba(255,0,0,0.5);
    }`,
    `.field {
      display: flex;
      flex-direction: row;
      align-items: center;
    }`,
    `input {
      flex-grow: 1;
      padding: 7px;
      border-radius: 3px;
      box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5);
      border: none;
      outline: none;
    }`,
    `button {
      margin-top: 10px;
      padding: 7px;
      border-radius: 3px;
      min-width: 60px;
      margin-left: 5px;
    }`,
    `label {
      flex-basis: 80px;
      flex-shrink: 0;
      color: chocolate;
    }`,
    `.actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: flex-end;
    }`

  ]
})
export class LoginComponent {
  email: string;
  password: string;
  isSubmitted = false;
  constructor() { }

  login(loginForm: NgForm) {
    this.isSubmitted = true;
    console.log(loginForm);
    if (loginForm.valid) {
      alert(`login ${this.email} ${this.password}`);
    }
  }

}
