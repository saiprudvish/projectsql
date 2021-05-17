import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  b:string;
  constructor(private tsObj:TestService) { }

  ngOnInit(): void {
    this.b=this.tsObj.getData();
  }

}
