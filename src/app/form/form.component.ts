import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.pattern('^[^0-9]*$')]],
      edad: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
