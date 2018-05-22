import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mobileValidators} from '../validator/Validators';
import {LoginService} from '../shared/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public inviteCode: string;
  public errorMessage: string;
  public errorHidden: boolean;
  public myFormModel: FormGroup;
  constructor(
    private routerInfo: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('账号注册');
    // this.inviteCode = this.routerInfo.snapshot.params['invitecode'];
    // this.errorHidden = true;
    this.myFormModel = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [mobileValidators]],
      card: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      pconfirm: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  public onSubmit(): void {
    if (this.myFormModel.valid) {
      this.loginService.getRegister(this.myFormModel.value).subscribe((date) => {
        this.errorMessage = date.msg;
        this.errorHidden = date.success;
        if (date.success) {
          window.alert(date.msg);
          this.router.navigate(['/login']);
        }
      });
    } else {
      alert('请填写合法的注册资料');
    }
  }
}
{}
