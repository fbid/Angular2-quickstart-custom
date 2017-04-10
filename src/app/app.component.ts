import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['styles.css'],
})
export class AppComponent  {
  name: string = 'World';

  fruits: string[] = [
    'apples',
    'pears',
    'peaches',
    'kiwis'
  ];

  changeFruitName(){
    this.fruits[0] = 'coconuts';
  }

  setName(newName:string){
    this.name = newName;
  }

}
