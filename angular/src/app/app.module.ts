import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';


@NgModule({
    declarations: [
        AppComponent,
        CreateClientComponent,
        CreateMeetingComponent,
        ClientListComponent,
        MeetingListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
