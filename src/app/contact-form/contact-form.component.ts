import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      price: new FormControl(null),
    });
  }
}
