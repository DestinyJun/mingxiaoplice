import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Params} from '@angular/router';
import {LoginService} from '../../shared/login.service';
declare let BMap;
import {
  ControlAnchor,
  GeolocationControlOptions,
  MapOptions, MapTypeControlOptions, MapTypeControlType,
  MarkerOptions,
  NavigationControlOptions, NavigationControlType,
  OverviewMapControlOptions,
  Point,
  ScaleControlOptions,
  BNavigationControl,
  BGeolocationControl,
} from 'angular2-baidu-map';
import {mobileValidators} from '../../validator/Validators';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-from-workflow',
  templateUrl: './from-workflow.component.html',
  styleUrls: ['./from-workflow.component.css']
})
export class FromWorkflowComponent implements OnInit {
  public locationTxt: string;
  public locationState = false;
  public submitState = true;
  public formName: any;
  public formPhone: any;
  public formContent: any;
  public title: string;
  public text: any;
  public myForm: FormGroup;
  public myFormTwo: FormGroup;
  public fileDate: FormData = new FormData();
  // 省市联动数据及状态
  public formShow = false;
  public cityShow = false;
  public countyShow = false;
  public communityShow = false;

  public citySure = false;
  public countySure = false;
  public communitySure = false;
  public housePurchaseSure = false;
  public houseRentingSure = false;

  public citys: any;
  public countys: any;
  public communitys: any;

  public cityDate = '请选择市...';
  public countyDate = '请选择区...';
  public communityDate = '请选择社区...';

  @ViewChild('baidumap') mapElement: ElementRef;

  constructor(
    public http: HttpClient,
    private titleService: Title,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => this.title = params['name']);
    this.routerInfo.params.subscribe((params: Params) => {
      this.text = params['text'];
    });
    this.locationTxt = '定位中......';
    this.titleService.setTitle(this.title);
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, mobileValidators]],
      card: [''],
      content: ['', [Validators.required]],
    });
    this.formName = this.myForm.get('name');
    this.formPhone = this.myForm.get('phone');
    this.formContent = this.myForm.get('content');
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
      this.fileDate.append('file', fileList[i]);
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
    if (this.myForm.valid) {
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
          this.fileDate.append('type', '我要办事');
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

  // 省市联动
  public cityClick() {
    this.cityShow = true;
    this.countyShow = false;
    this.communityShow = false;
    this.citySure = true;
    this.http.get('/assets/data/citys.json').subscribe(
      (res) => {
        this.citys = res;
      }
    );
  }
  public countyClick() {
    this.cityShow = false;
    this.countyShow = true;
    this.communityShow = false;
    this.countySure = true;
    this.http.get('/assets/data/countys.json').subscribe(
      (res) => {
        this.countys = res[0].children;
      }
    );
  }
  public communityClick() {
    this.cityShow = false;
    this.countyShow = false;
    this.communityShow = true;
    this.communitySure = true;
    this.http.get('/assets/data/communitys.json').subscribe(
      (res) => {
        this.communitys = res[0].children;
      }
    );
  }

  public cityDataClick(eventData) {
    this.cityDate = eventData;
    this.cityShow = false;
  }
  public countyDataClick(eventData) {
    this.countyDate = eventData;
    this.countyShow = false;
  }
  public communityDataClick(eventData) {
    this.communityDate = eventData;
    this.communityShow = false;
  }
  public housePurchase() {
  this.housePurchaseSure = true;
  this.houseRentingSure = false;
  }
  public houseRenting() {
    this.housePurchaseSure = false;
    this.houseRentingSure = true;
  }
  public formShowFun() {
    if (this.citySure && this.countySure && this.communitySure) {
      if (this.housePurchaseSure || this.houseRentingSure) {
        this.formShow = true;
      } else {
        window.alert('请选择具体办理事项');
      }
    } else {
      window.alert('请选这区域');
    }
  }
}
