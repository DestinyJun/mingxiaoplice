import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/login.service';
declare let BMap;
@Component({
  selector: 'app-form-alarm',
  templateUrl: './form-alarm.component.html',
  styleUrls: ['./form-alarm.component.css']
})
export class FormAlarmComponent implements OnInit {
  public title: string;
  public myForm: FormGroup;
  // public myFormTwo: FormGroup;
  public fileDate: FormData = new FormData();
  public locationTxt: string;
  public locationState = false;

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
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
    /*this.myFormTwo = new FormGroup({
      first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    });*/
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
    /*geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() === 0) {
        console.log(r.point);
        // var pt = new BMap.Point(r.point.lng,r.point.lat);
        // console.log(pt);
        let mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        // map.panTo(pt);
        let geoc = new BMap.Geocoder();
        // 创建一个地理位置解析器  解析格式：城市，区县，街道
        geoc.getLocation(r.point, function (rs) {
          // console.log(rs);
          let locationText = rs.address;
          alert('您的位置：' + rs.address);
        });

      } else {
        console.log('请打开GPS' + this.getStatus());
      }
    }, {enableHighAccuracy: true});*/
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
    if (this.myForm.valid && this.locationState) {
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
      alert('参数不合法或者定位失败');
    }
  }

}
