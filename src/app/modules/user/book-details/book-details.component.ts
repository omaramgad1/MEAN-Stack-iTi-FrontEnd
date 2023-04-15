import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  selected: string = "Read"
  select: boolean = true;
  rate: boolean = true;
  public form: FormGroup;
  value: number = 5;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
  changeStatus() {
    this.select = !this.select
  }
  changeRate() {
    this.rate = !this.rate
  }
}
