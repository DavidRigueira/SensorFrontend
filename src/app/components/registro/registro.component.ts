import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rol: ['admin', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(formValue: any): void {
    this.userService.register(formValue).subscribe(
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
