import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  value: number;
  _id?: string;
  color: string;
  @Input() name: string;
  @Input() price: number;

  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  constructor() {
    this.color = this.getRandomColor();
    this._id = this.makeid(6);
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value <= 0) return;
    this.value--;
  }

  myStyle(): object {
    return { 'background-color': 'green' };
  }

  setAttributes(item_name, item_price) {
    this.name = item_name;
    this.price = item_price;
  }

  ngOnInit() {
    console.log(this.name + ' ' + this.price);
  }
}
