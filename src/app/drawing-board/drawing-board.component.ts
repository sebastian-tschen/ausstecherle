import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {paper} from 'paper';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.css']
})
export class DrawingBoardComponent implements AfterViewInit {

 @ViewChild('canvas',{static:false}) canvas: ElementRef;

  circle: paper.Path;
  ngAfterViewInit ()
  {
    // create a new scope
    const scope = new paper.PaperScope();
    // bind it to the canvas
    scope.setup(this.canvas.nativeElement);
    // draw

    this.circle = new paper.Path.Ellipse( 
      new paper.Rectangle( 20,20,50,50 ) );
    
    this.circle.strokeColor = "green";
    this.circle.strokeWidth = 3;

  }

  
}