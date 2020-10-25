import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fastAssets = 'https://raw.githubusercontent.com/fuesorg/assets/master/fuesorg';
  constructor(
    public router: Router,
    public auth: AuthService
  ) {
  }
}
