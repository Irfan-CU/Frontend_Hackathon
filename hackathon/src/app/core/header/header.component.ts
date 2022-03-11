import { Component, OnInit } from '@angular/core';
import { OrganirouteService } from 'src/app/shared/services/Organiroute/organiroute.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:OrganirouteService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.auth.logOut();
    
  }
}
