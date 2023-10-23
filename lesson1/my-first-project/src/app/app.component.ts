import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  imgpath = "../assets/html.png";
  diffimg = "no image"
  // isValid:boolean = false;
  isValid(){
    return false;
  }
  isTrue(){
    return true
  }
  onClick(){
    alert("not open")
  }

  isAdmin:boolean=true
}