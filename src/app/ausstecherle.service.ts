import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AusstecherleService {
  constructor() {}

  uploadSVG(svgString: String) {
    console.log(svgString);
  }
}
