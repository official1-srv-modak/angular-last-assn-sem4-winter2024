import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="feedback">
      <h2>Feedback Form</h2>
      <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name:</label>
          <input id="name" type="text" formControlName="name">
          <div *ngIf="feedbackForm.get('name')?.errors?.['required'] && feedbackForm.get('name')?.touched" class="error">
            Name is required
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email">
          <div *ngIf="feedbackForm.get('email')?.errors?.['required'] && feedbackForm.get('email')?.touched" class="error">
            Email is required
          </div>
          <div *ngIf="feedbackForm.get('email')?.errors?.['email'] && feedbackForm.get('email')?.touched" class="error">
            Please enter a valid email
          </div>
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" formControlName="message"></textarea>
          <div *ngIf="feedbackForm.get('message')?.errors?.['required'] && feedbackForm.get('message')?.touched" class="error">
            Message is required
          </div>
        </div>

        <button type="submit" [disabled]="!feedbackForm.valid">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .feedback {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .error {
      color: red;
      font-size: 0.8rem;
    }
    button {
      padding: 0.5rem 1rem;
      background: #333;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background: #999;
    }
  `]
})
export class FeedbackComponent {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
    }
  }
}