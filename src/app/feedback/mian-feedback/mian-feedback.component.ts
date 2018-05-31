import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-mian-feedback',
  templateUrl: './mian-feedback.component.html',
  styleUrls: ['./mian-feedback.component.css']
})
export class MianFeedbackComponent implements OnInit {
  public navList = [
    [
      {name: '书记信箱', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
      {name: '我有话说', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
    ],
    [
      {name: '镇长信箱', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
    ]
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('民情通道');
  }
}
