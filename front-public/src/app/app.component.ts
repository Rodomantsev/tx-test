import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @Output() counterEmitter = new EventEmitter<number>();

    title = 'my first test in real life)';
    counter = 0;

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            login: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    increment(): void {
        this.counter++;
        this.counterEmitter.emit(this.counter)
    }

    decrement(): void {
        this.counter--;
        this.counterEmitter.emit(this.counter)
    }

    multiplication(a: number, b: number): number {
        return a * b;
    }

    sayHello(name: string): string {
        return `Hello ${name}!`;
    }

}
