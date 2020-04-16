import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Unit } from 'src/app/models/unit.model';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'data-service-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class ServiceCreateComponent implements OnInit {
  form: FormGroup;
  unitsList: Unit[] = [];

  constructor(
    private _fb: FormBuilder,
    private _unit: UnitService,
  ) {
    this.getUnits();

    this.form = this._fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200),
      ]],
      desc: ['', [
        Validators.maxLength(200),
      ]],
      minCount: [1, [
        Validators.required,
      ]],
      price: [0, [
        Validators.required,
      ]],
      tax: [0, [
        Validators.required,
      ]],
      unit: [null, [
        Validators.required,
      ]],
      // services: new FormGroup({}),
    });
  }

  ngOnInit() {
  }

  get f() {
    return this.form.controls;
  }

  getUnits() {
    this._unit.getAll().valueChanges().subscribe(
      (data: Unit[]) => {
        this.unitsList = data;
      }
    );
  }

  save() {
    this.form.value;
    this.form.controls.unit.value;
    debugger;
  }

}
