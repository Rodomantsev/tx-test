import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        // fixture.debugElement;
        // fixture.nativeElement;

    });

    it('should be created', function () {
        expect(component).toBeDefined();
    });

    it('should render counter property', function () {
        let num = 11;
        component.counter = num;
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.counter'));
        let el: HTMLElement = de.nativeElement;
        expect(el.textContent).toContain(num.toString());
    });


    it('should add green class if counter is even', () => {
        let num = 6;
        component.counter = num;
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('.counter'));
        let el: HTMLElement = de.nativeElement;
        expect(el.classList.contains('green')).toBeTruthy();
    });

    it('should increment counter if increment btn was clicked', () => {
        let num = 34;
        component.counter = num;
        const btn = fixture.debugElement.query(By.css('#increment'));
        btn.triggerEventHandler('click', null);
        expect(component.counter).toBe(num+1);
    });

});













