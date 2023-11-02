import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {id: '1', name: 'john', isActive: true},
    {id: '2', name: 'jack', isActiv: true},
    {id: '3', name: 'mike', isctive: true}
  ];
  users$ = of(this.users);
  // incase users come from an api
 // username$ = this.users$.pipe(map((users) => this.users.map((user) => user.name)));
}
