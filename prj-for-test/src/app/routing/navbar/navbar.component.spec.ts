import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent]
        })

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have link ', function () {
       const dl = fixture.debugElement.queryAll(By.directive(RouterLink));
       const index = dl.findIndex(e => e.properties['href'] === '/posts2');
       expect(index).toBeGreaterThan(-1)
    });
});
