import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  @ViewChild('signInPopup') signInPopup!: ElementRef;
  @ViewChild('joinPopup') joinPopup!: ElementRef;



  openSignInPopup(): void {
    console.log('Sign-in button clicked');
    this.signInPopup.nativeElement.style.display = 'block';

    // Hide the Join Us form when Join Us is clicked
    const joinUsFormContainer = document.querySelector('.join-popup') as HTMLElement;
    if (joinUsFormContainer) {
      joinUsFormContainer.style.display = 'none';
    }
  }

  closeForm() {
    const formContainer = document.querySelector('.popup') as HTMLElement;
    if (formContainer) {
      formContainer.style.display = 'none';
    }
  }

  closeJoinForm() {
    const formContainer = document.querySelector('.join-popup') as HTMLElement;
    if (formContainer) {
      formContainer.style.display = 'none';
    }
  }

  openJoinPopup(): void {
    console.log('Join Us link clicked');
    this.joinPopup.nativeElement.style.display = 'block';

    // Hide the Sign In form when Join Us is clicked
    const signInFormContainer = document.querySelector('.popup') as HTMLElement;
    if (signInFormContainer) {
      signInFormContainer.style.display = 'none';
    }
  }

}
