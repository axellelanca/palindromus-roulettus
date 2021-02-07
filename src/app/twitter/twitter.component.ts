import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  @Input() score!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getHref(){
    return `https://twitter.com/intent/tweet?text=I had ${this.score} on the Palindromus Roulettus Game !&via=nugetchar`
  }

}
