import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isTrackButtonClicked = false;
  claimNumber: any;
  claimDate: Date = new Date();
  claimStatus: string = "In Progress";
  constructor() { }

  ngOnInit(): void {
  }

  trackButtonClick() {
    this.isTrackButtonClicked = true;
  }
}
