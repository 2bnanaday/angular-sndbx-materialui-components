import { Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  CONTACTS: Contact[] = [
    {
      id: 0,
      fName: 'miss',
      lName: 'piggy',
      phoneNumber: '701-xxx-xxxx',
      email: 'mpiggy@muppets.com',
      avatarUrl:
        'https://github.com/2bnanaday/angular-sndbx-materialui-components/blob/master/src/assets/img/misspiggy.jpg?raw=true',
    },
    {
      id: 1,
      fName: 'kermit',
      lName: 'frog',
      phoneNumber: '701-xxx-xxxx',
      email: 'kfrog@muppets.com',
      avatarUrl:
        'https://github.com/2bnanaday/angular-sndbx-materialui-components/blob/master/src/assets/img/kermitfrog.jpg?raw=true',
    },
    {
      id: 2,
      fName: 'countvon',
      lName: 'count',
      phoneNumber: '701-xxx-xxxx',
      email: 'cvcount@muppets.com',
      avatarUrl:
        'https://github.com/2bnanaday/angular-sndbx-materialui-components/blob/master/src/assets/img/countvoncount.jpg?raw=true',
    },
  ];

  addContact(newMuppet: Contact) {
    return this.http.post(
      'https://muppetsdb-default-rtdb.firebaseio.com/' + 'muppet.json',
      newMuppet
    );
  }
}
