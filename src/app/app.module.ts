import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DrawingBoardComponent } from './drawing-board/drawing-board.component';
import { AusstecherleService } from './ausstecherle.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DrawingBoardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AusstecherleService]
})
export class AppModule { }
