import { Component } from '@angular/core';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent {
  meetings = [
    { topic: 'Project Kickoff', numberOfPeople: 10, startTime: new Date('2023-01-01T09:00:00') },
    { topic: 'Team Planning', numberOfPeople: 8, startTime: new Date('2023-02-15T14:30:00') },
    { topic: 'Status Update', numberOfPeople: 12, startTime: new Date('2023-03-10T11:15:00') },
    { topic: 'Client Presentation', numberOfPeople: 15, startTime: new Date('2023-04-05T15:45:00') },
    { topic: 'Product Demo', numberOfPeople: 10, startTime: new Date('2023-05-20T13:30:00') },
    { topic: 'Team Retrospective', numberOfPeople: 8, startTime: new Date('2023-06-10T10:00:00') },
    { topic: 'Board Meeting', numberOfPeople: 20, startTime: new Date('2023-07-18T16:30:00') },
    { topic: 'Project Review', numberOfPeople: 12, startTime: new Date('2023-08-22T14:00:00') },
  ];
}
