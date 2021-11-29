import { Component, OnInit } from '@angular/core';
import { GetDataService } from "./services/get-data.service";

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

    title: string = '';

    constructor(private data: GetDataService) {
    }

    ngOnInit(): void {
        this.data.fetch().subscribe((result: any) => {
            this.title = result.status;
        })
    }

}
