import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
 })
 export class PrimeComponent implements OnInit, OnDestroy {

 private worker: Worker;
 primes: number[];

 ngOnInit() {
   this.worker = new Worker('./prime.worker', { type: 'module' });
   this.worker.onmessage = ({ data }) => {
     this.primes = data;
   };
   this.worker.postMessage(100);
 }

 ngOnDestroy() {
    this.worker.terminate();
  }
}
    