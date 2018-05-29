import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/login.service';

@Component({
  selector: 'app-form-dispute',
  templateUrl: './form-dispute.component.html',
  styleUrls: ['./form-dispute.component.css']
})
export class FormDisputeComponent implements OnInit {
  public title: string;
  public myForm: FormGroup;
  public myFormTwo: FormGroup;
  public fileDate: FormData = new FormData();
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.title = this.routerInfo.snapshot.queryParams['name'];
    this.titleService.setTitle(this.title);
    this.myForm = this.fb.group({
      title: [{value: '贵阳', disabled: false}, [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
    this.myFormTwo = new FormGroup({
      first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    });
  }
  public fileboxClick(uploadfiles): void {
    uploadfiles.click();
  }
  public onChangeFiles(e, fileImage): void {
    // console.log(e.srcElement.files);
    const fileList = e.target.files;
    // 利用ngfor循环创建dom元素，点击一次，就让数组发生变化
    for (let i = 0; i < fileList.length; i++) {
      this.fileDate.append('uploadfile', fileList[i]);
      console.log(this.fileDate.get('uploadfile'));
      const read = new FileReader();
      read.readAsDataURL(fileList[i]);
      read.onload = function () {
        const url = read.result;
        const p = document.createElement('img');
        p.src = url;
        p.width = 50;
        p.style.marginLeft = '15px';
        fileImage.appendChild(p);
      };
    }
  }
  public onSubmit(): void {
    if (this.myForm.valid) {
      this.myForm.value.type = '矛盾纠纷诉求';
      this.loginService.addRecord(this.myForm.value).subscribe((data) => {
        console.log(data);
      });
    }
  }

}
