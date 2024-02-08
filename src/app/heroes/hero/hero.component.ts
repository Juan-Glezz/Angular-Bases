import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
private _nombre: string='Iron Man';
public get nombre(): string { 
  return this._nombre;
}
public edad: number=45;

public set nombre(value:string) {
  this._nombre=value;
 }

 public get nombreEnmayusculas(): string {
  return this._nombre.toUpperCase();
 }
 get dimeDescripcion(): string {
  return this._nombre + " tiene " + this.edad + " años";
 }

 cambiarNombre() {
  let nuevonombre=prompt('Ingrese nuevo nombre');
  console.log(nuevonombre);
  this._nombre=nuevonombre+"";
  // this._nombre='Batman';
 }
 cambiarEdad() {
  let nuevaedad:number | null =Number(prompt('Ingrese nueva edad'));
  this.edad=+nuevaedad;
  // this._edad=45;
 }
  reset() {
    this._nombre='Iron Man';
    this.edad=45;
  }
}
