import { Component, OnInit } from '@angular/core';
import { CustomValidators } from "../../../../../front-public/src/app/shared/helpers/form/validators";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "../../shared/services/user/users.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



    // @ts-ignore
    form: FormGroup = new FormGroup({
        username:  new FormControl(null, Validators.required),
        email:     new FormControl('mysuperemail@gmail.com', [Validators.required, Validators.email]),
        password1: new FormControl('11111qQ', Validators.required),
        password2: new FormControl('11111qQ', Validators.required),
    });
// , {
//     validators: CustomValidators.MustMatch('password1', 'password2')
// }

    constructor(private http: HttpClient,
                private usersService: UsersService,
                private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        // this.form.markAllAsTouched();
        console.log(this.form.value);
        console.log(this.form);
        const {password1, password2, ...user } = this.form.value;

        this.usersService.createUser({...user, password: password1})
            .subscribe(result => {
                console.log('result', result);
            });
    }

}
