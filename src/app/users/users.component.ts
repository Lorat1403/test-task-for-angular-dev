import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  readonly headerLinks = ['link1', 'link3', 'link4'];
  readonly footerLinks = ['link1', 'link1', 'link3', 'link4'];
  readonly services = [1, 2, 3, 4, 5, 6]; 

  constructor() { }

  ngOnInit(): void {
  }

}
