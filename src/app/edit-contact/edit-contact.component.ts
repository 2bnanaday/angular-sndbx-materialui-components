import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

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