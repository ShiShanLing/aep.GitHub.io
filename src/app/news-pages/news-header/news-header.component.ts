import {Component} from '@angular/core';
import {GetDataService, HeadDataEnum} from "../../service/get-data.service";
import {basename} from "@angular/compiler-cli";

interface MenuObjc {
    nzDropdownMenu:string;
    item:string[];
    enumValue:HeadDataEnum;
}

@Component({
    selector: 'app-news-header',
    templateUrl: './news-header.component.html',
    styleUrls: ['./news-header.component.scss']
})
export class NewsHeaderComponent {

    constructor(private service: GetDataService) {
        console.log("NewsHeaderComponent---", service);
        this.getDataMenu();
    }

    menuObjcs:MenuObjc[] = [
        {
            nzDropdownMenu:'headApplication',
            item:[],
            enumValue:HeadDataEnum.Application,
        },
        {
            nzDropdownMenu:'headOpenClass',
            item:[],
            enumValue:HeadDataEnum.OpenClass,
        },
        {
            nzDropdownMenu:'headShoppingMall',
            item:[],
            enumValue:HeadDataEnum.ShoppingMall,
        },
        {
            nzDropdownMenu:'headAccount',
            item:[],
            enumValue:HeadDataEnum.Account,
        },
        {
            nzDropdownMenu:'headEmail',
            item:[],
            enumValue:HeadDataEnum.Email,
        },
        {
            nzDropdownMenu:'headRegEmail',
            item:[],
            enumValue:HeadDataEnum.RegEmail,
        }
    ]

    applicationData: string[] = [];
    openClassData: string[] = [];
    shoppingMallData: string[] = [];
    accountData: string[] = [];
    emailData: string[] = [];
    regEmailData: string[] = [];

    getDataMenu() {
        this.menuObjcs.forEach((objc)=>{
            this.service.getMenuData(objc.enumValue).subscribe((meuns) => {
                objc.item = meuns;
                console.log("this.menuObjcs", this.menuObjcs);
                switch (objc.enumValue) {
                    case HeadDataEnum.Application:
                        this.applicationData = meuns;
                        break;
                    case HeadDataEnum.OpenClass:
                        this.openClassData = meuns;
                        break;
                    case HeadDataEnum.ShoppingMall:
                        this.shoppingMallData = meuns;
                        break;
                    case HeadDataEnum.Account:
                        this.accountData = meuns;
                        break;
                    case HeadDataEnum.Email:
                        this.emailData = meuns;
                        break;
                    case HeadDataEnum.RegEmail:
                        this.regEmailData = meuns;
                        break;
                }
            });

        })

    }

}
