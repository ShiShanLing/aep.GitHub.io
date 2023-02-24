import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';


export enum HeadDataEnum {
  //应用
  Application,
  //公开课
  OpenClass,
  //商城
  ShoppingMall,
  //资金账户
  Account,
  //邮箱
  Email,
  //注册邮箱
  RegEmail,

}

@Injectable({
  providedIn: 'root'
})


export class GetDataService {
  constructor(private http: HttpClient) { }
  // 获取 Identy 列表
  getIdenty(paramsObj:any) {
    return this.http.get('/uniform-api/content/', {params: paramsObj});
  }

  getMenuData(dataType:HeadDataEnum) :Observable<string[]>{


    let tempList:string[] = [];

    switch (dataType) {
      case HeadDataEnum.Application:
        of(null)
        tempList = ['网易新闻', '网易公开课', '网易高考智愿', '网易红彩', '网易严选', '邮箱大师', '网易云课堂'];
        break;
      case HeadDataEnum.OpenClass:
        tempList = ['TED', '中国大学视频公开课', '国际名校公开课', '赏课·纪录片', '付费精品课程', '北京大学公开课', '英语课程学习'];
        break;
      case HeadDataEnum.ShoppingMall:
        tempList = ['新人特价', '9.9专区', '新品热卖', '人气好物', '居家生活', '服饰鞋包', '母婴亲子'];
        break;
      case HeadDataEnum.Account:
        tempList = ['一卡通充值', '一卡通购买', '我的网易支付', '网易智造', '网易跨境支付'];
        break;
      case HeadDataEnum.Email:
        tempList = ['免费邮箱', 'VIP邮箱', '企业邮箱', '免费注册', '客户端下载'];
        break;
      case HeadDataEnum.RegEmail:
        tempList = ['注册VIP邮箱（特权邮箱，付费）', '免费下载网易官方手机邮箱应用'];
        break;
      default:
        tempList = [];
        break;
    }

    return  of(tempList);

  }
}
