/**
 * Created by lin on 2017/4/15.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1> 
        <h2>我喜欢的网站: {{mySite}}</h2>
        <p>网站列表:</p>
        <ul>
            <li *ngFor="let site of sites">
                {{ site }}
            </li>
        </ul>
        `
})
export class AppComponent {
    title='Angular插值';
    mySite='LinDL站点';
    sites=['CSDN','掘金','简书'];
}