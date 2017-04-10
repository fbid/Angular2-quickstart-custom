import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Input() name: string;
  @Output() onNameChanged = new EventEmitter<string>();

  changeName(newName: string){
    this.onNameChanged.emit(newName);
  }

}
