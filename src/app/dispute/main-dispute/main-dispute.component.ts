import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main-dispute',
  templateUrl: './main-dispute.component.html',
  styleUrls: ['./main-dispute.component.css']
})
export class MainDisputeComponent implements OnInit {
  public navList = [
    [
      {name: '林权纠纷', url: '../disform'},
      {name: '土地承包纠纷', url: '../disform'}
    ],
    [
      {name: '家事纠纷', url: '../disform'},
      {name: '劳资纠纷', url: '../disform'}
    ],
    [
      {name: '用水纠纷', url: '../disform'},
      {name: '相邻纠纷', url: '../disform'}
    ],
    [
      {name: '合同纠纷等', url: '../disform'},
    ]
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('矛盾纠纷诉求');
  }

}
