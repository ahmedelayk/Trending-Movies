import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});


  getFormData(formData:any): void {
      console.log(formData)
  }


  ngOnInit(): void{
    this.registerForm= new FormGroup({
      'firstName': new FormControl(null, Validators.pattern('^[a-zA-Z]{3,8}$')),
      'lastName': new FormControl(null),
      'age': new FormControl(null, [Validators.min(15), Validators.max(65)]),
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.pattern('^[A-Za-z0-9]{5,10}$')),
    });
  }

}
