import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../services/spinner/spinner.service";
import { BaseComponent } from "../../../core/classes/base.component";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent extends BaseComponent implements OnInit {
    isShowSpinner: boolean = false;
    constructor(private spinnerService: SpinnerService) {
      super();
    }

    ngOnInit(): void {
        this.subs = this.spinnerService.showSpinner.subscribe(result => {
            this.isShowSpinner = result;
        })
    }

}
