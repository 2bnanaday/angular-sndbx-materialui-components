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

  constructor(private cService: ContactService) {}

  ngOnInit() {
    this.contactList = this.cService.CONTACTS;
  }
}
