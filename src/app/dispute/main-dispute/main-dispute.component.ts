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
      {name: '林地纠纷', url: '../disform', imgUrl: 'url(/assets/images/树叶.png)', bgColor: '#3498DB'},
      {name: '家事纠纷', url: '../disform', imgUrl: 'url(/assets/images/家.png)', bgColor: '#E74C3C'},
      {name: '合同纠纷', url: '../disform', imgUrl: 'url(/assets/images/合同.png)', bgColor: '#78BA00'}
    ],
    [
      {name: '用水纠纷', url: '../disform', imgUrl: 'url(/assets/images/水分.png)', bgColor: '#E74C3C'},
      {name: '相邻纠纷', url: '../disform', imgUrl: 'url(/assets/images/邻居.png)', bgColor: '#78BA00'},
      {name: '劳资纠纷', url: '../disform', imgUrl: 'url(/assets/images/金钱.png)', bgColor: '#3498DB'}
    ]
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('纠纷诉求');
  }

}
