import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { SpinnerService } from "../spinner/spinner.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

    get(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object> {
        this.spinnerService.next(true);
        return this.http.get(url, options)
            .pipe(tap(response => this.spinnerService.next(false),(error: any) => this.spinnerService.next(false))
        )
    }
    post(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe: 'response';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<Object>{
        this.spinnerService.next(true);
        return this.http.post(url, body, options)
            .pipe(tap(response => this.spinnerService.next(false),(error: any) => this.spinnerService.next(false)));

    }
}
