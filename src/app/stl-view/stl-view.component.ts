import {Component, OnInit} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-stl-view',
  templateUrl: './stl-view.component.html',
  styleUrls: ['./stl-view.component.css']
})
export class StlViewComponent implements OnInit {

  title = 'stl-model-viewer basic example';

  meshOptions = {
    up: new THREE.Vector3(1.0, 0.0, 0.0),
    castShadow: true,
    scale: new THREE.Vector3(0.03, 0.03, 0.03)
  };

  constructor() {
  }

  ngOnInit() {
  }

}
