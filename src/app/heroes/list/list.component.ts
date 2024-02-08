import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroname: string[]=["Alpha", "Beta", "Delta", "Epsilon", "Eta", "Zeta","Gamma",];
heroeborrado?: string=''
borrarultimo(): void{
  this.heroeborrado=this.heroname.pop();
  // this.heroeborrado=String(this.heroname.pop());
  console.log(this.heroname);
}
}
