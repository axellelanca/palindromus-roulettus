import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  started!: boolean;
  ended!: boolean;
  counter!: number;
  timeLeft!: number;
  timer!: number;
  word!: string;

  constructor() { }

  ngOnInit(): void {
  }

  
   // Function that starts the game and the timer and other stuff
  startGame() {
    this.started = true;
    this.ended = false;
    this.counter = 0;
    this.timeLeft = 4000;
    this.word = this.getWord();
    this.timer = window.setInterval(() => {
      this.timeLeft = this.timeLeft - 5;
      if (this.timeLeft === 0) {
        window.clearInterval(this.timer);
        this.ended = true;
      }
    }, 1);
  }

  // To count the score
  countClick() {
    if(!this.ended){
      this.counter++;
    }
  }

  // To add a random number between two numbers
  getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // To generate a random word
  generateWord(min: number, max: number){
      const vowels = 'aeiouy'.split('');
      const consonnants = 'bcdfghjklmnpqrstvwxz'.split('');
      const randomNbr = this.getRandom(min, max);
  
      let word = '';
  
      for (let i = 0; i < randomNbr; i++){
        if(i%2 === 0) {
          word += vowels[Math.floor(Math.random() * (vowels.length - 1))];
        } else {
          word += consonnants[Math.floor(Math.random() * (consonnants.length -1))]
        }
      }
  
      return word;
    }
  
  // To generate a palindrome
  generatePalindrome(){
      let palindrome = this.generateWord(2,8);
      let splitPalindrome = palindrome.split('');
      let reversePalindrome = splitPalindrome.reverse();
      let joinPalindrome = reversePalindrome.join('');
      
      
      return palindrome+joinPalindrome;
  }

    // To get a random word 
    getWord(){
      let number = this.getRandom(0,1);
      
      if(number === 0){
        return this.generateWord(4,16);
      } else {
        return this.generatePalindrome();
      }
    }
  

}
