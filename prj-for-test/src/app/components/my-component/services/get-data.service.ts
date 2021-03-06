import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GetDataService {

    constructor(private http: HttpClient) { }

    fetch(): any {
        return of({status: 'Awesome!'});
    }

}
