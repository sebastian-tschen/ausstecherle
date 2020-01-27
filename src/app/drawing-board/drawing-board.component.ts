import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { paper } from "paper";

@Component({
  selector: "app-drawing-board",
  templateUrl: "./drawing-board.component.html",
  styleUrls: ["./drawing-board.component.css"]
})
export class DrawingBoardComponent implements AfterViewInit {
  @ViewChild("canvas", { static: false }) canvas: ElementRef;

  path: paper.Path;
  circle: paper.Path;
  ngAfterViewInit() {
    // create a new scope
    const scope = new paper.PaperScope();
    // bind it to the canvas
    scope.setup(this.canvas.nativeElement);
    // draw

    this.circle = new paper.Path.Ellipse(new paper.Rectangle(20,20,100,100))

    this.circle.strokeColor = "blue";
    this.circle.strokeWidth = 3;

    scope.view.onMouseDown = this.onMouseDown.bind(this)
    scope.view.onMouseDrag = this.onMouseDrag.bind(this)
  }

  onMouseDown(event) {
    // If we produced a path before, deselect it:
    if (this.path) {
      this.path.selected = false;
    }

    // Create a new path and set its stroke color to black:
    this.path = new paper.Path({
      segments: [event.point],
      strokeColor: "black",
      // Select the path, so we can see its segment points:
      fullySelected: true
    });
  }
  onMouseDrag(event) {
    this.path.add(event.point);
  }
}
