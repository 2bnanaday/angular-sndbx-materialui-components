import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contactList: Contact[] = [];
  nextID: number = 0;
  cfName: string;
  clName: string;
  cPhone: string;
  cEmail: string;
  cAvatarUrl: string;

  constructor(private ctService: ContactService) {}

  ngOnInit() {
    this.contactList = this.ctService.CONTACTS;
  }

  addNewContact() {
    const newContact: Contact = {
      id: ++this.nextID,
      fName: this.cfName,
      lName: this.clName,
      phoneNumber: this.cPhone,
      email: this.cEmail,
      avatarUrl: this.cAvatarUrl,
    };
    this.contactList.push(newContact);
  }
}
