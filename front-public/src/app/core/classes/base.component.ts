import { OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  private subsArray: Subscription[] = [];

  constructor() {
  }

  get subs(): Subscription | Subscription[] {
    return this.subsArray;
  }

  set subs(sub: Subscription | Subscription[]) {
    if (sub) {
      if (sub instanceof Subscription) {
        this.subsArray.push(sub);
      } else {
        this.subsArray = this.subsArray.concat(sub);
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  protected unsubscribe(sub: Subscription): void {
    const idx = this.subsArray.indexOf(sub);

    if (idx >= 0) {
      this.subsArray[idx].unsubscribe();
      this.subsArray.splice(idx, 1);
    }
  }

  protected unsubscribeAll(): void {
    for (const sub of this.subsArray) {
      if (sub) {
        sub.unsubscribe();
      }
    }
    this.subsArray = [];
  }

}
