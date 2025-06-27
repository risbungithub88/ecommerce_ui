import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives
@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule], // Include FormsModule in the imports array
  standalone: true, // Mark the component as standalone
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email = '';
  password = '';

  onLogin() {
    console.log('Trying to login with:', this.email, this.password);
    alert('Login successful (simulation)');
  }

}
