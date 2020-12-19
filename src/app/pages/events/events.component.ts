import { TransitiveCompileNgModuleMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //pdfSrc="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  pdfSrc="https://github.com/cs336-wic/pdfs/blob/master/WIC%20Mentorship%20Program%20Brochure.pdf?raw=true";
}
