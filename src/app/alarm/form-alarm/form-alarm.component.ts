import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/login.service';
import {mobileValidators} from '../../validator/Validators';
declare let BMap;
@Component({
  selector: 'app-form-alarm',
  templateUrl: './form-alarm.component.html',
  styleUrls: ['./form-alarm.component.css']
})
export class FormAlarmComponent implements OnInit {
  public title: string;
  public myForm: FormGroup;
  public fileDate: FormData = new FormData();
  public locationTxt: string;
  public locationState = false;
  public submitState = true;
  public formName: any;
  public formPhone: any;
  public formContent: any;

  @ViewChild('baidumap') mapElement: ElementRef;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.locationTxt = '定位中......';
    this.title = this.routerInfo.snapshot.queryParams['name'];
    this.titleService.setTitle(this.title);
    this.ionViewWillEnter();
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, mobileValidators]],
      content: ['', [Validators.required]],
    });
    this.formName = this.myForm.get('name');
    this.formPhone = this.myForm.get('phone');
    this.formContent = this.myForm.get('content');
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
        that.locationTxt = rs.address;
        that.locationState = true;
      });
    }, {enableHighAccuracy: true});
  }

  /**************************************************/
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
        p.width = 50;
        p.style.marginLeft = '15px';
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
          this.fileDate.append('content', this.myForm.value.content);
          this.fileDate.append('type', '报警平台');
          this.loginService.addRecord(this.fileDate).subscribe((data) => {
            if (data.success) {
              window.alert(data.msg);
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
    }
  }

}