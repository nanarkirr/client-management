import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      address: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      alert('Form Submitted!')
      // Add logic to handle form submission, e.g., send data to the server
      console.log('Form submitted:', this.clientForm.value);
    }
    else {
      // Mark the entire form as touched to show common error message
      this.clientForm.markAllAsTouched();
    }
  }
}
