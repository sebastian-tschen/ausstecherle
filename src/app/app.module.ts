import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {DrawingBoardComponent} from './drawing-board/drawing-board.component';
import {AusstecherleService} from './ausstecherle.service';
import {StlViewComponent} from './stl-view/stl-view.component';
import {StlModelViewerModule} from 'angular-stl-model-viewer';

@NgModule({
  imports: [BrowserModule, FormsModule, StlModelViewerModule],
  declarations: [AppComponent, HelloComponent, DrawingBoardComponent, StlViewComponent],
  bootstrap: [AppComponent],
  providers: [AusstecherleService]
})
export class AppModule {
}
