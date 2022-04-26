import { Component, VERSION } from '@angular/core';

export type EditorType = 'contact-list' | 'add-contact';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // appName: string = 'Angular ' + VERSION.full;
  appName: string = 'Muppets Contact Manager';

  editor: EditorType = 'contact-list';

  get showListContact() {
    return this.editor === 'contact-list';
  }

  get showAddContact() {
    return this.editor === 'add-contact';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
