import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface RegisterModel {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  mostrarAlert: boolean = false;

  nameControl = new FormControl('');
  lastNameControl = new FormControl('');
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('');

  registerModel: FormGroup<RegisterModel> = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl
  });



  submitRegistro() {
    if (this.registerModel.valid) {
      // Realizar acciones de registro aquí
      this.mostrarAlert = true;

      setTimeout(() => {
        this.mostrarAlert = false;
      }, 2000);

      console.log('Registro exitoso');
      console.log(this.registerModel.value);


    }
  }

}
