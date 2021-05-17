import { Component, OnInit } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  a:string='not logged in';

  constructor(private tsObj:TestService) { }
   

  ngOnInit(): void {
    this.tsObj.setData(this.a);

  }

}
