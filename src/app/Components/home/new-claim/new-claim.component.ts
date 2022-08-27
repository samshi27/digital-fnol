import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-claim',
  templateUrl: './new-claim.component.html',
  styleUrls: ['./new-claim.component.scss']
})
export class NewClaimComponent implements OnInit {
  menuOption: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  menuClick(activeButton: string, menuOption: string) {
    var x = document.getElementsByClassName('menu-content');
    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('display-none');
    }
    document.getElementById(menuOption)?.classList.remove('display-none');

    var y = document.getElementsByClassName('menu');
    for (var j = 0; j < y.length; j++) {
      y[j].classList.remove('active');
    }
    document.getElementById(activeButton)?.classList.add('active');

  }
}
