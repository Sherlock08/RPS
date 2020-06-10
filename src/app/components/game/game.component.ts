import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  myScore: number = 0;
  computerScore : number = 0;
  computerOptions: Array<string>=['rock','paper','scissors'];
  computerNumber: number;

  constructor() { }

  ngOnInit() {
  }
  
  startGame() {
    this.computerNumber = Math.floor(Math.random()*3);
    console.log(this.computerOptions[this.computerNumber]);
    
  }

}
