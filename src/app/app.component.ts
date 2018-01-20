import { Component, OnInit } from '@angular/core';
import React from 'react';
import FlipCard from 'react-flipcard';
import { LocalStorageService } from 'angular-2-local-storage';

// Other
import swal from 'sweetalert2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Test interface

interface Note {
  heart: number;
  name: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app_title = 'Yenaideum';
  currentDate: Date;
  show_message = false;

  constructor( private localStorageService: LocalStorageService ) {

   }

  ngOnInit() {
    this.currentDate = new Date();
    if (this.localStorageService.get('cookiespopup') !== 'shown' ) {
      this.localStorageService.set('cookiespopup', 'shown');
      swal('Hello and welcome to Yenaideum! Our site uses cookies to collect data. By clicking this, you accept to use our website' +
      ' under our terms and policies and abide by your own laws you reside at.');
    } else {
      // nothing
    }

  }

}
