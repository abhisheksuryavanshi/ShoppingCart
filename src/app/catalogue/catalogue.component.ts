import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  counters: CounterComponent[];
  public contactForm: FormGroup;
  message: string;

  constructor() {
    this.counters = new Array();
  }

  // addSingleCounter() {
  //   var newCounter = new CounterComponent();
  //   this.counters.push(newCounter);
  // }
  // addCounter(formData) {
  //   var newCounter = new CounterComponent();
  //   newCounter.name = formData.item_name;
  //   newCounter.price = formData.item_price;
  //   newCounter.value = 4;
  //   console.log('came here');
  //   this.counters.push(newCounter);
  //   console.log('done creating item ' + formData.item_name);
  //   console.log('item name ' + this.counters[0].name);
  // }

  deleteCounter(id) {
    console.log('Called delete with id ' + id);
    for (var i = 0; i < this.counters.length; i++) {
      if (this.counters[i]._id == id) {
        this.counters.splice(i, 1);
      }
    }
  }

  onSubmit() {
    var newCounter = new CounterComponent();
    newCounter.name = this.contactForm.controls.name.value;
    newCounter.price = this.contactForm.controls.price.value;
    this.counters.push(newCounter);
    // console.log('length is ' + this.counters.length);
  }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      price: new FormControl(null),
    });
    // this.data.changeMessage('Appul');
  }
}
