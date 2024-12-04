import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';

import { type User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string
//   avatar: string
//   name: string
// }

// interface User {
//   id: string
//   avatar: string
//   name: string
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); //<string> not required but will help with error catching
  //select = output<string>(); //still required emit newer way

  //Signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  
  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
