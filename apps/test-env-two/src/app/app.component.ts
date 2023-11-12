import { Component } from '@angular/core';

@Component({
  selector: 'test-env-two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-env-two';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
