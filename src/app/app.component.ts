import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shopping';

  changeTitleName(titleName:string){
    console.log("New Title from parent : "+titleName);
  }
}
