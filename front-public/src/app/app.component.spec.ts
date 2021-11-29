import { AppComponent } from './app.component';
import { FormBuilder } from "@angular/forms";

xdescribe('AppComponent', () => {

    let comp: AppComponent;

    beforeEach(() => {
        comp = new AppComponent(new FormBuilder());
    });

    it('should increment by 1', function () {
        comp.increment();
        expect(comp.counter).toBe(1);
    });

    it('should decrement by 1', function () {
        comp.decrement();
        expect(comp.counter).toBe(-1);
    });

    it('should increment event emitter', function () {
        let result = null;
        comp.counterEmitter.subscribe(r => result = r);
        comp.increment();
        expect(comp.counter).toBe(1);
    });

    describe('Form:', () => {

        it('should create two controls login and password', () => {
            expect(comp.form.contains('login')).toBeTruthy();
            expect(comp.form.contains('password')).toBeTruthy();
        });

        it('should mark login controls as invalid if empty value', function () {
            const control = comp.form.get('login')
            control.setValue('');
            expect(control.valid).toBeFalsy();
        });

        it('should mark password controls as invalid if empty value', function () {
            const control = comp.form.get('password');
            control.setValue('');
            expect(control.valid).toBeFalsy();
        });
    })
});
