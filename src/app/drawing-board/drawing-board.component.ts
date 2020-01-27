import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.css']
})
export class DrawingBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      paper.setup('paperCanvas');
  }

}