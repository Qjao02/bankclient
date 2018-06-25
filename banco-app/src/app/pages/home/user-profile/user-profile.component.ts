import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from "../../../cliente-interface";
import { UserProfileServiceService } from "./user-profile-service.service";
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserProfileServiceService]
})
export class UserProfileComponent implements OnInit {
  
  public cliente : ClienteInterface
  constructor(private upService : UserProfileServiceService) { }

  ngOnInit() {
  }

  
}
