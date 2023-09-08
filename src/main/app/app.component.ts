import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo Angular Application';
  currentTime = new Date();
  @ViewChild('employeeComponent', { read: ViewContainerRef }) employeeViewContainer!: ViewContainerRef;


  updateCurrentTime() {
    this.currentTime = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000); // 1000 milliseconds = 1 second

  }
}
