import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material (is there a way to condense this down into one line?)
import { MatCommonModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

//platform-browser
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ContactListComponent,
    ToolbarComponent,
    AddContactComponent,
    EditContactComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
