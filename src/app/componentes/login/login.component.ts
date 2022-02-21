import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/servicios/sesion/auth.service';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, MinValidator, RequiredValidator } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      usuario:['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      mail:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
      
    })
  }

  get Usuario(){
    return this.form.get("usuario");
  }

  get Mail(){
    return this.form.get("mail");
  }

  get Password(){
    return this.form.get("password");
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid){

    } else {
      this.form.markAllAsTouched();
    }
  }


  get UsuarioValid(){
    return this.Usuario?.touched && !this.Usuario?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  public usuario = new FormControl('', Validators.required);
  public email = new FormControl('', Validators.required);

  public password = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    usuario: this.usuario,
    email: this.email,
    password: this.password,
  })

  ngOnInit(): void {
  }

}
