/**
 * Created by lin on 2017/4/15.
 */
@Component({
    selector: 'key-up1',
    template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
    values = '';

    /*
     // 非强类型
     onKey(event:any) {
     this.values += event.target.value + ' | ';
     }
     */
    // 强类型
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}