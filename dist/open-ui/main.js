(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jawed\Desktop\asessment\open-ui-1\open-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "6Qy4":
/*!****************************************!*\
  !*** ./src/app/app/ui/ui.component.ts ***!
  \****************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "yGXc");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/content.component */ "uYZ2");




const _c0 = ["containerRef"];
class UiComponent {
    constructor(commonService) {
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    scrolling($event) {
        var _a, _b;
        console.log(((_a = this.containerRef) === null || _a === void 0 ? void 0 : _a.nativeElement.getBoundingClientRect().top) < 0);
        ((_b = this.containerRef) === null || _b === void 0 ? void 0 : _b.nativeElement.getBoundingClientRect().top) < 0 ? this.commonService.setHeaderSticky(true) :
            this.commonService.setHeaderSticky(false);
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"])); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], viewQuery: function UiComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    } }, hostBindings: function UiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function UiComponent_scroll_HostBindingHandler($event) { return ctx.scrolling($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 4, vars: 0, consts: [[1, "container"], ["containerRef", ""]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/ui/ui.component */ "6Qy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'open-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_app_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__["UiComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YBvq":
/*!*******************************************************!*\
  !*** ./src/app/app/ui/content/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { cardDetails: "cardDetails" }, decls: 8, vars: 3, consts: [[1, "card"], [1, "card-body"], [1, "card-image-container"], [3, "src"], [1, "card-heading"], [1, "card-desc"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardDetails.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardDetails.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardDetails.description, " ");
    } }, styles: [".card[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    background:#F9F9F9;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    \r\n    \r\n    padding:20px;\r\n    border-radius:12px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    background:#A68EC8;\r\n    cursor: pointer;\r\n}\r\n.card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n    color:#fff !important;\r\n}\r\n.card-image-container[_ngcontent-%COMP%]{\r\n    width:90px;\r\n    height:90px;\r\n}\r\n.card-image-container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    width:inherit;\r\n}\r\n.card-heading[_ngcontent-%COMP%]{\r\n    font-family: Montserrat;\r\n    font-weight:500;\r\n    font-size:15px;\r\n    padding:10px 0;\r\n}\r\n.card-desc[_ngcontent-%COMP%]{\r\n    font-family:Montserrat;\r\n    font-weight:400;\r\n    font-size:12px;\r\n    color:#999999;\r\n    padding-bottom:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QywwRkFBMEY7SUFDMUYsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC9hc3NldHMvaW1hZ2VzL3JlY3QtYmcuc3ZnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7ICAqL1xyXG4gICAgLyogd2lkdGg6NDUlOyAqL1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMnB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDojQTY4RUM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkOmhvdmVyIC5jYXJkLWJvZHkgPiAqe1xyXG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWltYWdlLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjkwcHg7XHJcbiAgICBoZWlnaHQ6OTBweDtcclxufVxyXG4uY2FyZC1pbWFnZS1jb250YWluZXI+IGltZ3tcclxuICAgIHdpZHRoOmluaGVyaXQ7XHJcbn1cclxuLmNhcmQtaGVhZGluZ3tcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBwYWRkaW5nOjEwcHggMDtcclxufVxyXG4uY2FyZC1kZXNje1xyXG4gICAgZm9udC1mYW1pbHk6TW9udHNlcnJhdDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_ui_ui_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/ui/ui.component */ "6Qy4");
/* harmony import */ var _app_ui_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/ui/header/header.component */ "yGXc");
/* harmony import */ var _app_ui_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/ui/content/content.component */ "uYZ2");
/* harmony import */ var _app_ui_content_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ui/content/calculator/calculator.component */ "uUx4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_ui_content_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/ui/content/card/card.component */ "YBvq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_8__["SliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _app_ui_ui_component__WEBPACK_IMPORTED_MODULE_3__["UiComponent"],
        _app_ui_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _app_ui_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
        _app_ui_content_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"],
        _app_ui_content_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_8__["SliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_11__["InputSwitchModule"]] }); })();


/***/ }),

