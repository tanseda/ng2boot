import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../model/User";

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  id : number;
  firstName : string;
  lastName : string;

  constructor(private http: HttpClient){
    this.id = 0;
    this.firstName='';
    this.lastName='';
  }

  ngOnInit() {
  }

  onSubmit() {
    const user: User = new User();
    user.firstName = 'Gokhan';
    user.lastName = 'Karakis';
    this.http.post<User>("http://127.0.0.1:6060/user/create", user).subscribe(response=> {
      this.id = response.id;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
    });
  }

}
