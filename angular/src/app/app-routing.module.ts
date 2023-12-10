import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateClientComponent } from './create-client/create-client.component';
import { ClientListComponent } from './client-list/client-list.component';

import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';


const routes: Routes = [

  {
    path: 'create-client',
    component: CreateClientComponent
  },
  {
    path: 'client-list',
    component: ClientListComponent
  },
  {
    path: 'create-meeting',
    component: CreateMeetingComponent
  },
  {
    path: 'meeting-list',
    component: MeetingListComponent
  },
  {
    path: '**',
    redirectTo: 'create-client'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
