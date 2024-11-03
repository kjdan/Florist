import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
//Created using EmailJS, the system works correctly after entering all the necessary information.
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, {
      publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          this.openSnackBar('Email został wysłany pomyślnie!', 'Zamknij');
        },
        (error) => {
          this.openSnackBar('Wysłanie emaila nie powiodło się: ' + (error as EmailJSResponseStatus).text, 'Zamknij');
        },
      );
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
