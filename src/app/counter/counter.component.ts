import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h2> Nuestra aplicacion se llama {{dameTittle}}</h2>
<h2>Contador: {{counter}}</h2>
<input type="button" value="+1" (click)="incrementar()">
<input type="button" value="reset" (click)="reset()">
<input type="button" value="-1" (click)="decrementar()">
  `,
  styles: ``
})
export class CounterComponent {
  title = 'Bases';
  counter: number=10;
 incrementar():void{
   this.counter=this.counter+1;
 }
 decrementar(): void{
   this.counter--;
 }
 reset(): void{
   this.counter=10;
 }
get dameTittle(): string{
 return this.title;
}
}
