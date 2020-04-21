import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Unit } from 'src/app/models/unit.model';
import { UnitService } from 'src/app/services/unit.service';
import { ServicesService } from 'src/app/services/services.service';
import { AuthService } from 'src/app/services/auth.service';

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
    private _auth: AuthService,
    private _service: ServicesService,
  ) {
    this.getUnits();

    this.form = this._fb.group({
      _userId: [this._auth.getUserId(), [
        Validators.required,
      ]],
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200),
      ]],
      desc: ['', [
        Validators.maxLength(200),
      ]],
      count: [1, [
        Validators.required,
      ]],
      groupName: ['', [
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

  create() {
    if (this.form.invalid) {
      return;
    }
    this._service.add(this.form.value);
  }

}
