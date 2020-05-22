import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @HostBinding('class') class = 'bg-primary';

  constructor() { }

  ngOnInit(): void {
  }

}
