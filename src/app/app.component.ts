import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'Hola mundo Angular..!!';
  users : String[]=[ 'Juan', 'Maria' , 'Jose', 'Pedro','Josefina'];
  visible : boolean= false;
  setVisible(): void{
    this.visible= this.visible ? false:true;
    console.log('Hemos hecho click en setVisible');
  }
}
