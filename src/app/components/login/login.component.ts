import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(formValue: any): void {
    this.userService.login(formValue.email, formValue.password).subscribe(
      result => {
        const datos = JSON.stringify({ email: formValue.email, nombre: formValue.email, rol: formValue.rol });
        localStorage.setItem('auth-token', result);
        localStorage.setItem('current-user', datos);
        this.router.navigate(['datos-list']);
      },
      error => alert('Error al loguearse:' + error.error)
    );
  }
}
