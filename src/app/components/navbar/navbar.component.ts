import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() pageTitle !: string;

  constructor() {

   }

  ngOnInit(): void {
    let title = this.pageTitle;
    console.log(title);
  }

}
