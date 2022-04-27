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
    Validators.minLength(1),
  ]);
  lNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
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
    //no longer need, was used for local array, using db instead
    // this.contactList = this.ctService.CONTACTS;
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
    // no longer need this, was initially used to push data locally to array, using db instead
    // this.contactList.push(newContact);

    this.ctService.addContact(newContact).subscribe((data) => {
      console.log(data);
    });
  }
}
