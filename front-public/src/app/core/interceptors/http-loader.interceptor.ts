import { Injectable, ClassProvider, Inject, InjectionToken } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from "../../shared/services/spinner/spinner.service";

export  const LoaderBlackListToken = new InjectionToken('blacklist token');

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];

    constructor(private spinnerService: SpinnerService,
                @Inject(LoaderBlackListToken) private loaderBlackListToken: {method: [], url: string}[],
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.cannotChangeLoaderStatus(req) || this.disableLoaderHeaderExists(req)) {
            // CAN'T CHANGE!!!
            return next.handle(req);
        }
        this.requests.push(req);
        this.spinnerService.next(this.requests.length > 0);

        return new Observable((observer => {
            const subscription = next.handle(req)
                .subscribe(
                    event => {
                        observer.next(event);
                    },
                    err => {
                        this.removeRequest(req);
                        observer.error(err);
                    },
                    () => {
                        this.removeRequest(req);
                        observer.complete();
                    });
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        }));
    }

    private removeRequest(req: HttpRequest<any>): void {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
            this.spinnerService.next(this.requests.length > 0);
        }
    }

    private cannotChangeLoaderStatus(req: HttpRequest<any>): boolean {
        return this.loaderBlackListToken.some(item => {
            if (req.url.includes(item.url)) {
                return item.method.some(method =>
                    method === req.method);
            }
        });
    }

    private disableLoaderHeaderExists(req: HttpRequest<any>): boolean {
        return req.headers.get(HttpRequestCustomHeaderNames.DisableLoader) === HttpRequestCustomHeaderValues.LoaderDisabled;
    }
}

export const HTTP_LOADER_PROVIDER: ClassProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLoaderInterceptor,
    multi: true
};

export enum HttpRequestCustomHeaderNames {
    DisableLoader = 'Disable-Loader',
}

export enum HttpRequestCustomHeaderValues {
    LoaderDisabled = '1',
}
