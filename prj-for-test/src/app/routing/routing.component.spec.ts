import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import { ActivatedRoute, Params, Router, RouterOutlet } from "@angular/router";
import { Observable, of, Subject } from "rxjs";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

class RouterStub {
    navigate(path: string[]) {
    }
}

class ActiveRouteStub {
    private subject$ = new Subject<Params>();

    push(params: Params) {
        this.subject$.next(params)
    }

    get params(): Observable<any> {
        return this.subject$.asObservable();
    }
}

describe('RoutingComponent', () => {
    let component: RoutingComponent;
    let fixture: ComponentFixture<RoutingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RoutingComponent],
            imports: [RouterTestingModule],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: ActivatedRoute, useClass: ActiveRouteStub},
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        fixture = TestBed.createComponent(RoutingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component.ngOnInit();
        expect(component).toBeTruthy();
    });

    it('should navigate to posts if go back', () => {
        const router = TestBed.inject(Router);
        const spy = spyOn(router, 'navigate');
        component.goBack();
        expect(spy).toHaveBeenCalledWith(['/posts'])
    });

    it('should navigate to 404 if id = 0', () => {
        const router = TestBed.inject(Router);
        const route: any = TestBed.inject(ActivatedRoute);
        const spy = spyOn(router, 'navigate');
        route.push({id: '0'});
        expect(spy).toHaveBeenCalledWith(['/404']);
    });

    it('should have reouer-outlet directive', () => {
        const de = fixture.debugElement.query(By.directive(RouterOutlet))
        expect(de).not.toBeNull();
    });

});
