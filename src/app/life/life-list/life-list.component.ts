import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {mobileValidators} from '../../validator/Validators';
import {LoginService} from '../../shared/login.service';
import {ActivatedRoute} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import 'rxjs/Rx';
declare let BMap;

@Component({
  selector: 'app-life-list',
  templateUrl: './life-list.component.html',
  styleUrls: ['./life-list.component.css']
})
export class LifeListComponent implements OnInit {
  public modalRef: BsModalRef;
  public title: string;
  public myForm: FormGroup;
  public fileDate: FormData = new FormData();
  public locationTxt: string;
  public locationState = false;
  public submitState = true;
  public formName: any;
  public formPhone: any;
  public formContent: any;
  public listData: any;
  public persons = {name: '', type: '', phone: '', intro: ''};

  @ViewChild('baidumap') mapElement: ElementRef;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private loginService: LoginService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.locationTxt = '定位中......';
    this.title = this.routerInfo.snapshot.queryParams['name'];
    this.titleService.setTitle(this.title);
    this.ionViewWillEnter();
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, mobileValidators]],
      card: [''],
      content: ['', [Validators.required]],
    });
    this.formName = this.myForm.get('name');
    this.formPhone = this.myForm.get('phone');
    this.formContent = this.myForm.get('content');
    this.listData = [
      {
        imgUrl: 'assets/images/slide-logo-1.png',
        titles: '开机速度发货速度尽快发货',
        secondaryText: '士大夫胜多负少',
        phoneImg: 'assets/images/电话.png',
        personal: {name: '王小花', type: '家政清洁', phone: '13888888888', intro: '是南方司法解释发哈'}
      },
      {
        imgUrl: 'assets/images/slide-logo-1.png',
        titles: '开机速度发货速度尽快发货',
        secondaryText: '士大夫胜多负少',
        phoneImg: 'assets/images/电话.png',
        personal: {name: '王小花', type: '家政清洁', phone: '13888888888', intro: '是南方司法解释发哈'}
      },
      {
        imgUrl: 'assets/images/slide-logo-1.png',
        titles: '开机速度发货速度尽快发货',
        secondaryText: '士大夫胜多负少',
        phoneImg: 'assets/images/电话.png',
        personal: {name: '王小花', type: '家政清洁', phone: '13888888888', intro: '是南方司法解释发哈'}
      }
    ];
  }
  /************************百度地图***************************/
  public ionViewWillEnter() {
    let that;
    that = this;
    let map = new BMap.Map(this.mapElement.nativeElement);
    let point = new BMap.Point(106.681659, 26.627171);
    map.centerAndZoom(point, 12);
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      const geoc = new BMap.Geocoder();
      geoc.getLocation(r.point, function (rs) {
        // console.log(rs);
        that.locationTxt = rs.addressComponents.city;
        that.locationState = true;
      });
    }, {enableHighAccuracy: true});
  }

  /************************上传提交**************************/
  public fileboxClick(uploadfiles): void {
    uploadfiles.click();
  }
  public onChangeFiles(e, fileImage): void {
    // console.log(e.srcElement.files);
    const fileList = e.target.files;
    // 利用ngfor循环创建dom元素，点击一次，就让数组发生变化
    for (let i = 0; i < fileList.length; i++) {
      this.fileDate.append('uploadfile', fileList[i]);
      const read = new FileReader();
      read.readAsDataURL(fileList[i]);
      read.onload = function () {
        const url = read.result;
        const p = document.createElement('img');
        p.src = url;
        p.style.width = '50px';
        p.style.height = 'auto';
        p.style.marginRight = '10px';
        fileImage.appendChild(p);
      };
    }
  }
  public onSubmit(): void {
    if (this.myForm.valid ) {
      if (this.locationState) {
        if (this.submitState) {
          this.submitState = false;
          setTimeout(() => {
            this.submitState = true;
          }, 60000);
          this.fileDate.append('title', this.locationTxt);
          this.fileDate.append('name', this.myForm.value.name);
          this.fileDate.append('phone', this.myForm.value.phone);
          this.fileDate.append('card', this.myForm.value.card);
          this.fileDate.append('content', this.myForm.value.content);
          this.fileDate.append('type', '我要报警');
          this.loginService.addRecord(this.fileDate).subscribe((data) => {
            if (data.success) {
              alert(data.msg);
              window.location.reload();
            } else {
              alert('提交失败');
            }
          });
        } else {
          alert('一分钟后才可第二次提交');
        }
      } else {
        alert('请等待定位成功');
      }
    } else {
      alert('请输入资料');
    }
  }
  /************************弹窗**************************/
  public openModal(template: TemplateRef<any>, personal: any) {
    this.persons = personal;
    this.modalRef = this.modalService.show(template);
  }
}
