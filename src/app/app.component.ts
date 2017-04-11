import { Component } from '@angular/core';
import { Fruit } from './shared/models/fruit';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['styles.css']
})
export class AppComponent  {
  name: string = 'World';

  fruits: Fruit[] = [
    { name:'Kiwi', bio: false, origin: 'Brazil' },
    { name: 'Apples', bio: true },
    { name: 'Peaches', bio: false, origin: 'Spain' }
  ];

  changeFruitName(){
    this.fruits[0].name = 'coconuts';
  }

  setName(newName:string){
    this.name = newName;
  }

}
