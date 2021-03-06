import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Rectangle, PointText, Point, Path, project, PaperScope} from 'paper';

@Component({
  selector: 'app-drawing-board',
  templateUrl: './drawing-board.component.html',
  styleUrls: ['./drawing-board.component.css']
})
export class DrawingBoardComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  path: paper.Path;
  circle: paper.Path;

  handle;
  scope;
  ngAfterViewInit() {
    // create a new scope
    this.scope = new PaperScope();
    // bind it to the canvas
    this.scope.setup(this.canvas.nativeElement);
    // draw

    this.circle = new Path.Ellipse(new Rectangle(20, 20, 100, 100));

    // this.circle.strokeColor = "green";
    // this.circle.strokeWidth = 3;

    this.scope.view.onMouseDown = this.onMouseDown.bind(this);
    this.scope.view.onMouseDrag = this.onMouseDrag.bind(this);
    this.scope.view.onMouseUp = this.onMouseUp.bind(this);
  }
  onMouseDown(event) {

    this.handle = null;
    // Do a hit test on path for handles:
    const hitResult = this.scope.project.hitTest(event.point, {
      tolerance: 2,
      handles: true
    });
    if (hitResult) {
      if (hitResult.type == 'handle-in') {
        this.handle = hitResult.segment.handleIn;
      } else if (hitResult.type == 'handle-out') {
        this.handle = hitResult.segment.handleOut;
      }
    }
    if (this.handle == null) {
      // If we produced a path before, deselect it:
      if (this.path) {
        this.path.selected = false;
      }

      // Create a new path and set its stroke color to black:
      this.path = new Path({
        segments: [event.point],
        strokeColor: 'red',
        strokeWidth: 10,
        // Select the path, so we can see its segment points:
        fullySelected: true
      });
    }
  }

  // While the user drags the mouse, points are added to the path
  // at the position of the mouse:
  onMouseDrag(event) {
    if (this.handle) {
      this.handle.x += event.delta.x;
      this.handle.y += event.delta.y;
    } else if (this.path) {
      this.path.add(event.point);

    }
  }

  // When the mouse is released, we simplify the path:
  onMouseUp(event) {
    if (this.handle == null) {
      const segmentCount = this.path.segments.length;

      // When the mouse is released, simplify it:
      this.path.simplify(10);

      // Select the path, so we can see its segments:
      this.path.fullySelected = true;

      const newSegmentCount = this.path.segments.length;
      const difference = segmentCount - newSegmentCount;
      const percentage = 100 - Math.round((newSegmentCount / segmentCount) * 100);

    }
  }

  exportSVG() {
    return this.scope.project.exportSVG({asString: true});
  }
}
