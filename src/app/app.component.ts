import { Component, OnInit, ViewChild } from "@angular/core";
import { AusstecherleService } from "./ausstecherle.service";

import {DrawingBoardComponent} from "./drawing-board/drawing-board.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
 
  @ViewChild('drawingBoard', { static: false }) drawingBoard: DrawingBoardComponent;
 
  constructor(private ausstecherleService: AusstecherleService) {}

  ngOnInit() {}

  uploadSVG() {
    this.ausstecherleService.uploadSVG(this.drawingBoard.exportSVG());
  }
}