/***/ "aCBZ":
/*!****************************************************!*\
  !*** ./src/app/services/common-service.service.ts ***!
  \****************************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonServiceService {
    constructor() {
        this.cardList = [
            {
                heading: 'Quick cash disbursement',
                description: 'Get term loans that your business needs in 72 hours',
                image: '/assets/images/money.png'
            },
            {
                heading: 'Low-interest rate',
                description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
                image: '/assets/images/low-interest.png'
            },
            {
                heading: 'Zero paperwork',
                description: 'Get started instantly by submitting only your basic details and bank statements',
                image: '/assets/images/paperwork.png'
            },
            {
                heading: 'Ace your business finances',
                description: 'Manage business accounting and everything in between on one platform',
                image: '/assets/images/app.png'
            },
            {
                heading: 'Loans to fight COVID-19',
                description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
                image: '/assets/images/covid.png'
            }
        ];
        this.isHeaderSticky$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    getCardsList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.cardList);
    }
    setHeaderSticky(value) {
        this.isHeaderSticky$.next(value);
    }
    getStickyHeaderFlag() {
        return this.isHeaderSticky$.asObservable();
    }
}
CommonServiceService.ɵfac = function CommonServiceService_Factory(t) { return new (t || CommonServiceService)(); };
CommonServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonServiceService, factory: CommonServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uUx4":
/*!*******************************************************************!*\
  !*** ./src/app/app/ui/content/calculator/calculator.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputswitch */ "rLzU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");







function CalculatorComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EMI of existing loan(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_div_31_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.emi = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.emi);
} }
class CalculatorComponent {
    constructor() {
        this.monIncome = 0;
        this.monExpense = 0;
        this.tenure = [];
        this.selectedTenure = '';
        this.checked = true;
        this.emi = 0;
    }
    ngOnInit() {
        this.tenure = [
            { label: '3 Months', value: '3' },
            { label: '6 Months', value: '6' },
            { label: '9 Months', value: '9' },
            { label: '12 Months', value: '12' }
        ];
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(); };
CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["app-calculator"]], decls: 46, vars: 22, consts: [[1, "cards-container"], [1, "card-wrapper"], [1, "card", "calculator-card"], [1, "card-header"], [1, "card-body"], [1, "form-group"], [1, "form-label"], [1, "slider-wrapper"], [1, "slider-value"], [3, "ngModel", "min", "step", "max", "ngModelChange"], ["optionLabel", "label", 3, "options", "ngModel", "ngModelChange"], [1, "form-group", "row-layout"], [3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "card", "calculated-card"], [1, "calc-card-body"], [1, "info-section"], [1, "label", "info-label"], [1, "info-amount"], [1, "info-section", "emi"], ["type", "button", 1, "call-to-action"], ["type", "text", "pInputText", "", 1, "emi-input", 3, "ngModel", "ngModelChange"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Eligibility Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Monthly Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_p_slider_ngModelChange_13_listener($event) { return ctx.monIncome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Monthly Expanse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_p_slider_ngModelChange_21_listener($event) { return ctx.monExpense = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Monthly Expanse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p-dropdown", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_p_dropdown_ngModelChange_26_listener($event) { return ctx.selectedTenure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Do you have any existing loans?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p-inputSwitch", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_p_inputSwitch_ngModelChange_30_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CalculatorComponent_div_31_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Loan Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1,00,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Your EMI will be");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "15,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "GET MONEY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 14, ctx.monIncome, "INR", true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.monIncome)("min", 100000)("step", 10000)("max", 300000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](20, 18, ctx.monExpense, "INR", true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.monExpense)("min", 10000)("step", 1000)("max", 100000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.tenure)("ngModel", ctx.selectedTenure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checked);
    } }, directives: [primeng_slider__WEBPACK_IMPORTED_MODULE_1__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_4__["InputSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".cards-container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding-top: 250px;\r\n    justify-content: center;\r\n    \r\n}\r\n.card-wrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    background-position-y: bottom;\r\n    padding-bottom: 50px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    display: flex;\r\n    flex-flow: column;\r\n    box-shadow: 0px 0px 20px #00000033;\r\n    border-radius:16px;\r\n    box-sizing: border-box;\r\n}\r\n.calculator-card[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    height: auto;\r\n    padding-bottom: 30px;\r\n}\r\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background: #FAFBFD;\r\n    border-radius: 12px 12px 0 0;\r\n    padding: 16px;\r\n    box-sizing: border-box;\r\n    font-size: 16px;\r\n    font-family: 'Open Sans';\r\n    text-align: center;\r\n    font-weight: 500;\r\n}\r\n.card-body[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    box-sizing: border-box;\r\n    background: #fff;\r\n    display:flex;\r\n    flex-flow: column;\r\n    padding: 20px 35px;\r\n}\r\n.card-body[_ngcontent-%COMP%]    > .form-group[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-flow: column;\r\n    padding:8px 0;\r\n}\r\n.card-body[_ngcontent-%COMP%]    > .form-group[_ngcontent-%COMP%]    > .form-label[_ngcontent-%COMP%]{\r\n    \r\n    font-family: 'Montserrat';\r\n    font-size: 12px;\r\n    font-weight:500;\r\n}\r\n.calculated-card[_ngcontent-%COMP%]{\r\n    \r\n    height: 300px;\r\n    align-self: center;\r\n    margin-left: 10px;\r\n    border-radius: 0 16px 16px 0;\r\n    background: #6B389D;\r\n    \r\n}\r\n.calc-card-body[_ngcontent-%COMP%]{\r\n    padding:50px 25px;\r\n}\r\n.info-label[_ngcontent-%COMP%]{\r\n    font-size:12px;\r\n    \r\n    font-family: 'Montserrat', sans-serif;\r\n    color:#fff;\r\n    opacity:0.8;\r\n}\r\n.info-amount[_ngcontent-%COMP%]{\r\n    font-size:24px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin:0 0;\r\n    color:#fff;\r\n}\r\n.calc-card-body[_ngcontent-%COMP%]   .emi[_ngcontent-%COMP%]{\r\n    padding-top:25px;\r\n}\r\n.call-to-action[_ngcontent-%COMP%]{\r\n    box-shadow: 0px 0px 20px #00000033;\r\n    border: 2px solid #fff;\r\n    border-radius: 24px;\r\n    opacity: 1;\r\n    color:#663399;\r\n    padding: 8px 16px;\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n    font-weight:600;\r\n}\r\n.call-to-action[_ngcontent-%COMP%]:hover{\r\n    color: #fff;\r\n    cursor: pointer;\r\n    background: #492672;\r\n    opacity: 0.9;\r\n    border: 2px solid #663399;\r\n    box-shadow: 0px 0px 5px #333;\r\n}\r\n.slider-wrapper[_ngcontent-%COMP%]{\r\n    padding:5px 0;\r\n}\r\n.slider-value[_ngcontent-%COMP%],   .p-inputtext{\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n    font-family: 'Montserrat';\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n  .p-dropdown{\r\n    border: 0;\r\n    border-radius: 0;\r\n    border-bottom: 2px solid #ccc;\r\n    width: 100%;\r\n}\r\n  .p-dropdown-open,   .p-focus{\r\n    box-shadow: none !important;\r\n}\r\n  .p-dropdown-label{\r\n    padding: 5px;\r\n    padding-top: 0;\r\n}\r\n.row-layout[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: row !important;\r\n    justify-content: space-between;\r\n}\r\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {\r\n    background:purple;\r\n}\r\n  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {\r\n    background: #ffffff;\r\n    border: 2px solid purple;\r\n}\r\n  .p-inputswitch{\r\n    width: 1.5rem;\r\n    height: 1rem;\r\n}\r\n  .p-inputswitch .p-inputswitch-slider:before{\r\n    width: 1rem;\r\n    height: 1rem;\r\n    left: -0.7rem;\r\n    top:60%;\r\n    border: 2px solid #ccc;\r\n}\r\n.emi-input[_ngcontent-%COMP%]{\r\n    border:none;\r\n    border-bottom: 2px solid #ccc;\r\n    border-radius: 0;\r\n    width:100%;\r\n}\r\n.emi-input[_ngcontent-%COMP%]:hover, .emi-input[_ngcontent-%COMP%]:focus{\r\n    border:none;\r\n    border-bottom: 2px solid #ccc;\r\n    box-shadow: none;\r\n}\r\n  .p-slider-handle{\r\n    box-shadow: 0 0 3px 1px #ccc !important;\r\n    border: 5px solid #fff !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlGQUF5RjtJQUN6Riw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixtRkFBbUY7QUFDdkY7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxpQ0FBaUM7QUFDckMiLCJmaWxlIjoiY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5jYXJkLXdyYXBwZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKGltYWdlcy9hY2NvdW50aW5nX2RvdHMuc3ZnKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjMDAwMDAwMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOjE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jYWxjdWxhdG9yLWNhcmR7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGQUZCRkQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHggMzVweDtcclxufVxyXG4uY2FyZC1ib2R5ID4gLmZvcm0tZ3JvdXB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6OHB4IDA7XHJcbn1cclxuLmNhcmQtYm9keSA+IC5mb3JtLWdyb3VwID4gLmZvcm0tbGFiZWx7XHJcbiAgICAvKiBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7ICovXHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcbi5jYWxjdWxhdGVkLWNhcmR7XHJcbiAgICAvKiB3aWR0aDogMjAlOyAqL1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNnB4IDE2cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICM2QjM4OUQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoaW1hZ2VzL3NvdWwtd2F2ZS5wbmcpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsgKi9cclxufVxyXG4uY2FsYy1jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOjUwcHggMjVweDtcclxufVxyXG5cclxuLmluZm8tbGFiZWx7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIC8qIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBvcGFjaXR5OjAuODtcclxufVxyXG4uaW5mby1hbW91bnR7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjowIDA7XHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5jYWxjLWNhcmQtYm9keSAuZW1pe1xyXG4gICAgcGFkZGluZy10b3A6MjVweDtcclxufVxyXG4uY2FsbC10by1hY3Rpb257XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzAwMDAwMDMzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6IzY2MzM5OTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxufVxyXG4uY2FsbC10by1hY3Rpb246aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICM0OTI2NzI7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjYzMzk5O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzMzMztcclxufVxyXG4uc2xpZGVyLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOjVweCAwO1xyXG59XHJcbi5zbGlkZXItdmFsdWUgLCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG46Om5nLWRlZXAgLnAtZHJvcGRvd257XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLnAtZHJvcGRvd24tb3BlbiwgOjpuZy1kZWVwIC5wLWZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAucC1kcm9wZG93bi1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5yb3ctbGF5b3V0e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbjo6bmctZGVlcCAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQgLnAtaW5wdXRzd2l0Y2gtc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQ6cHVycGxlO1xyXG59XHJcbjo6bmctZGVlcCAucC1pbnB1dHN3aXRjaC5wLWlucHV0c3dpdGNoLWNoZWNrZWQgLnAtaW5wdXRzd2l0Y2gtc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xyXG59XHJcbjo6bmctZGVlcCAucC1pbnB1dHN3aXRjaHtcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuOjpuZy1kZWVwIC5wLWlucHV0c3dpdGNoIC5wLWlucHV0c3dpdGNoLXNsaWRlcjpiZWZvcmV7XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIGxlZnQ6IC0wLjdyZW07XHJcbiAgICB0b3A6NjAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxufVxyXG4uZW1pLWlucHV0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi5lbWktaW5wdXQ6aG92ZXIsIC5lbWktaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG46Om5nLWRlZXAgLnAtc2xpZGVyLWhhbmRsZXtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICNjY2MgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "uYZ2":
/*!*****************************************************!*\
  !*** ./src/app/app/ui/content/content.component.ts ***!
  \*****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator/calculator.component */ "uUx4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ "YBvq");





function ContentComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardDetails", card_r1);
} }
class ContentComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.listOfCards = [];
    }
    ngOnInit() {
        this.commonService.getCardsList().subscribe((data) => {
            this.listOfCards = [...data];
        });
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 31, vars: 1, consts: [[1, "home"], [1, "showcase"], [1, "left-column"], [1, "showcase-text"], [1, "heading"], [1, "showcase-img-container"], ["src", "/assets/images/collect_img-video.png", "alt", "open-image", "title", "open image", 1, "banner"], [1, "right-column"], [1, "card-section"], [1, "container", "featured-cards"], [1, "card-items"], [4, "ngFor", "ngForOf"], [1, "cta-panel"], [1, "cta-body"], [1, "desc"], [1, "cta-btn-wrapper"], ["type", "button", 1, "cta-btn"], [1, "card-item"], [3, "cardDetails"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We make it Super");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContentComponent_ng_container_16_Template, 3, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Boost you business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "with Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get your hands on a term loan that\u2019s crafted for your business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Get an Open Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfCards);
    } }, directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_2__["CalculatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".home[_ngcontent-%COMP%]{\r\n    margin-top: -150px;\r\n}\r\n.showcase[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    justify-content:flex-end;\r\n    position: relative;\r\n    overflow-x: clip;\r\n    background: transparent url(/assets/images/accounting_dots.svg) 0% 0% no-repeat padding-box;\r\n    background-position-y: bottom;\r\n    background-position-x: right;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.left-column[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    \r\n    height: 800px;\r\n    background: transparent url(/assets/images/blob-small.svg) 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    background-position-x: left;\r\n    background-position-y: center;\r\n    background-size: 400px;\r\n    position: absolute;\r\n    left: -100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding-left: 100px;\r\n}\r\n.showcase-text[_ngcontent-%COMP%]{\r\n    align-self: flex-start;\r\n    margin-left: 0;\r\n    padding: 150px 0 40px 155px;\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    text-align: left;\r\n    font-weight: 600;\r\n    margin: 2px 0;\r\n    color:#222222;\r\n}\r\n.showcase-text[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%]{\r\n    height: 4px;\r\n    background: #000000;\r\n    width: 60%;\r\n    float: left;\r\n}\r\n.showcase-img-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    background: transparent url(/assets/images/accounting_dots.svg) 0% 0% no-repeat padding-box;\r\n    padding-left: 100px;\r\n    background-position-y: bottom;\r\n    background-position-x: right;\r\n    height: 315px;\r\n}\r\n.banner[_ngcontent-%COMP%]{\r\n    width:500px;\r\n}\r\n\r\n.right-column[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    background: transparent url(/assets/images/circle.svg) 0% 0% no-repeat padding-box;\r\n    height: 700px;\r\n    background-size: 900px;\r\n    background-position-x: left;\r\n    background-position-y: bottom;\r\n    \r\n}\r\n.featured-cards[_ngcontent-%COMP%]{\r\n    background: transparent url(/assets/images/sol_wave_bg.svg) 0% 0% no-repeat padding-box; \r\n    height:850px;\r\n    display:flex;\r\n    margin-top:100px;\r\n    background-size: cover;\r\n}\r\n.card-items[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    padding: 50px 100px;\r\n    width:60%;\r\n    padding-top:0;\r\n}\r\n.card-item[_ngcontent-%COMP%]{\r\n    width:45%;\r\n    margin:15px 0;\r\n}\r\n.card-item[_ngcontent-%COMP%]:nth-child(4){\r\n    margin-top:100px;\r\n}\r\n.cta-panel[_ngcontent-%COMP%]{\r\n    width:40%;\r\n    padding-top:200px;\r\n}\r\n.cta-body[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.cta-body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%]{\r\n    width:15%;\r\n    margin-top:25px;\r\n    height: 4px;\r\n    background: #000000;\r\n    float: left;\r\n}\r\n.desc[_ngcontent-%COMP%]{\r\n    font-family: Montserrat;\r\n    font-weight:400;\r\n    font-size:18px;\r\n    color:#999999;\r\n    width:60%;\r\n}\r\n.cta-btn-wrapper[_ngcontent-%COMP%]{\r\n    padding-top:50px;\r\n}\r\n.cta-btn[_ngcontent-%COMP%]{\r\n    border: 2px solid #663399;\r\n    border-radius:24px;\r\n    padding:8px 16px;\r\n    color:#663399;\r\n    cursor:pointer;\r\n    font-family: Montserrat;\r\n    font-weight:400;\r\n    background:transparent;\r\n}\r\n.cta-btn[_ngcontent-%COMP%]:hover{\r\n    color:#fff;\r\n    cursor:pointer;\r\n    background:#6B389D;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJGQUEyRjtJQUMzRiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4QjtBQUNBOzs7Ozs7R0FNRztBQUNIO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0ZBQXNGO0lBQ3RGLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyRkFBMkY7SUFDM0YsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7Ozs7O0dBS0c7QUFDSDtJQUNJLFVBQVU7SUFDVixrRkFBa0Y7SUFDbEYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHdEQUF3RDtBQUM1RDtBQUNBO0lBQ0ksdUZBQXVGO0lBQ3ZGLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21le1xyXG4gICAgbWFyZ2luLXRvcDogLTE1MHB4O1xyXG59XHJcbi5zaG93Y2FzZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXg6IGNsaXA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWFnZXMvYWNjb3VudGluZ19kb3RzLnN2ZykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBib3R0b207XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuLyogLmxlZnQtY29sdW1ue1xyXG4gICAgd2lkdGg6NDAlO1xyXG4gICAgd2lkdGg6IDU3MXB4O1xyXG4gICAgaGVpZ2h0OiA1NzJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgnaW1hZ2VzL2Jsb2Itc21hbGwuc3ZnJykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxufSAqL1xyXG4ubGVmdC1jb2x1bW57XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgLyogd2lkdGg6IDU3MXB4OyAqL1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvYXNzZXRzL2ltYWdlcy9ibG9iLXNtYWxsLnN2ZykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxufVxyXG4uc2hvd2Nhc2UtdGV4dHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDE1MHB4IDAgNDBweCAxNTVweDtcclxufVxyXG4uaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICBjb2xvcjojMjIyMjIyO1xyXG59XHJcbi5zaG93Y2FzZS10ZXh0ID4gaHJ7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNob3djYXNlLWltZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWFnZXMvYWNjb3VudGluZ19kb3RzLnN2ZykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgIGhlaWdodDogMzE1cHg7XHJcbn1cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOjUwMHB4O1xyXG59XHJcbi8qIC5yaWdodC1jb2x1bW4gPiBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTY0cHg7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC03MHB4XHJcbn0gKi9cclxuLnJpZ2h0LWNvbHVtbntcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL2Fzc2V0cy9pbWFnZXMvY2lyY2xlLnN2ZykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGJvdHRvbTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoaW1hZ2VzL2FjY291bnRpbmdfZG90cy5zdmcpOyAqL1xyXG59XHJcbi5mZWF0dXJlZC1jYXJkc3tcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvYXNzZXRzL2ltYWdlcy9zb2xfd2F2ZV9iZy5zdmcpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsgXHJcbiAgICBoZWlnaHQ6ODUwcHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY2FyZC1pdGVtc3tcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgcGFkZGluZy10b3A6MDtcclxufVxyXG4uY2FyZC1pdGVte1xyXG4gICAgd2lkdGg6NDUlO1xyXG4gICAgbWFyZ2luOjE1cHggMDtcclxufVxyXG4uY2FyZC1pdGVtOm50aC1jaGlsZCg0KXtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuLmN0YS1wYW5lbHtcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIHBhZGRpbmctdG9wOjIwMHB4O1xyXG59XHJcbi5jdGEtYm9keXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5jdGEtYm9keSA+IGRpdiA+IGhye1xyXG4gICAgd2lkdGg6MTUlO1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmRlc2N7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICAgIHdpZHRoOjYwJTtcclxufVxyXG4uY3RhLWJ0bi13cmFwcGVye1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG4uY3RhLWJ0bntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjMzOTk7XHJcbiAgICBib3JkZXItcmFkaXVzOjI0cHg7XHJcbiAgICBwYWRkaW5nOjhweCAxNnB4O1xyXG4gICAgY29sb3I6IzY2MzM5OTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbi5jdGEtYnRuOmhvdmVye1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDojNkIzODlEO1xyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yGXc":
/*!***************************************************!*\
  !*** ./src/app/app/ui/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common-service.service */ "aCBZ");


const _c0 = ["nav"];
class HeaderComponent {
    constructor(cs) {
        this.cs = cs;
    }
    ngOnInit() {
        this.cs.getStickyHeaderFlag().subscribe((data) => {
            var _a, _b;
            if (data)
                (_a = this.nav) === null || _a === void 0 ? void 0 : _a.nativeElement.classList.add('sticky-header');
            else
                (_b = this.nav) === null || _b === void 0 ? void 0 : _b.nativeElement.classList.remove('sticky-header');
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
    } }, decls: 23, vars: 0, consts: [[1, "nav-container"], [1, "navbar"], ["nav", ""], [1, "logo-wrapper"], [1, "navbar-brand"], ["src", "/assets/images/logo.png", "alt", "open-logo", "title", "Open Financial", 1, "logo"], [1, "nav-list"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link"], [1, "nav-btns"], ["type", "button", 1, "nav-btn"], ["type", "button", 1, "nav-btn", "get-started"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n    margin:0;\r\n}\r\n.nav-container[_ngcontent-%COMP%]{\r\n    z-index:1;\r\n    position: sticky;\r\n    top:0;\r\n}\r\n.sticky-header[_ngcontent-%COMP%]{\r\n    background:#fff;\r\n    height:75px !important;\r\n    box-shadow: 0px 0px 20px #00000033;\r\n}\r\n.sticky-header[_ngcontent-%COMP%]    > .logo-wrapper[_ngcontent-%COMP%]    > .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\r\n    height:75px !important;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    height:100px;\r\n    align-items:center;\r\n    padding-left:120px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{\r\n    flex:1;\r\n}\r\n.navbar[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{\r\n    flex:2;\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    padding-right: 50px;\r\n}\r\n.nav-item[_ngcontent-%COMP%]{\r\n    font-family: 'Open Sans', sans-serif; \r\n    font-size: 20px;\r\n    margin: 0 15px;\r\n\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover{\r\n    color:#6B389D;\r\n    cursor:pointer;\r\n}\r\n.nav-btn[_ngcontent-%COMP%]{\r\n    width: 118px;\r\n    border: 2px solid #663399;\r\n    border-radius: 24px;\r\n    opacity: 1;\r\n    font-family: 'Open Sans', sans-serif; \r\n    font-size:15px;\r\n    height:40px;\r\n    margin:0 5px;\r\n}\r\n.nav-btn[_ngcontent-%COMP%]:hover{\r\n    color:#fff;\r\n    cursor:pointer;\r\n    background:#6B389D;\r\n}\r\n.get-started[_ngcontent-%COMP%]{\r\n    width: 166px;\r\n    background: transparent linear-gradient(90deg, #9F62C9 0%, #663399 100%) 0% 0% no-repeat padding-box;\r\n    border-radius: 24px;\r\n    opacity: 1;\r\n    font-family: 'Open Sans', sans-serif; \r\n    color:#fff;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    height:95px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSSxTQUFTO0lBRVQsZ0JBQWdCO0lBQ2hCLEtBQUs7QUFDVDtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxNQUFNO0FBQ1Y7QUFDQTtJQUNJLE1BQU07QUFDVjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9HQUFvRztJQUNwRyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4ubmF2LWNvbnRhaW5lcntcclxuICAgIHotaW5kZXg6MTtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6MDtcclxufVxyXG4uc3RpY2t5LWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIGhlaWdodDo3NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggIzAwMDAwMDMzO1xyXG59XHJcbi5zdGlja3ktaGVhZGVyID4gLmxvZ28td3JhcHBlciA+IC5uYXZiYXItYnJhbmQgPiBpbWd7XHJcbiAgICBoZWlnaHQ6NzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTIwcHg7XHJcbn1cclxuLm5hdmJhciAubG9nby13cmFwcGVye1xyXG4gICAgZmxleDoxO1xyXG59XHJcbi5uYXZiYXIgLm5hdi1saXN0e1xyXG4gICAgZmxleDoyO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubmF2LWl0ZW17XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG59XHJcbi5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiM2QjM4OUQ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4ubmF2LWJ0bntcclxuICAgIHdpZHRoOiAxMThweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjMzOTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgbWFyZ2luOjAgNXB4O1xyXG59XHJcbi5uYXYtYnRuOmhvdmVye1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDojNkIzODlEO1xyXG59XHJcbi5nZXQtc3RhcnRlZHtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzlGNjJDOSAwJSwgIzY2MzM5OSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgXHJcbiAgICBjb2xvcjojZmZmO1xyXG59XHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0Ojk1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map