import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { CustomValidators } from 'src/app/shared/helpers/form/validators';
import { HttpClient } from "@angular/common/http";
import { UsersService } from "../../shared/services/users/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-all',
  templateUrl: './create-all.component.html',
  styleUrls: ['./create-all.component.scss']
})
export class CreateAllComponent implements OnInit {


    form: FormGroup = new FormGroup({
        username:  new FormControl(null),
        email:     new FormControl('mysuperemail@gmail.com'),
        password1: new FormControl('11111qQ'),
        password2: new FormControl('11111qQ'),
    });


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
