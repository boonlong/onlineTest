import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from "angularfire2/database-deprecated";


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
   items : FirebaseListObservable<any[]>;
  constructor(private router: Router,public db: AngularFireDatabase) {
    let itemsa = this.db.list('/user');
    //this.items=db.list('/user');
   }
  //https://medium.com/@tony.sutin1234/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-angular-4-%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B1%E0%B8%9A-firebase-3-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-angularfire-2-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B9%81%E0%B8%9A%E0%B8%9A-real-time-3971396465a9
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
