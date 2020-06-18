import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

 open = 0;


  menuHeaderItems: any[] = JSON.parse('[{"id":"","text":"","classImg":"account_circle","href":"","showInMenu":true,"items":[{"id":"","text":"Add User","classImg":"assignment_ind","href":"users/add","desc":"","index":"","label":""},{"id":"","text":"User List","classImg":"assignment","href":"users","desc":"","index":"","label":""}]}]');

  constructor() { }

  ngOnInit(): void {
  }

}
