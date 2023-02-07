import { Component, OnInit, EventEmitter, Output, Injector } from '@angular/core';
import { product } from '../../interface/productInterface';
import { StateServiceService } from 'src/app/service/state-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [StateServiceService]
})

export class DashboardComponent implements OnInit {
  
  @Output() sendNewPageTitle = new EventEmitter<string>();

  constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.injector.get(StateServiceService);
  }

  sendPageTitle(){
    this.sendNewPageTitle.emit('shopping-online');
  }

}
