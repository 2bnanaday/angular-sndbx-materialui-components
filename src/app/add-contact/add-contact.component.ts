import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  fNameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  lNameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

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
