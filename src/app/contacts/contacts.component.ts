import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  newDate: Date = new Date();
  hour: number = this.formatTime(this.newDate.getHours());
  min: number = this.formatTime(this.newDate.getMinutes());
  sec: number = this.formatTime(this.newDate.getSeconds());

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.hour = this.formatTime(new Date().getHours());
      this.min = this.formatTime(new Date().getMinutes());
      this.sec = this.formatTime(new Date().getSeconds());
    }, 1000)
  }
  formatTime(num) {
    return num < 10 ? "0" + num : num;
  }

}
