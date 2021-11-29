import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';
import { GetDataService } from "./services/get-data.service";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe('MyComponentComponent', () => {
    let component: MyComponentComponent;
    let fixture:   ComponentFixture<MyComponentComponent>;
    let service:   GetDataService;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            declarations:   [MyComponentComponent],
            providers:      [GetDataService],
            imports:        [HttpClientModule]
        }).compileComponents();

        fixture   = TestBed.createComponent(MyComponentComponent);
        service   = TestBed.inject(GetDataService);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch on ngOnInit', () => {
        spyOn(service, 'fetch').and.returnValue(of({status: 'Awesome!'}));
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.title).toEqual('Awesome!')
    });

});
