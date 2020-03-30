import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'data-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {
  user: any;

  constructor(
    private _auth: AuthService,
  ) {
    // this.user = this._auth.getUser();
    this.user = this._auth.user$;
  }

  ngOnInit() {
  }

  logout() {
    this._auth.logout();
  }

}
