import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  // selector: 'app-greet',
  templateUrl: "./greet.component.html",
  styleUrls: ["./greet.component.css"]
})
export class GreetComponent implements OnInit {
  @Input() name: string;
  @Output() greet = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  emitGreet(name) {
    this.greet.emit(`Hi, ${name}`);
  }
}
