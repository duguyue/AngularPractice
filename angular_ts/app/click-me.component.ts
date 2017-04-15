/**
 * Created by lin on 2017/4/15.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">点我!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'LinDL';
    }
}