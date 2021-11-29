import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email:     new FormControl('mysuperemail@gmail.com',[ Validators.required]),
        password: new FormControl('11111qQ', [Validators.required]),
    });

    constructor(private http: HttpClient,
                private authService: AuthService,
                private router: Router) { }

    ngOnInit(): void {
        this.delete()
    }

    onSubmit(): void {
        const { email, password } = this.form.value;

        this.authService.login(email, password).subscribe(response => {
            console.log('value', response);
            this.router.navigate(['/create-post']);
        });
    }

    delete(): void {
        this.authService.delete('mysuperemail@gmail.com').subscribe(result =>{
        })
    }
}
