import { Component } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients = [
    { name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
    { name: 'Jane Smith', email: 'jane@example.com', address: '456 Oak St' },
    { name: 'Bob Johnson', email: 'bob@example.com', address: '789 Elm St' },
    { name: 'Alice Williams', email: 'alice@example.com', address: '101 Pine St' },
    { name: 'Charlie Brown', email: 'charlie@example.com', address: '202 Maple St' },
  ];
}
