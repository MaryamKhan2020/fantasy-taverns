import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    userName = '';
    password = '';

    constructor(private router: Router, private authService: AuthService) {}

    Signup(): void {
        this.authService.login(this.userName, this.password).subscribe(
            (response) => {
                if (response.success) {
                    console.log('successful login');
                    this.router.navigateByUrl('/home');
                }
            },
            (error) => {
                console.log('username/password incorrect');
            },
        );
    }
}
