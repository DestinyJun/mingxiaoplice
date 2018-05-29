import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {LoginService} from '../../shared/login.service';

@Component({
  selector: 'app-clues-alarm',
  templateUrl: './clues-alarm.component.html',
  styleUrls: ['./clues-alarm.component.css']
})
export class CluesAlarmComponent implements OnInit {
  public myForm: FormGroup;
  public myFormTwo: FormGroup;
  public fileDate: FormData = new FormData();
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('犯罪线索举报');
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
      this.myForm.value.type = '我要报警';
      console.log(this.myForm.value.type);
      this.loginService.addRecord(this.myForm.value).subscribe((data) => {
          console.log(data);
      });
    }
  }
}

