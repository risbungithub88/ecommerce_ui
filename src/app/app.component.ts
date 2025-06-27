import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ Added FormsModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ fixed typo: styleUrl → styleUrls
})
export class AppComponent {
  title = 'E-commerce';
}
