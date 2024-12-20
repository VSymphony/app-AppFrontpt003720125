import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginViewmodelService } from '../../viewmodel/login-viewmodel.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = "";
  password: string = "";
  body: string | null = null;

  constructor(private loginViewModel: LoginViewmodelService,
    private router: Router){

  }

  onLogin(){
    console.log("login")
    this.loginViewModel.login(this.usuario, this.password)
      .subscribe({
        next: (response) => {
          console.log(response)
          if(response.rpta){
            this.router.navigateByUrl('dashboard/home')
          }else{
            this.body = response.body;
          }
        },
        error: (error) => {
          this.body = "Ocurrió un error al intetar iniciar sesión";
          console.log(error);
        }
      })
  }
}