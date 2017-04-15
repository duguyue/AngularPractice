/**
 * Created by lin on 2017/4/15.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template:
        '<h1>{{title}}</h1> <h2>我喜欢的网站: {{mySite}}</h2>'
})
export class AppComponent {
    title='Angular插值';
    mySite='LinDL站点'
}