import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';

export type AvatarType = 'misspiggy' | 'kermitfrog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts = contacts;

  photo = 'https://github.com/2bnanaday/angular-sndbx-materialui-components/blob/master/src/assets/img/misspiggy.jpg?raw=true';

  avatar: AvatarType = 'misspiggy';

  getAvatar(type: AvatarType) {
    this.avatar = type;
  }

  // get showListContact() {
  //   return this.editor === 'contact-list';
  // }

  // get showAddContact() {
  //   return this.editor === 'add-contact';
  // }

  constructor() {}

  ngOnInit() {}
}
