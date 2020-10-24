import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angfirestarter';
  constructor(private db: AngularFirestore) {
    console.log(!!this.db.firestore.app.name ? 'Firebase Mode Activated!': 'Firebase not working :\'(');
  }
}
