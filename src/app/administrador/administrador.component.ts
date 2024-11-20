import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, 
  FormBuilder, Validators
} from '@angular/forms';

import { LoginService } from '../core/services/loginvalidator/login.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  isValidatedLogin: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder,
     @Inject(LoginService) private loginservice: LoginService){ }

  login = this.formBuilder.group ({
    usuario: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });

  paneladmin(){
    this.router.navigate(['/paneladmin']);
  }


  onSubmit() {
    console.warn(this.login.value);

    if(this.isValidatedLogin){
      this.paneladmin();
    } else {
      alert("Algo salio mal intentalo de nuevo");
    }
  }

  paneloperativo(){
    this.router.navigate(['/operativo/paneloperativo']);
  }

  // Service request for validating login
  validatingLogin(name: string){
    this.loginservice.findByNameLoginValidator(name).subscribe({
      next: (response) => {this.isValidatedLogin = response,
      console.log(response)
      }
    })
  }
}