import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-clues-alarm',
  templateUrl: './clues-alarm.component.html',
  styleUrls: ['./clues-alarm.component.css']
})
export class CluesAlarmComponent implements OnInit {

  public myForm: FormGroup;
  public myFormTwo: FormGroup;
  constructor(private titleService: Title, private fb: FormBuilder) { }

  ngOnInit() {
    this.titleService.setTitle('犯罪线索举报');
    this.myForm = this.fb.group({
      location: [{value: '', disabled: false}, []],
      username: ['', []],
      phone: ['', []],
      describe: ['', []],
    });
    this.myFormTwo = new FormGroup({
      first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    });
  }
  public onSubmit(): void {
    console.log(this.myForm.value);
  }
  public fileboxClick(uploadfiles): void {
    uploadfiles.click();
  }
  public onChangeFiles(e, fileImage): void {
    // console.log(e.srcElement.files);
    const fileList = e.target.files;
    // 利用ngfor循环创建dom元素，点击一次，就让数组发生变化
    for (let i = 0; i < fileList.length; i++) {
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
}
