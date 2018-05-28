import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-mian-workflow',
  templateUrl: './mian-workflow.component.html',
  styleUrls: ['./mian-workflow.component.css']
})
export class MianWorkflowComponent implements OnInit {
  private textData = [
    [
      {txt: '选择法院>>填写立案申请人姓名、联系方式>>填写各方当事人信息>>上传原告身份证明材料>>填写诉讼请求及理由'},
      {}
    ],
    [],
    []
  ]
  public navList = [
    [
      {name: '网上立案', url: '../disform'},
      {name: '户籍办理', url: '../disform'}
    ],
    [
      {name: '流动人口管理', url: '../disform'},
      {name: '出入境窗口', url: '../disform'}
    ],
    [
      {name: '控告申述', url: '../disform'},
      {name: '司法援助', url: '../disform'}
    ]
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('矛盾纠纷诉求');
  }
}
