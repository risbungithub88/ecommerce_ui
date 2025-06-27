import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-sign-up-page',
  imports: [FormsModule,CommonModule], // Include FormsModule in the imports array
  standalone: true, // Mark the component as standalone
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Form submitted!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

    if (this.password === this.confirmPassword) {
      alert('Registration successful! Redirecting to login...');
      // 👇 Redirect to login
      this.router.navigate(['/login']);
    } else {
      alert('Passwords do not match!');
    }
  }
}
