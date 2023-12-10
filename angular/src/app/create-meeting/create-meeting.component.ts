import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})


export class CreateMeetingComponent {
  meetingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.meetingForm = this.fb.group({
      topic: ['', Validators.required],
      numberOfPeople: ['', [Validators.required, Validators.min(1)]],
      startTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.meetingForm.valid) {
      // Add logic to handle meeting schedule submission, e.g., send data to the server
      console.log('Meeting schedule submitted:', this.meetingForm.value);
    }
  }
}

