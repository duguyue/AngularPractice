/**
 * Created by lin on 2017/4/15.
 */
@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }