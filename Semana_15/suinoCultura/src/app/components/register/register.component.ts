import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      if (!username || !password) {
        this.registerForm.reset();
        throw new Error('Username e password são obrigatórios');
      } else {
        from(this.authService.register({ username, password }))
          .subscribe(() => {
            this.router.navigate(['/home']);
          });
      }
    }
  }
}
