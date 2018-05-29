import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../shared/login.service';
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

@Component({
  selector: 'app-from-workflow',
  templateUrl: './from-workflow.component.html',
  styleUrls: ['./from-workflow.component.css']
})
export class FromWorkflowComponent implements OnInit {
  public locations: BGeolocationControl;
  public opts: MapOptions;
  public markers: Array<{ point: Point; options?: MarkerOptions }>;
  public controlOpts: NavigationControlOptions;
  public overviewmapOpts: OverviewMapControlOptions;
  public scaleOpts: ScaleControlOptions;
  public mapTypeOpts: MapTypeControlOptions;
  public geolocationOpts: GeolocationControlOptions;
  /**************************************************/
  public title: string;
  public text: any;
  public myForm: FormGroup;
  public myFormTwo: FormGroup;
  public fileDate: FormData = new FormData();
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private routerInfo: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.title = this.routerInfo.snapshot.queryParams['name'];
    this.text = this.routerInfo.snapshot.queryParams['txt'];
    this.titleService.setTitle(this.title);
    this.myForm = this.fb.group({
      title: [{value: '贵阳', disabled: false}, [Validators.required]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
    this.myFormTwo = new FormGroup({
      first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    });
    this.opts = {
      centerAndZoom: {     // 设置中心点和缩放级别
        lng: 106.667287,   // 经度
        lat: 26.660238,    // 纬度
        zoom: 15           // 缩放级别
      },
      minZoom: 3,  // 最小缩放级别的地图
      maxZoom: 19, // 最大缩放级别的地图
      enableHighResolution: true,  // 是否用高分辨率的地图，default：true
      enableAutoResize: true,  // 是否可以自动调整大小，default：true
      enableMapClick: true,  // 地图是否可以点击，default：true
      disableDragging: false, // 是否禁用地图拖动功能
      enableScrollWheelZoom: true, // 是否启用滚轮进行缩放功能
      disableDoubleClickZoom: false, // 是否禁用双击缩放功能
      enableKeyboard: true,  // 是否启用键盘移动地图功能
      enableInertialDragging: false,     // 是否启用惯性阻力函数
      enableContinuousZoom: true,  // 是否启用连续缩放功能
      disablePinchToZoom: false,   // 是否禁用缩放功能的缩放
      cursor: '',         // 设置默认的光标样式,应该遵循CSS规范
      draggingCursor: '', // 设置默认的拖动光标样式，应该遵循CSS规范
      currentCity: '贵阳市',   // 设置当前的城市
    };
   // 这是地图标记marker
    /*this.markers = [
      {
        options: {
          icon: {
            imageUrl: '/assets/1.jpg',
            size: {
              height: 60,
              width: 50
            }
          },
          title: 'asdkjgaslfkjasd'
        },
        point: {
          lng: 120.62,   // 经度
          lat: 31.32,    // 纬度
        }
      },
      {
        point: {
          lng: 120.63,   // 经度
          lat: 31.32,    // 纬度
        }
      },
      {
        point: {
          lng: 120.63,   // 经度
          lat: 31.31,    // 纬度
        }
      }
    ];*/

    // 导航控件
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,      // 显示的控件的位置
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE,   // 用来描述它是什么样的导航
      offset: {                                        // 控件的大小
        width: 30,
        height: 30
      },
      showZoomInfo: true,                             // 是否展示当前的信息
      enableGeolocation: true                         // 是否启用地理定位功能
    };

    // 地图全景控件
    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,  // 显示的控件的位置
      isOpen: true                                    // whf 。。官网里没有说明？？
    };

    // 比例尺控件
    this.scaleOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
    };

    // 地图类型控件
    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
    };

    // Geolocation 和Panorama 没有属性

    // location
    // console.log(this.locations.getAddressComponent());

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
      console.log(this.fileDate.get('file'));
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
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.fileDate.append('title', this.myForm.value.title);
      this.fileDate.append('name', this.myForm.value.name);
      this.fileDate.append('phone', this.myForm.value.phone);
      this.fileDate.append('content', this.myForm.value.content);
      this.fileDate.append('type', this.title);
      this.loginService.addRecord( this.fileDate).subscribe((data) => {
        console.log(data);
      });
    }
  }

  /************************百度地图***************************/
  public loadMap(map: any) {
    console.log('map instance here', map);
  }
  public clickMarker(marker: any) {
    console.log('The clicked marker is', marker);
  }
  public clickmap(e: any) {
    console.log(e);
  }
  public controlLoaded(control: BNavigationControl): void {
    // console.log('control loaded', control);
  }
  public localtionLoaded(locals): void {
    console.log('gagagag', locals.C.BC);
    this.markers =
      [
        {
          point: locals.C.BC
        }
      ];
  }
}
