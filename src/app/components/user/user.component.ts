import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
 styleUrl:'user.component.css', 
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule]
})
export class UserComponent {
  name = 'Thomas';
  age = "";

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
