import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  a: number;
  b: number;
  result: number;
  worker: Worker;

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      // initialize a worker from adder.worker.ts
      this.worker = new Worker('./adder.worker', { type: 'module' });

      // define behaviour when worker finishes his task
      this.worker.onmessage = ({ data }) => {
        this.result = data;
      };
    } else {
      console.log('Web Workers are not supported in this environment');
    }
  }

  add() {
    if (this.worker && this.a && this.b) {
      // make worker work
      this.worker.postMessage({a: this.a, b: this.b});
    }
  }
}
