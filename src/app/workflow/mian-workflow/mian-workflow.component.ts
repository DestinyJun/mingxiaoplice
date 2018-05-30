import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-mian-workflow',
  templateUrl: './mian-workflow.component.html',
  styleUrls: ['./mian-workflow.component.css']
})
export class MianWorkflowComponent implements OnInit {
  public navList = [
    [
      {name: '网上立案', url: '../formwork', text: `选择法院>>
    填写立案人姓名、联系方式>>
    填写各方当事人信息>>
    上传原告身份证明材料>>
    诉讼请求及理由>>
    上传证据材料>>
    等待法院回复`},
      {name: '户籍办理', url: '../formwork', text: `
      <p>准备资料：</p>
      <p>1、申请人的书面申请</p>
      <p>2、夫妻双方的户口本、身份证原件及复印件。</p>
      <p>3、结婚证。</p>
      <p>4、户口证明。</p>
      <p>5、婚育证明(两地各一份)。</p>
      `}
    ],
    [
      {name: '流动人口管理', url: '../formwork', text: `
      <p>准备资料：</p>
      <p>1、申请人的书面申请</p>
      <p>2、夫妻双方的户口本、身份证原件及复印件。</p>
      <p>3、结婚证。</p>
      <p>4、户口证明。</p>
      <p>5、婚育证明(两地各一份)。</p>`},
      {name: '出入境窗口', url: '../formwork', text: `
      <p>办理条件：</p>
      <p>1、首次申请护照：</p>
      <p>2、护照加注：</p>
      <p>3、护照换发：</p>
      <p>4、护照补发：</p>
      <p>所需资料：</p>
      <p>1、申请表；</p>
      <p>2、照片；</p>
      <p>3、身份证明；</p>
      <p>4、单位意见；</p>
      <p>5、监护人材料</p>
   `}
    ],
    [
      {name: '控告申诉', url: '../formwork', text: `
      <p>提交材料：</p>
      <p>1、 起诉状；</p>
      <p>2、原、被告的身份证明；</p>
      <p>3、 公民本人、法人的法定代表人、其他组织的负责人不能亲自参加诉讼活动的，应当提交授权委托书。；</p>
      `},
      {name: '司法援助', url: '../formwork', text: `
      <p>提交书面申请和足以证明其确有经济困难的证明材料。
      其中因生活困难或者追索基本生活费用申请司法救助的，
      应当提供本人及其家庭经济状况符合当地民政、劳动和社会保障等部门规定的公民经济困难标准的证明。
      </p>
      `},
    ],
    [
      {name: '律师在线', url: '../formwork', text: `
      <p>请填写以下个人信息并提交</p>
      `},
      {name: '法律援助', url: '../formwork', text: `
      <p>需要以下资料：</p>
      <p>1.身份证明材料；</p>
      <p>2.经济困难证明材料；</p>
      <p>3.享有合法权益的证明材料；</p>
      <p>4.法律援助中心认为需要提供的其他材料；</p>
      `},
    ],
    [
      {name: '公正在线', url: '../formwork', text: `
      <p>请准备以下资料：</p>
      <p>1、自然人的身份证明；</p>
      <p>2、委托他人代为申请的，代理人须提交当事人的授权委托书；</p>
      <p>3、申请公证的文书；</p>
      <p>4、申请公证的事项的证明材料，涉及财产关系的须提交有关财产权利证明；</p>
      <p>5、与申请公证的事项有关的其他材料；</p>
      `},
      {name: '书记信箱', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
    ],
    [
      {name: '我有话说', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
      {name: '镇长信箱', url: '../formwork', text: `
      <p>请在下面的表单中填写个人信息及你想反馈的内容：</p>
      `},
    ]
  ];
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('矛盾纠纷诉求');
  }
}
