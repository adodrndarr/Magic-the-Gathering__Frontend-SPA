import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';
import { ValidatorService } from '../services/validator.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {
  constructor(
    private validatorService: ValidatorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dataStorageService: DataStorageService
  ) { }

  loginForm: FormGroup
  name: string;

  ngOnInit() {
    this.initializeLoginForm();
    this.name = '';
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.name = this.loginForm.value['name'];
    this.dataStorageService.name = this.name;
    
    this.router.navigateByUrl('/magic-cards');
  }

  private initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      'name': [null, [
          Validators.required,
          Validators.pattern('^[A-Z].{2,20}$')
        ]
      ]
    });
  }

  public isInvalidInput(fieldName: string): boolean {
    return this.validatorService.isInvalidInput(fieldName, this.loginForm);
  }

  public isRequired(fieldName: string): boolean {
    return this.validatorService.isRequired(fieldName, this.loginForm);
  }

  public isInvalidFormat(fieldName: string): boolean {
    return this.validatorService.isInvalidFormat(fieldName, this.loginForm);
  }
}
