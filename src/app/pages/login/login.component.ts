import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private route: Router) {}

  ngOnInit() {
    this.route.navigate(['/login']);
  }
}
