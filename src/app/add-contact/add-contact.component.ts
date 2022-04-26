import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  fNameFormControl = new FormControl('', [Validators.required, Validators.email]);lNameFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

}