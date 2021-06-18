(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+l/Z":
/*!******************************************************************!*\
  !*** ./src/app/utils/checkbox-group/checkbox-group.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckboxGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupComponent", function() { return CheckboxGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const _c0 = ["*"];
class CheckboxGroupComponent {
    get model() {
        return this._model;
    }
    writeValue(value) {
        this._model = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    set(value) {
        this._model = value;
        this.onChange(this._model);
    }
    addOrRemove(value) {
        if (this.contains(value)) {
            this.remove(value);
        }
        else {
            this.add(value);
        }
    }
    contains(value) {
        if (this._model instanceof Array) {
            return this._model.indexOf(value) > -1;
        }
        else if (!!this._model) {
            return this._model === value;
        }
        return false;
    }
    add(value) {
        if (!this.contains(value)) {
            if (this._model instanceof Array) {
                this._model.push(value);
            }
            else {
                this._model = [value];
            }
            this.onChange(this._model);
        }
    }
    remove(value) {
        const index = this._model.indexOf(value);
        if (!this._model || index < 0) {
            return;
        }
        this._model.splice(index, 1);
        this.onChange(this._model);
    }
}
CheckboxGroupComponent.ɵfac = function CheckboxGroupComponent_Factory(t) { return new (t || CheckboxGroupComponent)(); };
CheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxGroupComponent, selectors: [["checkbox-group"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CheckboxGroupComponent),
                multi: true
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkbox-group',
                template: `<ng-content></ng-content>`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => CheckboxGroupComponent),
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "+zpZ":
/*!**********************************!*\
  !*** ./src/app/utils/globals.ts ***!
  \**********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Globals {
    constructor() {
        this.userType = "";
    }
    setUserInformations(data) {
        localStorage.setItem('userInfo', data);
    }
    getUserInformations() {
        return localStorage.getItem('userInfo');
    }
    setloginstatus(status) {
        localStorage.setItem('isLoggedIn', status.toString());
    }
    getloginstatus() {
        return localStorage.getItem('isLoggedIn');
    }
    setUserType(data) {
        this.userType = data;
    }
}
Globals.ɵfac = function Globals_Factory(t) { return new (t || Globals)(); };
Globals.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Globals, factory: Globals.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Globals, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Balaji\ZeroOne Projects\IAM OnBoard Portal\IAMOnboardingPortal\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globals */ "+zpZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent {
    constructor(comserv, globle, router) {
        this.comserv = comserv;
        this.globle = globle;
        this.router = router;
    }
    ngOnInit() {
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            if (userInfo.userType == "admin") {
                this.router.navigate(['/AdminRequestList']);
            }
            else if (userInfo.userType == "requstor") {
                this.router.navigate(['/UserRequestList']);
            }
        }
        else {
            this.router.navigate(['/Login']);
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: [".bodyview[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5dmlld3tcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _utils_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "25YW":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globals */ "+zpZ");





class AuthGuard {
    constructor(router, auth, globe) {
        this.router = router;
        this.auth = auth;
        this.globe = globe;
    }
    canActivate(next, state) {
        let loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn == "false") {
            this.router.navigate(['/Login']);
            this.auth.signOut();
            return false;
        }
        else {
            let roles = next.data["roles"];
            roles = roles || "";
            this.setNavigation(roles);
        }
        return true;
    }
    setNavigation(roles) {
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            userInfo = JSON.parse(userInfo);
            this.globe.setUserType(userInfo.userType);
        }
        // if(userInfo.userType == "admin"){
        //   if(roles != "CreateQuestioner" && roles != "AdminRequestList"){
        //     this.router.navigate(['/AdminRequestList']);
        //   }
        // }
        // else if(userInfo.userType == "requester"){
        //   if(roles != "QuestionerList" && roles != "UserRequestList"){
        //     this.router.navigate(['/UserRequestList']);
        //   }
        // }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_utils_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _utils_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }]; }, null); })();


/***/ }),

/***/ "7OfP":
/*!**************************************************!*\
  !*** ./src/app/utils/loader/loader.component.ts ***!
  \**************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 4, vars: 0, consts: [[1, "text-center"], ["role", "status", 1, "spinner-border", "spinner-border-md"], [1, "sr-only"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".text-center[_ngcontent-%COMP%] {\n  padding: 60px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91dGlscy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gICAgcGFkZGluZzo2MHB4IDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84Uz":
/*!********************************************************************!*\
  !*** ./src/app/pages/requestapproval/requestapproval.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestapprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestapprovalComponent", function() { return RequestapprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loader/loader.component */ "7OfP");
/* harmony import */ var _utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/popupdialog/popupdialog.component */ "yX1z");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function RequestapprovalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RequestapprovalComponent_div_4_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const question_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.eventCheck($event.target, question_r2, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](". ", question_r2.fieldname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r2.fieldvalue);
} }
function RequestapprovalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RequestapprovalComponent_div_8_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const question_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.eventCheck($event.target, question_r6, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](". ", question_r6.fieldname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r6.fieldvalue);
} }
class RequestapprovalComponent {
    constructor(comserv, router, modalService) {
        this.comserv = comserv;
        this.router = router;
        this.modalService = modalService;
        let datas = this.router.getCurrentNavigation().extras.state;
        this.requestedData = datas;
        if (!datas) {
            this.router.navigate(['/Home']);
        }
    }
    ngOnInit() {
    }
    eventCheck(event, data, type) {
        if (type == 1) {
            this.requestedData.appInfo.forEach(element => {
                if (element.fieldname == data.fieldname && event.checked)
                    element.status = "Approved";
                else if (element.fieldname == data.fieldname && !event.checked)
                    element.status = "Rejected";
            });
        }
        else if (type == 2) {
            this.requestedData.appIntagrationInfo.forEach(element => {
                if (element.fieldname == data.fieldname && event.checked)
                    element.status = "Approved";
                else if (element.fieldname == data.fieldname && !event.checked)
                    element.status = "Rejected";
            });
        }
        console.log(this.requestedData);
    }
    submitrecord(status) {
        if ((this.usercommand && status == "Rejected") || status == "Approved") {
            this.requestedData.appInfo.forEach(element => {
                if (element.status != "Approved")
                    element.status = "Rejected";
            });
            this.requestedData.appIntagrationInfo.forEach(element => {
                if (element.status != "Approved")
                    element.status = "Rejected";
            });
            if (this.usercommand)
                this.requestedData.rejectionInfo.push(this.usercommand);
            this.showloading();
            let utype = "A";
            let userInfo = localStorage.getItem('userInfo').toString();
            if (userInfo) {
                userInfo = JSON.parse(userInfo);
                if (userInfo.teamId != "6057160d82e6b23520c2410f")
                    utype = "B";
            }
            if (status == "Approved") {
                this.requestedData.requestAccepted = true;
            }
            else {
                this.requestedData.userCanedit = this.requestedData.requestedBy;
                this.requestedData.requestAccepted = false;
            }
            this.requestedData.reSubmitted = false;
            this.comserv.submitAdminRequest(this.requestedData, utype).subscribe((response) => {
                let currentDialog = this.modalService.open(_utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_2__["PopupdialogComponent"], { centered: true, size: 'lg' });
                currentDialog.componentInstance.modalType = "ALERT";
                currentDialog.componentInstance.modalTitle = "Alert";
                currentDialog.componentInstance.modalContent = "Your Request is Submitted Successfully";
                currentDialog.result.then(result => {
                    console.log("1" + result);
                }, reason => {
                    console.log("2" + reason);
                    if (reason == "ok") {
                        this.router.navigate(['/AdminRequestList']);
                    }
                });
            }, (error) => {
                console.log(error);
            }).add(() => {
                this.hideloading();
            });
        }
    }
    showloading() {
        this.loading = this.modalService.open(_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], { centered: true, size: 'sm', backdrop: false });
    }
    hideloading() {
        if (this.loading)
            this.loading.close();
    }
}
RequestapprovalComponent.ɵfac = function RequestapprovalComponent_Factory(t) { return new (t || RequestapprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
RequestapprovalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestapprovalComponent, selectors: [["app-requestapproval"]], decls: 34, vars: 3, consts: [[1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-6"], [1, "d-flex", "justify-content-center"], ["type", "button", "data-toggle", "modal", "data-target", "#requestmodal", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "requestmodal", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "card"], [1, "questions", "col-md-5", "col-sm-4"], [1, "col-md-1", "col-sm-2"], ["type", "checkbox", 1, "form-check-input", 3, "change"]], template: function RequestapprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Application Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestapprovalComponent_div_4_Template, 11, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Application Intagrated Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RequestapprovalComponent_div_8_Template, 11, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestapprovalComponent_Template_button_click_18_listener() { return ctx.submitrecord("Approved"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RequestapprovalComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx.usercommand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestapprovalComponent_Template_button_click_32_listener() { return ctx.submitrecord("Rejected"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestedData.appInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestedData.appIntagrationInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usercommand);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 10px;\n  background-color: #fbfeff;\n  padding: 5px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background-color: #fbfeff;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n\n.questions[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdGFwcHJvdmFsL3JlcXVlc3RhcHByb3ZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVDO0VBQ0csc0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVDO0VBQ0csc0JBQUE7QUFDSjs7QUFFQztFQUNHLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0YXBwcm92YWwvcmVxdWVzdGFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1NCwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDVweFxyXG4gfVxyXG4gXHJcbiAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC4yMHJlbSAwLjUwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjU0LCAyNTUpO1xyXG4gfVxyXG4gXHJcbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuNTByZW0gMC41MHJlbTtcclxuIH1cclxuIFxyXG4gLnF1ZXN0aW9uc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestapprovalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requestapproval',
                templateUrl: './requestapproval.component.html',
                styleUrls: ['./requestapproval.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthService {
    constructor(router) {
        this.router = router;
    }
    /** signout */
    signOut() {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.setItem('userInfo', "");
        this.router.navigate(['/Login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9w+L":
/*!************************************************!*\
  !*** ./src/app/utils/event-emitter.service.ts ***!
  \************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EventEmitterService {
    constructor() {
        this.invokeFirstComponentFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.invokeSecondComponentFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onFirstComponentButtonClick() {
        this.invokeFirstComponentFunction.emit();
    }
    onSecondComponentButtonClick() {
        this.invokeSecondComponentFunction.emit();
    }
}
EventEmitterService.ɵfac = function EventEmitterService_Factory(t) { return new (t || EventEmitterService)(); };
EventEmitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventEmitterService, factory: EventEmitterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventEmitterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    apiUrl: "http://192.168.0.151:8080/"
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

/***/ "BO8o":
/*!***************************************************!*\
  !*** ./src/app/utils/AddHttpHeaderInterceptor.ts ***!
  \***************************************************/
/*! exports provided: AddHttpHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHttpHeaderInterceptor", function() { return AddHttpHeaderInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

class AddHttpHeaderInterceptor {
    intercept(req, next) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        if (!req.headers.has('Content-Type')) {
            headers = headers.set('Content-Type', 'application/json');
        }
        const clonedReq = req.clone({ headers: headers });
        return next.handle(clonedReq);
    }
}


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/loader/loader.component */ "7OfP");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/globals */ "+zpZ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









class LoginComponent {
    constructor(comserv, formBuilder, router, globle, modalService) {
        this.comserv = comserv;
        this.formBuilder = formBuilder;
        this.router = router;
        this.globle = globle;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        if (this.globle.getloginstatus() == "true") {
            this.router.navigate(['/Home']);
        }
    }
    submitLogin() {
        this.showloading();
        let data = this.registerForm.getRawValue();
        this.comserv.login(data).subscribe((response) => {
            console.log(response);
            if (response.body.id != "" && response.body.id != undefined && response.body.id != null) {
                this.globle.setloginstatus(true);
                this.globle.setUserInformations(JSON.stringify(response.body));
                this.router.navigate(['/Home']);
            }
        }, (error) => {
            console.log(error);
        }).add(() => {
            this.hideloading();
        });
    }
    showloading() {
        this.loading = this.modalService.open(_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], { centered: true, size: 'sm', backdrop: false });
    }
    hideloading() {
        if (this.loading)
            this.loading.close();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 1, consts: [[1, "container-fluid"], [1, "row", "main-content", "bg-success", "text-center"], [1, "col-md-4", "text-center", "company__info"], [1, "company_title"], [1, "col-md-8", "col-xs-12", "col-sm-12", "login_form"], [1, "row", "htitile"], [1, "row", "d-flex", "justify-content-center"], ["control", "", 1, "form-group", 3, "formGroup", "ngSubmit"], [1, "row"], ["type", "text", "formControlName", "userId", "placeholder", "Bank ID", 1, "form__input"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form__input"], ["type", "submit", "value", "Login", 1, "btn"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "IAM OnBoarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".main-content[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 20px;\n  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);\n  margin: 5em auto;\n  display: flex;\n}\n\n.company__info[_ngcontent-%COMP%] {\n  background-color: #008080;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n}\n\n.fa-android[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n@media screen and (max-width: 640px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .company__info[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .login_form[_ngcontent-%COMP%] {\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n  }\n}\n\n@media screen and (min-width: 642px) and (max-width: 800px) {\n  .main-content[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n.row[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: #008080;\n}\n\n.login_form[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n}\n\nform[_ngcontent-%COMP%] {\n  padding: 0em;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0px solid transparent;\n  border-radius: 0;\n  border-bottom: 1px solid #aaa;\n  padding: 0.5em 0.5em 0.5em;\n  padding-left: 0em;\n  outline: none;\n  margin: 1.5em auto;\n  transition: all 0.5s ease;\n}\n\n.form__input[_ngcontent-%COMP%]:focus {\n  border-bottom-color: #008080;\n  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);\n  border-radius: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n  width: 50%;\n  border-radius: 30px;\n  color: #008080;\n  font-weight: 600;\n  background-color: #fff;\n  border: 1px solid #008080;\n  margin-top: 1.5em;\n  margin-bottom: 1em;\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n  background-color: #008080;\n  color: #fff;\n}\n\n.htitile[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.company_title[_ngcontent-%COMP%] {\n  font-size: 2vw;\n  font-weight: bold;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNEOztBQUNBO0VBQ0MseUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRUQ7O0FBQUE7RUFDQyxjQUFBO0FBR0Q7O0FBREE7RUFDQztJQUFjLFVBQUE7RUFLYjs7RUFKRDtJQUNDLGFBQUE7RUFPQTs7RUFMRDtJQUNDLDRCQUFBO0lBQ0EsK0JBQUE7RUFRQTtBQUNGOztBQU5BO0VBQ0M7SUFBYyxVQUFBO0VBU2I7QUFDRjs7QUFSQTtFQUNDLGNBQUE7QUFVRDs7QUFSQTtFQUNDLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFXRDs7QUFUQTtFQUNDLFlBQUE7QUFZRDs7QUFWQTtFQUNDLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFhRDs7QUFYQTtFQUNDLDRCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQWNEOztBQVpBO0VBQ0MseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWVEOztBQWJBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FBZ0JEOztBQWJBO0VBQ0ksZ0JBQUE7QUFnQko7O0FBYkE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7QUFnQkQ7O0FBYkE7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUFnQkQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnR7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLC40KTtcclxuXHRtYXJnaW46IDVlbSBhdXRvO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNvbXBhbnlfX2luZm97XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mYS1hbmRyb2lke1xyXG5cdGZvbnQtc2l6ZTozZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHQubWFpbi1jb250ZW50e3dpZHRoOiA5MCU7fVxyXG5cdC5jb21wYW55X19pbmZve1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblx0LmxvZ2luX2Zvcm17XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MnB4KSBhbmQgKG1heC13aWR0aDo4MDBweCl7XHJcblx0Lm1haW4tY29udGVudHt3aWR0aDogODAlO31cclxufVxyXG4ucm93ID4gaDJ7XHJcblx0Y29sb3I6IzAwODA4MDtcclxufVxyXG4ubG9naW5fZm9ybXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjIwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjBweDtcclxuXHRib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO1xyXG5cdGJvcmRlci1yaWdodDoxcHggc29saWQgI2NjYztcclxufVxyXG5mb3Jte1xyXG5cdHBhZGRpbmc6IDBlbTtcclxufVxyXG4uZm9ybV9faW5wdXR7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xyXG5cdHBhZGRpbmc6IDAuNWVtIC41ZW0gLjVlbTtcclxuXHRwYWRkaW5nLWxlZnQ6IDBlbTtcclxuXHRvdXRsaW5lOm5vbmU7XHJcblx0bWFyZ2luOjEuNWVtIGF1dG87XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG59XHJcbi5mb3JtX19pbnB1dDpmb2N1c3tcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjMDA4MDgwO1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDgwLDgwLC40KTsgXHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5idG57XHJcblx0dHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRjb2xvcjojMDA4MDgwO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA4MDgwO1xyXG5cdG1hcmdpbi10b3A6IDEuNWVtO1xyXG5cdG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uYnRuOmhvdmVyLCAuYnRuOmZvY3Vze1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDgwODA7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmh0aXRpbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY29tcGFueV90aXRsZXtcclxuXHRmb250LXNpemU6MnZ3O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwcHggNTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _utils_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "Iskk":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/question-control.service.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionControlService", function() { return QuestionControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class QuestionControlService {
    constructor() { }
    toFormGroup(questions, type) {
        const group = {};
        if (questions) {
            questions.forEach(question => {
                // if(type == question.formType){
                let arritem = [
                    question.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null,
                    question.minvalue ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(question.minvalue) : null,
                    question.maxvalue ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(question.maxvalue) : null,
                    question.minlength ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(question.minlength) : null,
                    question.maxlength ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(question.maxlength) : null,
                    question.validateExpression ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(question.validateExpression) : null,
                ];
                let filtered = arritem.filter(function (el) {
                    return el != null;
                });
                console.log(question);
                group[question.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: question.value || '', disabled: false }, filtered);
                //  }
            });
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    }
}
QuestionControlService.ɵfac = function QuestionControlService_Factory(t) { return new (t || QuestionControlService)(); };
QuestionControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionControlService, factory: QuestionControlService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MP6R":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/dynamic-form-question/dynamic-form-question.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DynamicFormQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormQuestionComponent", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/event-emitter.service */ "9w+L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _utils_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/checkbox-group/checkbox-group.component */ "+l/Z");
/* harmony import */ var _utils_checkbox_group_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/checkbox-group/checkbox.component */ "sB0a");








function DynamicFormQuestionComponent_div_0_div_11_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_0_div_11_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The minimum length for this field is ", ctx_r5.formGroup.get(ctx_r5.question.key).errors.minlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_0_div_11_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The maximum length for this field is ", ctx_r6.formGroup.get(ctx_r6.question.key).errors.maxlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_0_div_11_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected minimum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_0_div_11_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected maxmum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormQuestionComponent_div_0_div_11_small_1_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormQuestionComponent_div_0_div_11_small_2_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_0_div_11_small_3_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormQuestionComponent_div_0_div_11_small_4_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormQuestionComponent_div_0_div_11_small_5_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get(ctx_r3.question.key).hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get(ctx_r3.question.key).hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get(ctx_r3.question.key).hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get(ctx_r3.question.key).hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get(ctx_r3.question.key).hasError("max"));
} }
const _c0 = function (a0) { return { "rejecthighlight": a0 }; };
function DynamicFormQuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormQuestionComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.bindvalue1(ctx_r9.question); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DynamicFormQuestionComponent_div_0_div_11_Template, 6, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.question.status == "Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r0.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.question.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r0.question.key)("id", ctx_r0.question.key)("type", ctx_r0.question.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get(ctx_r0.question.key).invalid && ctx_r0.form.get(ctx_r0.question.key).errors && (ctx_r0.form.get(ctx_r0.question.key).dirty || ctx_r0.form.get(ctx_r0.question.key).touched));
} }
function DynamicFormQuestionComponent_div_1_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r13.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r13.value);
} }
function DynamicFormQuestionComponent_div_1_div_14_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_1_div_14_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The minimum length for this field is ", ctx_r15.formGroup.get(ctx_r15.question.key).errors.minlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_1_div_14_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The maximum length for this field is ", ctx_r16.formGroup.get(ctx_r16.question.key).errors.maxlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_1_div_14_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected minimum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_1_div_14_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected maxmum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormQuestionComponent_div_1_div_14_small_1_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormQuestionComponent_div_1_div_14_small_2_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_1_div_14_small_3_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormQuestionComponent_div_1_div_14_small_4_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormQuestionComponent_div_1_div_14_small_5_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.form.get(ctx_r12.question.key).hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.form.get(ctx_r12.question.key).hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.form.get(ctx_r12.question.key).hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.form.get(ctx_r12.question.key).hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.form.get(ctx_r12.question.key).hasError("max"));
} }
function DynamicFormQuestionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "-- select option --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormQuestionComponent_div_1_option_10_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormQuestionComponent_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.bindvalue2(ctx_r19.question); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DynamicFormQuestionComponent_div_1_div_14_Template, 6, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r1.question.status == "Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r1.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.question.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.question.key)("formControlName", ctx_r1.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.question.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form.get(ctx_r1.question.key).invalid && ctx_r1.form.get(ctx_r1.question.key).errors && (ctx_r1.form.get(ctx_r1.question.key).dirty || ctx_r1.form.get(ctx_r1.question.key).touched));
} }
function DynamicFormQuestionComponent_div_3_input_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 7);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r21.question.key)("id", ctx_r21.question.key)("type", ctx_r21.question.type);
} }
function DynamicFormQuestionComponent_div_3_select_6_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r28.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r28.value);
} }
function DynamicFormQuestionComponent_div_3_select_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-- select option --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_3_select_6_option_3_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r22.question.key)("formControlName", ctx_r22.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.question.options);
} }
function DynamicFormQuestionComponent_div_3_select_7_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r30.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r30.value);
} }
function DynamicFormQuestionComponent_div_3_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-- select option --");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_3_select_7_option_3_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r23.question.key)("formControlName", ctx_r23.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.question.options);
} }
function DynamicFormQuestionComponent_div_3_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r31.question.key)("name", ctx_r31.question.key)("value", opt_r32.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", opt_r32.value, " ");
} }
function DynamicFormQuestionComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormQuestionComponent_div_3_div_8_div_1_Template, 4, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.question.options);
} }
function DynamicFormQuestionComponent_div_3_div_9_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opt_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r34.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r34.value, "");
} }
function DynamicFormQuestionComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "checkbox-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormQuestionComponent_div_3_div_9_checkbox_2_Template, 2, 2, "checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r25.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.question.options);
} }
function DynamicFormQuestionComponent_div_3_div_10_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_3_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The minimum length for this field is ", ctx_r36.formGroup.get(ctx_r36.question.key).errors.minlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_3_div_10_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The maximum length for this field is ", ctx_r37.formGroup.get(ctx_r37.question.key).errors.maxlength.requiredLength, " characters. ");
} }
function DynamicFormQuestionComponent_div_3_div_10_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected minimum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_3_div_10_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unexpected maximum data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormQuestionComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormQuestionComponent_div_3_div_10_small_1_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormQuestionComponent_div_3_div_10_small_2_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_3_div_10_small_3_Template, 2, 1, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicFormQuestionComponent_div_3_div_10_small_4_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormQuestionComponent_div_3_div_10_small_5_Template, 2, 0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.form.get(ctx_r26.question.key).hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.form.get(ctx_r26.question.key).hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.form.get(ctx_r26.question.key).hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.form.get(ctx_r26.question.key).hasError("min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.form.get(ctx_r26.question.key).hasError("max"));
} }
function DynamicFormQuestionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DynamicFormQuestionComponent_div_3_input_5_Template, 1, 3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DynamicFormQuestionComponent_div_3_select_6_Template, 4, 3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DynamicFormQuestionComponent_div_3_select_7_Template, 4, 3, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DynamicFormQuestionComponent_div_3_div_8_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DynamicFormQuestionComponent_div_3_div_9_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DynamicFormQuestionComponent_div_3_div_10_Template, 6, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r2.question.status == "Rejected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r2.question.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.question.order - 1, ". ", ctx_r2.question.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r2.question.controlType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "multidropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radiooption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "checkedoption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.form.get(ctx_r2.question.key).invalid && ctx_r2.form.get(ctx_r2.question.key).errors && (ctx_r2.form.get(ctx_r2.question.key).dirty || ctx_r2.form.get(ctx_r2.question.key).touched));
} }
class DynamicFormQuestionComponent {
    constructor(comserv, eventEmitterService) {
        this.comserv = comserv;
        this.eventEmitterService = eventEmitterService;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    get isValid() { return this.form.controls[this.question.key].valid; }
    ngOnInit() {
        console.log(this.requestform);
    }
    bindvalue1(question) {
        if (question.order == 1) {
            let inputdata = {
                "formId": this.formid,
                "id": question.key,
                "fieldValue": this.form.controls[this.question.key].value
            };
            this.comserv.getFormValues(inputdata).subscribe(data => {
                if (data.body.length > 0) {
                    for (var x in data.body[0]) {
                        let filtered = this.questionlist.filter(function (el) {
                            return el.fieldName.replace(/\s/g, "") == x.replace(/\s/g, "");
                        });
                        if (filtered.length > 0) {
                            if (this.form.controls[filtered[0].id])
                                this.form.controls[filtered[0].id].setValue(data.body[0][x]);
                        }
                    }
                }
            });
        }
    }
    bindvalue2(question) {
        if (question.order == 1) {
            localStorage.setItem("formType", this.form.controls[this.question.key].value);
            this.eventEmitterService.onFirstComponentButtonClick();
        }
    }
}
DynamicFormQuestionComponent.ɵfac = function DynamicFormQuestionComponent_Factory(t) { return new (t || DynamicFormQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"])); };
DynamicFormQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormQuestionComponent, selectors: [["app-question"]], inputs: { question: "question", form: "form", questionlist: "questionlist", requestform: "requestform", formid: "formid" }, decls: 4, vars: 3, consts: [["class", "card", 3, "formGroup", 4, "ngIf"], [1, "card", 3, "formGroup"], [1, "card-footer", 3, "ngClass"], [1, "questions"], [1, "card-body"], [1, "row"], [1, "col-md-9"], [1, "form-control", 3, "formControlName", "id", "type"], [1, "col-md-3", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [4, "ngIf"], ["class", "errorMessage", 4, "ngIf"], [1, "errorMessage"], [1, "form-control", 3, "id", "formControlName"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "card-body", 3, "ngSwitch"], ["class", "form-control", 3, "formControlName", "id", "type", 4, "ngSwitchCase"], ["class", "form-control", 3, "id", "formControlName", 4, "ngSwitchCase"], ["class", "form-control", "multiple", "", 3, "id", "formControlName", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["multiple", "", 1, "form-control", 3, "id", "formControlName"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], [1, "form-check-label"], ["type", "radio", 1, "form-check-input", 3, "formControlName", "name", "value"], [3, "formControlName"]], template: function DynamicFormQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DynamicFormQuestionComponent_div_0_Template, 12, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormQuestionComponent_div_1_Template, 15, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormQuestionComponent_div_3_Template, 11, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestform == 1 && ctx.question.order == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestform == 2 && ctx.question.order == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question.order != 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _utils_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxGroupComponent"], _utils_checkbox_group_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5px 5px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n\n.questions[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\noption[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.errorMessage[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  color: orangered;\n  margin: 0px 10px;\n}\n\n.requiredindicator[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  color: orangered;\n  margin: 0px 10px;\n}\n\n.rejecthighlight[_ngcontent-%COMP%] {\n  background-color: #ff8a60;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHluYW1pY3F1ZXN0aW9uZXIvZHluYW1pYy1mb3JtLXF1ZXN0aW9uL2R5bmFtaWMtZm9ybS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FBQ0g7O0FBRUE7RUFDRyxzQkFBQTtBQUNIOztBQUVBO0VBQ0csc0JBQUE7QUFDSDs7QUFFQTtFQUNHLGdCQUFBO0FBQ0g7O0FBRUE7RUFDRyxnQkFBQTtBQUNIOztBQUVBO0VBQ0csaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNIOztBQUVBO0VBQ0csaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNIOztBQUVBO0VBQ0cseUJBQUE7QUFDSDs7QUFFQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0FBQ0g7O0FBRUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZHluYW1pY3F1ZXN0aW9uZXIvZHluYW1pYy1mb3JtLXF1ZXN0aW9uL2R5bmFtaWMtZm9ybS1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogNXB4IDVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICAgcGFkZGluZzogMC4yMHJlbSAwLjUwcmVtO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgcGFkZGluZzogMC41MHJlbSAwLjUwcmVtO1xyXG59XHJcblxyXG4ucXVlc3Rpb25ze1xyXG4gICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5vcHRpb257XHJcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lcnJvck1lc3NhZ2V7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZXF1aXJlZGluZGljYXRvcntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLnJlamVjdGhpZ2hsaWdodHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAxMzgsIDk2KTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXR7XHJcbiAgIHdpZHRoOiAxN3B4O1xyXG4gICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICB3aWR0aDogMjBweDtcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './dynamic-form-question.component.html',
                styleUrls: ['./dynamic-form-question.component.scss'],
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"] }]; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionlist: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], requestform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CommonService {
    constructor(http) {
        this.http = http;
        this.questionerlistURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "apponboard/testcontroller/getStageFormFields/";
        this.addquestionerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "apponboard/testcontroller/insertStageFormFields";
        this.deletequestionURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/testcontroller/removefield/";
        this.updatequestionURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/testcontroller/updateField";
        this.getfieldvaluesURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/testcontroller/getFormValues";
        this.getuserrequestURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/request/getrequests/";
        this.getadminrequestURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/request/getassignedrequests/";
        this.submitadminrequestAURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/activitcontroller/teamAReqSubmit";
        this.submitadminrequestBURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/activitcontroller/teamBReqSubmit";
        this.submituserrequestURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/activitcontroller/submitreqest";
        this.loginURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/apponboard/user/getuserInfo";
    }
    getQuestionerList(formtype) {
        return this.http.get(this.questionerlistURL + formtype);
    }
    addNewQuestioner(data) {
        return this.http.post(this.addquestionerURL, data, { observe: 'response' });
    }
    deleteQuestion(fieldname) {
        return this.http.delete(this.deletequestionURL + fieldname, { observe: 'response' });
    }
    updateQuestioner(data) {
        return this.http.put(this.updatequestionURL, data, { observe: 'response' });
    }
    getFormValues(data) {
        return this.http.post(this.getfieldvaluesURL, data, { observe: 'response' });
    }
    login(data) {
        return this.http.post(this.loginURL, data, { observe: 'response' });
    }
    getUserRequestRecord(id) {
        return this.http.get(this.getuserrequestURL + id);
    }
    getAdminRequestRecord(id) {
        return this.http.get(this.getadminrequestURL + id);
    }
    submitAdminRequest(data, type) {
        let url = type == "A" ? this.submitadminrequestAURL : this.submitadminrequestBURL;
        return this.http.post(url, data, { observe: 'response' });
    }
    submitUserRequest(data) {
        return this.http.post(this.submituserrequestURL, data, { observe: 'response' });
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "PGgz":
/*!********************************************************************!*\
  !*** ./src/app/pages/userrequestlist/userrequestlist.component.ts ***!
  \********************************************************************/
/*! exports provided: UserrequestlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrequestlistComponent", function() { return UserrequestlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loader/loader.component */ "7OfP");
/* harmony import */ var _timelinemodel_timelinemodel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timelinemodel/timelinemodel.component */ "ceCz");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globals */ "+zpZ");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UserrequestlistComponent_div_8_div_14_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function UserrequestlistComponent_div_8_div_14_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 36);
} }
function UserrequestlistComponent_div_8_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserrequestlistComponent_div_8_div_14_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserrequestlistComponent_div_8_div_14_div_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.approveRequest(record_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "red" }; };
const _c1 = function () { return { "color": "green" }; };
const _c2 = function () { return { "color": "blue" }; };
function UserrequestlistComponent_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserrequestlistComponent_div_8_div_14_i_11_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserrequestlistComponent_div_8_div_14_i_12_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserrequestlistComponent_div_8_div_14_div_13_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserrequestlistComponent_div_8_div_14_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const record_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.showTimeLine(record_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserrequestlistComponent_div_8_div_14_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const record_r6 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.viewRequest(record_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserrequestlistComponent_div_8_div_14_div_18_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r6.Applicationname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r6.created.substring(0, 13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", record_r6.status == "Rejected" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0) || record_r6.status == "Completed" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1) || record_r6.status == "InProgress" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r6.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "InProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.userCanedit == ctx_r5.userInfo.bankId);
} }
function UserrequestlistComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Application Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserrequestlistComponent_div_8_div_14_Template, 19, 12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.requestList);
} }
function UserrequestlistComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please wait until Request Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserrequestlistComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r19 + 1, " . ", record_r18, "");
} }
const _c3 = function (a0) { return { "droolrejected": a0 }; };
function UserrequestlistComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, record_r20.status == "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r20.fieldname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r20.fieldvalue);
} }
function UserrequestlistComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, record_r22.status == "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r22.fieldname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r22.fieldvalue);
} }
class UserrequestlistComponent {
    constructor(globle, comserv, modalService, router) {
        this.globle = globle;
        this.comserv = comserv;
        this.modalService = modalService;
        this.router = router;
        this.requestList = [];
        this.requestData = [];
        this.alternate = true;
        this.toggle = true;
        this.color = true;
        this.size = 40;
        this.expandEnabled = true;
        this.contentAnimation = true;
        this.dotAnimation = true;
        this.side = 'right';
        this.entries = [
            {
                header: 'header',
                content: 'content'
            }, {
                header: 'header',
                content: 'content'
            }
        ];
        this.getRequestList();
    }
    removeEntry() {
        this.entries.pop();
    }
    onHeaderClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
    onDotClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
    onExpandEntry(expanded, index) {
        console.log(`Expand status of entry #${index} changed to ${expanded}`);
    }
    toggleSide() {
        this.side = this.side === 'left' ? 'right' : 'left';
    }
    ngOnInit() { }
    getRequestList() {
        this.showloading();
        this.userInfo = localStorage.getItem('userInfo');
        if (this.userInfo)
            this.userInfo = JSON.parse(this.userInfo);
        this.comserv.getUserRequestRecord(this.userInfo.bankId).subscribe((response) => {
            console.log(response);
            this.requestList = response;
            this.requestList.forEach(request => {
                // if(request.teamA && request.teamB){
                //   if(request.teamA.status == "accepted" && request.teamB.status == "accepted")
                //     request.status = "Completed";
                //   else
                //     request.status = "Waiting";
                // }
                request.appInfo.forEach(element => {
                    if (element.fieldname == "Application Name")
                        request.Applicationname = element.fieldvalue;
                });
            });
        }, (error) => {
            console.log(error);
        }).add(() => {
            this.hideloading();
        });
    }
    viewRequest(record) {
        this.requestData = record;
    }
    createNewRequest() {
        this.router.navigate(['/UserRequest']);
    }
    approveRequest(record) {
        this.router.navigate(['/UserRequest'], { state: record });
    }
    showloading() {
        this.loading = this.modalService.open(_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], { centered: true, size: 'sm', backdrop: false });
    }
    hideloading() {
        if (this.loading)
            this.loading.close();
    }
    showTimeLine(record) {
        let currentDialog = this.modalService.open(_timelinemodel_timelinemodel_component__WEBPACK_IMPORTED_MODULE_2__["TimelinemodelComponent"], { centered: true, size: 'xl' });
        currentDialog.componentInstance.modalData = record;
        currentDialog.result.then(result => {
        }, reason => {
        });
    }
}
UserrequestlistComponent.ɵfac = function UserrequestlistComponent_Factory(t) { return new (t || UserrequestlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UserrequestlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserrequestlistComponent, selectors: [["app-userrequestlist"]], decls: 72, vars: 8, consts: [[1, "container"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", 1, "btn", "btn-info", "float-right", 3, "click"], [4, "ngIf"], ["id", "requestmodal", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "card"], [1, "row"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "col-md-5"], [1, "col-md-4"], ["class", "row reqitem", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "card", "reqheader", "bg-primary"], [1, "col-md-1"], [1, "col-md-3"], ["class", "card reqlistitem", 4, "ngFor", "ngForOf"], [1, "card", "reqlistitem"], [1, "questions", "col-md-2"], [1, "questions", "col-md-3"], [1, "questions", "col-md-3", 2, "font-weight", "500", 3, "ngStyle"], ["class", "fas fa-check float-center iconedit", 4, "ngIf"], ["class", "fas fa-times float-center iconedit", 4, "ngIf"], ["class", "spinner-grow text-primary float-center", "role", "status", 4, "ngIf"], [1, "fas", "fa-stream", "float-right", "iconedit", 2, "color", "#117a8b", 3, "click"], ["data-toggle", "modal", "data-target", "#requestmodal", 1, "fas", "fa-eye", "float-right", "iconedit", 3, "click"], ["class", "col-md-1", 4, "ngIf"], [1, "fas", "fa-check", "float-center", "iconedit"], [1, "fas", "fa-times", "float-center", "iconedit"], ["role", "status", 1, "spinner-grow", "text-primary", "float-center"], [1, "sr-only"], [1, "fas", "fa-edit", "float-right", "iconedit", 3, "click"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "reqitem", 3, "ngClass"]], template: function UserrequestlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserrequestlistComponent_Template_button_click_2_listener() { return ctx.createNewRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserrequestlistComponent_Template_button_click_4_listener() { return ctx.getRequestList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserrequestlistComponent_div_8_Template, 15, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserrequestlistComponent_div_9_Template, 8, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Application ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Assigned To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UserrequestlistComponent_div_46_Template, 3, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Application Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UserrequestlistComponent_div_57_Template, 8, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Application Intagrated Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, UserrequestlistComponent_div_68_Template, 8, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.applicationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.assignedTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.rejectionInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.appInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.appIntagrationInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  background-color: #fbfeff;\n  padding: 10px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background-color: #fbfeff;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n\n.reqlistitem[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n\n.reqitem[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.droolrejected[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.reqheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 10px 10px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnJlcXVlc3RsaXN0L3VzZXJyZXF1ZXN0bGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUM7RUFDRyxzQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUM7RUFDRyxzQkFBQTtBQUNKOztBQUVDO0VBQ0csaUJBQUE7QUFDSjs7QUFFQztFQUNHLFdBQUE7QUFDSjs7QUFFQztFQUNFLGlCQUFBO0FBQ0g7O0FBRUM7RUFDRyxVQUFBO0FBQ0o7O0FBRUM7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlcnJlcXVlc3RsaXN0L3VzZXJyZXF1ZXN0bGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTQsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiB9XHJcbiBcclxuIC5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwLjIwcmVtIDAuNTByZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTQsIDI1NSk7XHJcbiB9XHJcbiBcclxuIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMC41MHJlbSAwLjUwcmVtO1xyXG4gfVxyXG4gXHJcbiAucmVxbGlzdGl0ZW17XHJcbiAgICBtYXJnaW46MTBweCAxMHB4O1xyXG4gfVxyXG5cclxuIC5yZXFpdGVte1xyXG4gICAgbWFyZ2luOjVweDtcclxuIH1cclxuXHJcbiBwIHtcclxuICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiB9XHJcblxyXG4gLmRyb29scmVqZWN0ZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gfVxyXG5cclxuIC5yZXFoZWFkZXJ7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBtYXJnaW46MTBweCAxMHB4O1xyXG4gICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserrequestlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userrequestlist',
                templateUrl: './userrequestlist.component.html',
                styleUrls: ['./userrequestlist.component.scss']
            }]
    }], function () { return [{ type: _utils_globals__WEBPACK_IMPORTED_MODULE_3__["Globals"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "QwkK":
/*!******************************************************************!*\
  !*** ./src/app/pages/questionerlist/questionerlist.component.ts ***!
  \******************************************************************/
/*! exports provided: QuestionerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionerlistComponent", function() { return QuestionerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createquestioner/createquestioner.component */ "vHsX");
/* harmony import */ var _utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/popupdialog/popupdialog.component */ "yX1z");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function QuestionerlistComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionerlistComponent_div_4_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const question_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.DeleteQuestion(question_r1.fieldName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionerlistComponent_div_4_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const question_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.EditQuestion(question_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", question_r1.order, ". ", question_r1.fieldName, "");
} }
class QuestionerlistComponent {
    constructor(comserv, modalService) {
        this.comserv = comserv;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.getQuestionerList();
    }
    getQuestionerList() {
        this.questionsList = [];
        var promise = new Promise((resolve, reject) => {
            this.comserv.getQuestionerList("Form").subscribe(data => {
                data[0].formFields.forEach((element, index) => {
                    let i = index + 1;
                    element.order = i;
                    this.questionsList.push(element);
                });
            }).add(() => {
                resolve("");
            });
        });
        return promise;
    }
    DeleteQuestion(fieldname) {
        let currentDialog = this.modalService.open(_utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_2__["PopupdialogComponent"], { centered: true, size: 'lg' });
        currentDialog.componentInstance.modalType = "CONFIRM";
        currentDialog.componentInstance.modalTitle = "Alert";
        currentDialog.componentInstance.modalContent = "Are you sure you want to delete " + fieldname;
        currentDialog.result.then(result => {
            console.log("1" + result);
        }, reason => {
            console.log("2" + reason);
            if (reason == "ok") {
                this.comserv.deleteQuestion(fieldname).subscribe(data => {
                }).add(() => {
                    this.getQuestionerList();
                });
            }
        });
        // var promise = new Promise((resolve, reject) => {
        // })
        // return promise;
    }
    EditQuestion(data) {
        let currentDialog = this.modalService.open(_createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_1__["CreatequestionerComponent"], { centered: true, size: 'lg' });
        currentDialog.componentInstance.modalType = 'Update';
        currentDialog.componentInstance.modalData = data;
        currentDialog.componentInstance.questionList = this.questionsList;
        currentDialog.result.then(result => {
        }, reason => {
            this.getQuestionerList();
        });
    }
    AddNewQuestion() {
        let currentDialog = this.modalService.open(_createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_1__["CreatequestionerComponent"], { centered: true, size: 'lg' });
        currentDialog.componentInstance.modalType = 'Create';
        currentDialog.componentInstance.modalData = [];
        currentDialog.componentInstance.questionList = this.questionsList;
        currentDialog.result.then(result => {
        }, reason => {
            this.getQuestionerList();
        });
    }
}
QuestionerlistComponent.ɵfac = function QuestionerlistComponent_Factory(t) { return new (t || QuestionerlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
QuestionerlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionerlistComponent, selectors: [["app-questionerlist"]], decls: 5, vars: 1, consts: [[1, "container"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "row"], [1, "questions", "col-md-10", "col-sm-8"], [1, "col-md-1", "col-sm-2"], [1, "fas", "fa-trash", "float-right", "iconremove", 3, "click"], [1, "fas", "fa-edit", "float-right", "iconedit", 3, "click"]], template: function QuestionerlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionerlistComponent_Template_button_click_2_listener() { return ctx.AddNewQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add New Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionerlistComponent_div_4_Template, 9, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 15px 15px;\n  background-color: #fbfeff;\n  padding: 10px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background-color: #fbfeff;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n\n.questions[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.iconremove[_ngcontent-%COMP%]:hover {\n  color: orangered;\n  cursor: pointer;\n}\n\n.iconedit[_ngcontent-%COMP%]:hover {\n  color: blue;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVlc3Rpb25lcmxpc3QvcXVlc3Rpb25lcmxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQztFQUNHLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQztFQUNHLHNCQUFBO0FBQ0o7O0FBRUM7RUFDRyxnQkFBQTtBQUNKOztBQUVDO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0g7O0FBRUE7RUFDRyxXQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUVBO0VBQ0csa0JBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlc3Rpb25lcmxpc3QvcXVlc3Rpb25lcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMTVweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjU0LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gfVxyXG4gXHJcbiAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC4yMHJlbSAwLjUwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjU0LCAyNTUpO1xyXG4gfVxyXG4gXHJcbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuNTByZW0gMC41MHJlbTtcclxuIH1cclxuIFxyXG4gLnF1ZXN0aW9uc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiB9XHJcblxyXG4gLmljb25yZW1vdmU6aG92ZXJ7XHJcbiAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb25lZGl0OmhvdmVye1xyXG4gICBjb2xvcjogYmx1ZTtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICBvdmVyZmxvdy14OmhpZGRlbjtcclxuICAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionerlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-questionerlist',
                templateUrl: './questionerlist.component.html',
                styleUrls: ['./questionerlist.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "SbwR":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/dynamic-form/dynamic-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _question_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question-control.service */ "Iskk");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/loader/loader.component */ "7OfP");
/* harmony import */ var _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dynamicquestioner/question-types */ "roKM");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/event-emitter.service */ "9w+L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dynamic-form-question/dynamic-form-question.component */ "MP6R");













function DynamicFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form Submitted Successfully. Pending for approval ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormComponent_form_2_div_2_app_question_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question", 11);
} if (rf & 2) {
    const question_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formid", ctx_r6.formid)("question", question_r4)("form", ctx_r6.form1)("questionlist", ctx_r6.questionlist1)("requestform", 1);
} }
const _c0 = function (a0, a1) { return { "col-md-12": a0, "col-md-6": a1 }; };
function DynamicFormComponent_form_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_form_2_div_2_app_question_2_Template, 1, 5, "app-question", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, i_r5 === 0, i_r5 != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form1 && ctx_r3.questionlist1 && question_r4);
} }
function DynamicFormComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DynamicFormComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmitForm1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_form_2_div_2_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.questions1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form1.valid);
} }
function DynamicFormComponent_form_3_div_2_app_question_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question", 11);
} if (rf & 2) {
    const question_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formid", ctx_r13.formid)("question", question_r11)("form", ctx_r13.form2)("questionlist", ctx_r13.questionlist2)("requestform", 2);
} }
function DynamicFormComponent_form_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_form_3_div_2_app_question_2_Template, 1, 5, "app-question", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, i_r12 === 0, i_r12 != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.form2 && ctx_r10.questionlist2 && question_r11);
} }
function DynamicFormComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DynamicFormComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onSubmitForm2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_form_3_div_2_Template, 3, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_form_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.questions2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form2.valid);
} }
class DynamicFormComponent {
    constructor(qcs, comserv, router, modalService, eventEmitterService) {
        this.qcs = qcs;
        this.comserv = comserv;
        this.router = router;
        this.modalService = modalService;
        this.eventEmitterService = eventEmitterService;
        this.questions1 = [];
        this.questions2 = [];
        this.finallist = {};
        this.alert = false;
        this.submittedform = 1;
        console.log(this.questionlist1);
    }
    ngOnInit() {
        if (this.questions1)
            this.form1 = this.qcs.toFormGroup(this.questions1, "Form");
        if (this.questions2)
            this.form2 = this.qcs.toFormGroup(this.questions2, "Api");
        this.requestdata = this.requestdata || {};
        if (this.eventEmitterService.subsVar == undefined) {
            this.eventEmitterService.subsVar = this.eventEmitterService.
                invokeFirstComponentFunction.subscribe((name) => {
                let formtype = localStorage.getItem("formType");
                this.getQuestionerList(formtype);
            });
        }
    }
    onSubmitForm1() {
        let payLoad = this.form1.getRawValue();
        let jsonresult = [];
        this.questionlist1.forEach(element => {
            if (element.fieldProperties.isEnabled) {
                jsonresult.push({
                    "fieldname": element.fieldName,
                    "fieldvalue": payLoad[element.id],
                    "status": ""
                });
            }
            if (element.fieldName == "Application num #/ CI ID #  GAI ID #")
                this.finallist.applicationId = payLoad[element.id];
        });
        console.log(JSON.stringify(jsonresult));
        this.submittedform = 2;
        window.scrollTo(0, 0);
        this.finallist.appInfo = jsonresult;
    }
    onSubmitForm2() {
        let payLoad = this.form2.getRawValue();
        let jsonresult = [];
        this.questionlist2.forEach(element => {
            if (element.fieldProperties.isEnabled && element.fieldName != "Form Type") {
                jsonresult.push({
                    "fieldname": element.fieldName,
                    "fieldvalue": payLoad[element.id],
                    "status": ""
                });
            }
            else
                (element.fieldName == "Form Type");
            this.finallist.appType = element.formType;
        });
        console.log(JSON.stringify(jsonresult));
        this.finallist.appIntagrationInfo = jsonresult;
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo)
            userInfo = JSON.parse(userInfo);
        this.finallist.requestedBy = userInfo.bankId;
        this.finallist.requestAccepted = false;
        this.finallist.id = this.requestdata.id || "";
        this.finallist.rejectionInfo = [];
        this.finallist.userCanedit = userInfo.bankId;
        this.finallist.assignedTo = this.requestdata.assignedTo || "";
        this.finallist.status = this.requestdata.status || "";
        this.finallist.reSubmitted = true;
        this.finallist.comments = this.requestdata.comments || "";
        this.finallist.processInstance = this.requestdata.processInstance || "";
        if (Object.keys(this.requestdata).length > 0) {
            this.requestdata.userCanedit = userInfo.bankId;
            this.requestdata.requestAccepted = false;
            this.requestdata.reSubmitted = true;
            this.requestdata.appType = this.finallist.appType;
            this.requestdata.appInfo = this.finallist.appInfo;
            this.requestdata.appIntagrationInfo = this.finallist.appIntagrationInfo;
        }
        else {
            this.finallist.reSubmitted = false;
            this.requestdata = this.finallist;
        }
        console.log(JSON.stringify(this.requestdata));
        this.showloading();
        this.comserv.submitUserRequest(this.requestdata).subscribe((response) => {
            this.router.navigate(['/UserRequestList']);
        }, (error) => {
            console.log(error);
        }).add(() => {
            this.hideloading();
        });
    }
    onBack() {
        this.submittedform = 1;
        window.scrollTo(0, 0);
    }
    showloading() {
        this.loading = this.modalService.open(_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"], { centered: true, size: 'sm', backdrop: false });
    }
    hideloading() {
        if (this.loading)
            this.loading.close();
    }
    getQuestionerList(formType) {
        let questionlist = [];
        var promise = new Promise((resolve, reject) => {
            this.comserv.getQuestionerList(formType).subscribe(data => {
                if (formType != "Form") {
                    this.questionlist2 = [];
                    let fvalue = new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["DropdownQuestion"]({
                        key: "1234567890",
                        label: "Form Type",
                        options: [{ key: "API", value: "API" }, { key: "AD", value: "AD" }, { key: "JDBC", value: "JDBC" }, { key: "OUD", value: "OUD" }],
                        value: formType,
                        required: true,
                        order: 1,
                        isenabled: true,
                        status: true
                    });
                    questionlist.push(fvalue);
                    this.questionlist2.push({
                        "id": "1234567890",
                        "fieldName": "Form Type",
                        "formType": "API",
                        "fieldProperties": {
                            "type": "dropdown",
                            "dataType": "text",
                            "validateExpression": "",
                            "minLength": 0,
                            "maxLength": 0,
                            "minValue": 0,
                            "maxValue": 0,
                            "mandotary": true,
                            "qualificationCriteia": "Required",
                            "isEnabled": true
                        }
                    });
                }
                let oldreqdata = [];
                if (this.requestdata)
                    oldreqdata = this.requestdata.appIntagrationInfo || [];
                data[0].formFields.forEach((element, index) => {
                    if (element.fieldProperties.isEnabled) {
                        let i = questionlist.length + 1;
                        let oldreqvalue;
                        let oldreqstatus;
                        if (oldreqdata.length > 0) {
                            let oldreqfil = oldreqdata.filter(rec => rec.fieldname === element.fieldName);
                            oldreqfil = oldreqfil || [];
                            if (oldreqfil.length > 0) {
                                oldreqvalue = oldreqfil[0].fieldvalue || "";
                                oldreqstatus = oldreqfil[0].status || "";
                            }
                        }
                        oldreqvalue = oldreqvalue || "";
                        if (element.fieldProperties.type == "textField") {
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["TextboxQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                validateExpression: element.fieldProperties.validateExpression,
                                type: element.fieldProperties.dataType,
                                minlength: element.fieldProperties.minLength,
                                maxlength: element.fieldProperties.maxLength,
                                minvalue: element.fieldProperties.minValue,
                                maxvalue: element.fieldProperties.maxValue,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                        else if (element.fieldProperties.type == "dropdown") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            if (element.fieldProperties.multiselect) {
                                questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["MultiDropdownQuestion"]({
                                    key: element.id,
                                    label: element.fieldName,
                                    options: listvalue,
                                    value: oldreqvalue,
                                    required: element.fieldProperties.mandotary,
                                    order: i,
                                    isenabled: element.fieldProperties.isEnabled,
                                    status: oldreqstatus
                                }));
                            }
                            else {
                                questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["DropdownQuestion"]({
                                    key: element.id,
                                    label: element.fieldName,
                                    options: listvalue,
                                    value: oldreqvalue,
                                    required: element.fieldProperties.mandotary,
                                    order: i,
                                    isenabled: element.fieldProperties.isEnabled,
                                    status: oldreqstatus
                                }));
                            }
                        }
                        else if (element.fieldProperties.type == "checkedoption") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["CheckboxQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                options: listvalue,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                        else if (element.fieldProperties.type == "radiooption") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_3__["RadiobuttonQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                options: listvalue,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                    }
                });
                data[0].formFields.forEach(element => {
                    this.questionlist2.push(element);
                    this.form2.removeControl(element.id);
                });
                this.questions2 = questionlist;
            }).add(() => {
                if (this.questions2)
                    this.form2 = this.qcs.toFormGroup(this.questions2, "Api");
                resolve("");
            });
        });
        return promise;
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventEmitterService"])); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { questions1: "questions1", questionlist1: "questionlist1", questions2: "questions2", questionlist2: "questionlist2", requestdata: "requestdata", formid: "formid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]])], decls: 4, vars: 3, consts: [[1, "container"], ["class", "alert alert-primary ", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-primary"], [3, "formGroup", "ngSubmit"], [1, "row"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [3, "ngClass"], [3, "formid", "question", "form", "questionlist", "requestform", 4, "ngIf"], [3, "formid", "question", "form", "questionlist", "requestform"], [1, "col-md-6"], [1, "d-flex", "justify-content-start"], [1, "btn", "btn-danger", 3, "click"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicFormComponent_form_2_Template, 8, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicFormComponent_form_3_Template, 14, 3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedform == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedform == 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormQuestionComponent"]], styles: ["app-question[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHluYW1pY3F1ZXN0aW9uZXIvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2R5bmFtaWNxdWVzdGlvbmVyL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcXVlc3Rpb257XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-form',
                templateUrl: './dynamic-form.component.html',
                styleUrls: ['./dynamic-form.component.scss'],
                providers: [_question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"]]
            }]
    }], function () { return [{ type: _question_control_service__WEBPACK_IMPORTED_MODULE_1__["QuestionControlService"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EventEmitterService"] }]; }, { questions1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionlist1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questions2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionlist2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], requestdata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _app_utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/utils/globals */ "+zpZ");
/* harmony import */ var _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function AppComponent_div_0_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.gotoNavigate("/ManageRequest"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IAM OnBoarding Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_0_li_11_Template, 3, 0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.globle.userType == "admin");
} }
class AppComponent {
    constructor(globle, authserv, router) {
        this.globle = globle;
        this.authserv = authserv;
        this.router = router;
        this.title = 'IAMOnboardingPortal';
    }
    ngOnInit() {
    }
    gotoNavigate(view) {
        this.router.navigate([view]);
    }
    signOut() {
        this.authserv.signOut();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_utils_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", "bg-dark"], ["href", "", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse", "bg-dark"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-nav"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 16, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.globle.getloginstatus() == "true");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"]], styles: ["@media (max-width: 992px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-bottom: 15px;\n    width: 75%;\n    height: 100%;\n  }\n\n  .navbar-collapse.collapsing[_ngcontent-%COMP%] {\n    left: -75%;\n    transition: height 0s ease;\n  }\n\n  .navbar-collapse.show[_ngcontent-%COMP%] {\n    left: 0;\n    transition: left 300ms ease-in-out;\n  }\n\n  .navbar-toggler.collapsed[_ngcontent-%COMP%]    ~ .navbar-collapse[_ngcontent-%COMP%] {\n    transition: left 500ms ease-in-out;\n  }\n}\n.navbar[_ngcontent-%COMP%], .collapse[_ngcontent-%COMP%] {\n  background: #008080 !important;\n}\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUNOOztFQUVFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBQ047O0VBRUU7SUFDSSxPQUFBO0lBQ0Esa0NBQUE7RUFDTjs7RUFFRTtJQUNJLGtDQUFBO0VBQ047QUFDRjtBQUlBO0VBQ0ksOEJBQUE7QUFGSjtBQUtBO0VBQ0ksZUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcclxuICAgICAgICBsZWZ0OiAtNzUlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItY29sbGFwc2Uuc2hvdyB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlci5jb2xsYXBzZWQgfiAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgXHJcbn1cclxuXHJcbi5uYXZiYXIsIC5jb2xsYXBzZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4MDgwICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm5hdi1pdGVtIGF7XHJcbiAgICBmb250LXNpemU6MThweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_utils_globals__WEBPACK_IMPORTED_MODULE_1__["Globals"] }, { type: _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-mgl-timeline */ "elPL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_utils_AddHttpHeaderInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/utils/AddHttpHeaderInterceptor */ "BO8o");
/* harmony import */ var _app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/utils/event-emitter.service */ "9w+L");
/* harmony import */ var _app_utils_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/utils/checkbox-group/checkbox-group.component */ "+l/Z");
/* harmony import */ var _app_utils_checkbox_group_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/utils/checkbox-group/checkbox.component */ "sB0a");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_utils_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/utils/globals */ "+zpZ");
/* harmony import */ var _app_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/utils/loader/loader.component */ "7OfP");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_dynamicquestioner_dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/dynamicquestioner/dynamic-form-question/dynamic-form-question.component */ "MP6R");
/* harmony import */ var _pages_dynamicquestioner_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/dynamicquestioner/dynamic-form/dynamic-form.component */ "SbwR");
/* harmony import */ var _pages_createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/createquestioner/createquestioner.component */ "vHsX");
/* harmony import */ var _pages_questionerlist_questionerlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/questionerlist/questionerlist.component */ "QwkK");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_adminrequestlist_adminrequestlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/adminrequestlist/adminrequestlist.component */ "ZLkT");
/* harmony import */ var _app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../app/services/auth/auth.guard */ "25YW");
/* harmony import */ var _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/services/auth/auth.service */ "9ans");
/* harmony import */ var _pages_dynamicquestioner_dynamicquestionlist_dynamicquestionlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/dynamicquestioner/dynamicquestionlist/dynamicquestionlist.component */ "pRhy");
/* harmony import */ var _pages_userrequestlist_userrequestlist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/userrequestlist/userrequestlist.component */ "PGgz");
/* harmony import */ var _utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/popupdialog/popupdialog.component */ "yX1z");
/* harmony import */ var _pages_requestapproval_requestapproval_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/requestapproval/requestapproval.component */ "84Uz");
/* harmony import */ var _pages_timelinemodel_timelinemodel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/timelinemodel/timelinemodel.component */ "ceCz");
















/* Pages */
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_utils_globals__WEBPACK_IMPORTED_MODULE_13__["Globals"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _app_utils_AddHttpHeaderInterceptor__WEBPACK_IMPORTED_MODULE_8__["AddHttpHeaderInterceptor"],
            multi: true
        },
        _app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"],
        _app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
        _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_6__["MglTimelineModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _pages_dynamicquestioner_dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_17__["DynamicFormQuestionComponent"],
        _pages_dynamicquestioner_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormComponent"],
        _pages_createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_19__["CreatequestionerComponent"],
        _app_utils_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxGroupComponent"],
        _app_utils_checkbox_group_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"],
        _pages_questionerlist_questionerlist_component__WEBPACK_IMPORTED_MODULE_20__["QuestionerlistComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _pages_adminrequestlist_adminrequestlist_component__WEBPACK_IMPORTED_MODULE_22__["AdminrequestlistComponent"],
        _pages_dynamicquestioner_dynamicquestionlist_dynamicquestionlist_component__WEBPACK_IMPORTED_MODULE_25__["DynamicquestionlistComponent"],
        _app_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
        _pages_userrequestlist_userrequestlist_component__WEBPACK_IMPORTED_MODULE_26__["UserrequestlistComponent"],
        _utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_27__["PopupdialogComponent"],
        _pages_requestapproval_requestapproval_component__WEBPACK_IMPORTED_MODULE_28__["RequestapprovalComponent"],
        _pages_timelinemodel_timelinemodel_component__WEBPACK_IMPORTED_MODULE_29__["TimelinemodelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_6__["MglTimelineModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _pages_dynamicquestioner_dynamic_form_question_dynamic_form_question_component__WEBPACK_IMPORTED_MODULE_17__["DynamicFormQuestionComponent"],
                    _pages_dynamicquestioner_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormComponent"],
                    _pages_createquestioner_createquestioner_component__WEBPACK_IMPORTED_MODULE_19__["CreatequestionerComponent"],
                    _app_utils_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxGroupComponent"],
                    _app_utils_checkbox_group_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"],
                    _pages_questionerlist_questionerlist_component__WEBPACK_IMPORTED_MODULE_20__["QuestionerlistComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _pages_adminrequestlist_adminrequestlist_component__WEBPACK_IMPORTED_MODULE_22__["AdminrequestlistComponent"],
                    _pages_dynamicquestioner_dynamicquestionlist_dynamicquestionlist_component__WEBPACK_IMPORTED_MODULE_25__["DynamicquestionlistComponent"],
                    _app_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"],
                    _pages_userrequestlist_userrequestlist_component__WEBPACK_IMPORTED_MODULE_26__["UserrequestlistComponent"],
                    _utils_popupdialog_popupdialog_component__WEBPACK_IMPORTED_MODULE_27__["PopupdialogComponent"],
                    _pages_requestapproval_requestapproval_component__WEBPACK_IMPORTED_MODULE_28__["RequestapprovalComponent"],
                    _pages_timelinemodel_timelinemodel_component__WEBPACK_IMPORTED_MODULE_29__["TimelinemodelComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_6__["MglTimelineModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ],
                providers: [
                    _app_utils_globals__WEBPACK_IMPORTED_MODULE_13__["Globals"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _app_utils_AddHttpHeaderInterceptor__WEBPACK_IMPORTED_MODULE_8__["AddHttpHeaderInterceptor"],
                        multi: true
                    },
                    _app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_9__["EventEmitterService"],
                    _app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
                    _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZLkT":
/*!**********************************************************************!*\
  !*** ./src/app/pages/adminrequestlist/adminrequestlist.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminrequestlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminrequestlistComponent", function() { return AdminrequestlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loader/loader.component */ "7OfP");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globals */ "+zpZ");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AdminrequestlistComponent_div_2_div_15_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);
} }
function AdminrequestlistComponent_div_2_div_15_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 35);
} }
function AdminrequestlistComponent_div_2_div_15_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminrequestlistComponent_div_2_div_15_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminrequestlistComponent_div_2_div_15_div_18_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const record_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.approveRequest(record_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "color": "red" }; };
const _c1 = function () { return { "color": "green" }; };
const _c2 = function () { return { "color": "blue" }; };
function AdminrequestlistComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminrequestlistComponent_div_2_div_15_i_13_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminrequestlistComponent_div_2_div_15_i_14_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminrequestlistComponent_div_2_div_15_div_15_Template, 3, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminrequestlistComponent_div_2_div_15_Template_i_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const record_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.viewRequest(record_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdminrequestlistComponent_div_2_div_15_div_18_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r6.Applicationname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r6.created.substring(0, 13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r6.requestedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", record_r6.status == "Rejected" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0) || record_r6.status == "Completed" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1) || record_r6.status == "InProgress" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r6.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.status == "InProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r6.userCanedit == ctx_r5.userInfo.bankId);
} }
function AdminrequestlistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Application Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminrequestlistComponent_div_2_div_15_Template, 19, 13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.requestList);
} }
function AdminrequestlistComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No Request Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminrequestlistComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r18 = ctx_r20.index;
    const record_r17 = ctx_r20.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r18, " . ", record_r17, "");
} }
function AdminrequestlistComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminrequestlistComponent_div_44_div_1_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 != 0);
} }
const _c3 = function (a0) { return { "droolrejected": a0 }; };
function AdminrequestlistComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, record_r21.status == "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r21.fieldname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r21.fieldvalue);
} }
function AdminrequestlistComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const record_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, record_r23.status == "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r23.fieldname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r23.fieldvalue);
} }
class AdminrequestlistComponent {
    constructor(globle, comserv, modalService, router) {
        this.globle = globle;
        this.comserv = comserv;
        this.modalService = modalService;
        this.router = router;
        this.requestList = [];
        this.requestData = [];
        this.getRequestList();
    }
    ngOnInit() { }
    getRequestList() {
        this.showloading();
        this.userInfo = localStorage.getItem('userInfo');
        if (this.userInfo)
            this.userInfo = JSON.parse(this.userInfo);
        this.comserv.getAdminRequestRecord(this.userInfo.bankId).subscribe((response) => {
            console.log(response);
            this.requestList = response;
            this.requestList.forEach(request => {
                // if(request.teamA && request.teamB){
                //   if(request.teamA.status == "accepted" && request.teamB.status == "accepted")
                //     request.status = "Completed";
                //   else
                //     request.status = "Waiting";
                // }
                request.appInfo.forEach(element => {
                    if (element.fieldname == "Application Name")
                        request.Applicationname = element.fieldvalue;
                });
            });
        }, (error) => {
            console.log(error);
        }).add(() => {
            this.hideloading();
        });
    }
    viewRequest(record) {
        this.requestData = record;
    }
    approveRequest(record) {
        this.router.navigate(['/RequestApproval'], { state: record });
    }
    showloading() {
        this.loading = this.modalService.open(_utils_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], { centered: true, size: 'sm', backdrop: false });
    }
    hideloading() {
        if (this.loading)
            this.loading.close();
    }
}
AdminrequestlistComponent.ɵfac = function AdminrequestlistComponent_Factory(t) { return new (t || AdminrequestlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AdminrequestlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminrequestlistComponent, selectors: [["app-adminrequestlist"]], decls: 70, vars: 9, consts: [[1, "container"], [4, "ngIf"], ["id", "requestmodal", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "row", "justify-content-end"], [1, "statuscontainer", "bg-success", "text-white"], [1, "card"], [1, "row"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "col-md-5"], [1, "col-md-4"], ["class", "row reqitem", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], [1, "card", "reqheader", "bg-primary"], [1, "col-md-1"], [1, "col-md-3"], ["class", "card reqlistitem", 4, "ngFor", "ngForOf"], [1, "card", "reqlistitem"], [1, "questions", "col-md-3"], [1, "questions", "col-md-2"], [1, "questions", "col-md-2", 2, "font-weight", "500", 3, "ngStyle"], ["class", "fas fa-check float-center iconedit", 4, "ngIf"], ["class", "fas fa-times float-center iconedit", 4, "ngIf"], ["class", "spinner-grow text-primary float-center", "role", "status", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#requestmodal", 1, "fas", "fa-eye", "float-right", "iconedit", 3, "click"], ["class", "col-md-1", 4, "ngIf"], [1, "fas", "fa-check", "float-center", "iconedit"], [1, "fas", "fa-times", "float-center", "iconedit"], ["role", "status", 1, "spinner-grow", "text-primary", "float-center"], [1, "sr-only"], [1, "fas", "fa-edit", "float-right", "iconedit", 3, "click"], [1, "col-md-12", "d-flex", "justify-content-center"], [1, "row", "reqitem", 3, "ngClass"]], template: function AdminrequestlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminrequestlistComponent_div_2_Template, 16, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminrequestlistComponent_div_3_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Application ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Requested By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdminrequestlistComponent_div_44_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Application Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AdminrequestlistComponent_div_55_Template, 8, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Application Intagrated Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AdminrequestlistComponent_div_66_Template, 8, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.requestList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.applicationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.requestData.requestedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.rejectionInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.appInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.requestData.appIntagrationInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  background-color: #fbfeff;\n  padding: 10px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  background-color: #fbfeff;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem;\n}\n\n.reqlistitem[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n\n.reqitem[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.statuscontainer[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  padding: 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.reqheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 10px 10px;\n  color: #fff;\n}\n\n.droolrejected[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW5yZXF1ZXN0bGlzdC9hZG1pbnJlcXVlc3RsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQztFQUNHLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQztFQUNHLHNCQUFBO0FBQ0o7O0FBRUM7RUFDRyxpQkFBQTtBQUNKOztBQUVDO0VBQ0csV0FBQTtBQUNKOztBQUVDO0VBQ0csY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0g7O0FBRUE7RUFDRyxVQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbnJlcXVlc3RsaXN0L2FkbWlucmVxdWVzdGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjU0LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gfVxyXG4gXHJcbiAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMC4yMHJlbSAwLjUwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjU0LCAyNTUpO1xyXG4gfVxyXG4gXHJcbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuNTByZW0gMC41MHJlbTtcclxuIH1cclxuIFxyXG4gLnJlcWxpc3RpdGVte1xyXG4gICAgbWFyZ2luOjEwcHggMTBweDtcclxuIH1cclxuXHJcbiAucmVxaXRlbXtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiB9XHJcblxyXG4gLnN0YXR1c2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG5cclxuLnJlcWhlYWRlcntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIG1hcmdpbjoxMHB4IDEwcHg7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZHJvb2xyZWplY3RlZHtcclxuICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminrequestlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminrequestlist',
                templateUrl: './adminrequestlist.component.html',
                styleUrls: ['./adminrequestlist.component.scss']
            }]
    }], function () { return [{ type: _utils_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ceCz":
/*!****************************************************************!*\
  !*** ./src/app/pages/timelinemodel/timelinemodel.component.ts ***!
  \****************************************************************/
/*! exports provided: TimelinemodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinemodelComponent", function() { return TimelinemodelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TimelinemodelComponent_div_8_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.requestedBy, " ");
} }
function TimelinemodelComponent_div_8_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User ID : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.id, " ");
} }
function TimelinemodelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimelinemodelComponent_div_8_p_8_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimelinemodelComponent_div_8_p_9_Template, 4, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.budgeclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.textclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.requestedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.lastModified);
} }
class TimelinemodelComponent {
    constructor(modalService, datepipe) {
        this.modalService = modalService;
        this.datepipe = datepipe;
        this.timelinedata = [];
    }
    ngOnInit() {
        this.modalData.timeline.forEach(element => {
            let username = element.userType || "";
            let userid = element.userid || "";
            const budge = ["badge-warning", "badge-success", "badge-danger", "badge-info", "badge-primary", "badge-secondary"];
            const text = ["text-warning", "text-success", "text-danger", "text-info", "text-primary", "text-secondary"];
            let random = 0;
            if (element.status.toLowerCase().indexOf("resubmitted") >= 0)
                random = 3;
            else if (element.status.toLowerCase().indexOf("submitted request") >= 0)
                random = 4;
            else if (element.status.toLowerCase().indexOf("request assigned") >= 0)
                random = 0;
            else if (element.status.toLowerCase().indexOf("request accepted") >= 0)
                random = 1;
            else if (element.status.toLowerCase().indexOf("request approved") >= 0)
                random = 1;
            else if (element.status.toLowerCase().indexOf("request rejected") >= 0)
                random = 2;
            else if (element.status.toLowerCase().indexOf("waiting") >= 0)
                random = 0;
            console.log(random);
            this.timelinedata.push({ "requestedBy": username, "id": userid, "lastModified": element.lastmodifiedDate, "status": element.status, "budgeclass": budge[random], "textclass": text[random] });
        });
        this.timelinedata.reverse();
        // this.timelinedata.push({"requestedBy":"User "+this.modalData.requestedBy,"lastModified":this.modalData.created,"status":this.modalData.status});
        // if(this.modalData.teamA)
        //   this.timelinedata.push({"requestedBy":"TeamA "+this.modalData.teamA.assingedTo, "lastModified":this.modalData.teamA.lastModified, "status":this.modalData.teamA.status});
        // if(this.modalData.teamB)
        //   this.timelinedata.push({"requestedBy":"TeamB "+this.modalData.teamB.assingedTo, "lastModified":this.modalData.teamB.lastModified, "status":this.modalData.teamB.status});
        // this.timelinedata.forEach(element => {
        //   let dateObject = new Date(element.lastModified);
        //   element.lastModified = this.datepipe.transform(dateObject,"dd/MM/yyy HH:MM:SS").toString();
        // });
    }
    close() {
        this.modalService.dismissAll();
    }
}
TimelinemodelComponent.ɵfac = function TimelinemodelComponent_Factory(t) { return new (t || TimelinemodelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
TimelinemodelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelinemodelComponent, selectors: [["app-timelinemodel"]], inputs: { modalData: "modalData" }, decls: 13, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [2, "height", "500px", "overflow-y", "auto !important", "overflow", "hidden"], ["class", "vertical-timeline vertical-timeline--animate vertical-timeline--one-column", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "padding", "5px 20px", "margin", "20px", 3, "click"], [1, "vertical-timeline", "vertical-timeline--animate", "vertical-timeline--one-column"], [1, "vertical-timeline-item", "vertical-timeline-element"], [1, "vertical-timeline-element-icon", "bounce-in"], [1, "badge", "badge-dot", "badge-dot-xl", 3, "ngClass"], [1, "vertical-timeline-element-content", "bounce-in"], [1, "timeline-title", 3, "ngClass"], ["style", "font-size: 15px;text-transform:capitalize;", 4, "ngIf"], [1, "vertical-timeline-element-date"], [2, "font-size", "15px", "text-transform", "capitalize"]], template: function TimelinemodelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Request Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimelinemodelComponent_div_8_Template, 12, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelinemodelComponent_Template_button_click_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelinedata);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n  background: #eee;\n  margin-top: 20px;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n\n.mt-70[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.mb-70[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n\n.vertical-timeline[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  padding: 1.5rem 0 1rem;\n  left: 200px;\n  top: 50px;\n}\n\n.vertical-timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 150px;\n  height: 100%;\n  width: 4px;\n  background: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.vertical-timeline-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 1rem;\n}\n\n.vertical-timeline--animate[_ngcontent-%COMP%]   .vertical-timeline-element-icon.bounce-in[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation: cd-bounce-1 0.8s;\n}\n\n.vertical-timeline-element-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 140px;\n}\n\n.vertical-timeline-element-icon[_ngcontent-%COMP%]   .badge-dot-xl[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 5px #fff;\n}\n\n.badge-dot-xl[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: relative;\n}\n\n.badge[_ngcontent-%COMP%]:empty {\n  display: block;\n}\n\n.badge-dot-xl[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  border-radius: 0.25rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin: -5px 0 0 -5px;\n  background: #fff;\n}\n\n.vertical-timeline-element-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 190px;\n  font-size: 0.8rem;\n}\n\n.vertical-timeline-element-content[_ngcontent-%COMP%]   .timeline-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  text-transform: capitalize;\n  margin: 0 0 0.5rem;\n  padding: 2px 0 0;\n  font-weight: 700;\n}\n\n.vertical-timeline-element-content[_ngcontent-%COMP%]   .vertical-timeline-element-date[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  left: -220px;\n  top: 0;\n  padding-right: 10px;\n  text-align: right;\n  color: #687b8f;\n  font-size: 15px;\n  white-space: nowrap;\n  font-weight: 500;\n}\n\n.vertical-timeline-element-content[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGltZWxpbmVtb2RlbC90aW1lbGluZW1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUNBO0VBQ0csWUFBQTtBQUVIOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aW1lbGluZW1vZGVsL3RpbWVsaW5lbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDojZWVlO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxyXG59XHJcblxyXG4ubXQtNzAge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweFxyXG59XHJcblxyXG4ubWItNzAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgIGJvcmRlciA6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuIFxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbVxyXG59XHJcblxyXG4udmVydGljYWwtdGltZWxpbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAxcmVtO1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcblxyXG4udmVydGljYWwtdGltZWxpbmUtZWxlbWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtXHJcbn1cclxuXHJcbi52ZXJ0aWNhbC10aW1lbGluZS0tYW5pbWF0ZSAudmVydGljYWwtdGltZWxpbmUtZWxlbWVudC1pY29uLmJvdW5jZS1pbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgYW5pbWF0aW9uOiBjZC1ib3VuY2UtMSAuOHNcclxufVxyXG5cclxuLnZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxNDBweFxyXG59XHJcblxyXG4udmVydGljYWwtdGltZWxpbmUtZWxlbWVudC1pY29uIC5iYWRnZS1kb3QteGwge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmZmZcclxufVxyXG5cclxuLmJhZGdlLWRvdC14bCB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uYmFkZ2U6ZW1wdHkge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuLmJhZGdlLWRvdC14bDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogLTVweCAwIDAgLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxufVxyXG5cclxuLnZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbiAgICBmb250LXNpemU6IC44cmVtXHJcbn1cclxuXHJcbi52ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LWNvbnRlbnQgLnRpbWVsaW5lLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46IDAgMCAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDJweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4udmVydGljYWwtdGltZWxpbmUtZWxlbWVudC1jb250ZW50IC52ZXJ0aWNhbC10aW1lbGluZS1lbGVtZW50LWRhdGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMjIwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzY4N2I4ZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufVxyXG5cclxuLnZlcnRpY2FsLXRpbWVsaW5lLWVsZW1lbnQtY29udGVudDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelinemodelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timelinemodel',
                templateUrl: './timelinemodel.component.html',
                styleUrls: ['./timelinemodel.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, { modalData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jyfv":
/*!**********************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/question-base.ts ***!
  \**********************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
class QuestionBase {
    constructor(options = {}) {
        var _a, _b;
        this.value = options.value;
        this.key = (_a = options.key) !== null && _a !== void 0 ? _a : '';
        this.label = (_b = options.label) !== null && _b !== void 0 ? _b : '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
        this.minlength = options.minlength || 0;
        this.maxlength = options.maxlength || 0;
        this.minvalue = options.minvalue || 0;
        this.maxvalue = options.maxvalue || 0;
        this.validateExpression = options.validateExpression || '';
        this.multiselect = options.multiselect || false;
        this.isenabled = options.isenabled || false;
        this.status = options.status || false;
    }
}


/***/ }),

/***/ "pRhy":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/dynamicquestionlist/dynamicquestionlist.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DynamicquestionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicquestionlistComponent", function() { return DynamicquestionlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dynamicquestioner/question-types */ "roKM");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "OlR4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/event-emitter.service */ "9w+L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamic-form/dynamic-form.component */ "SbwR");








function DynamicquestionlistComponent_app_dynamic_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dynamic-form", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions1", ctx_r0.questions1$)("questionlist1", ctx_r0.questionlist1)("requestdata", ctx_r0.oldrequestdata)("questions2", ctx_r0.questions2$)("questionlist2", ctx_r0.questionlist2)("formid", ctx_r0.formid);
} }
class DynamicquestionlistComponent {
    constructor(comserv, router, eventEmitterService) {
        this.comserv = comserv;
        this.router = router;
        this.eventEmitterService = eventEmitterService;
        this.oldrequestdata = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
        this.getQuestionerList("Form").then(() => {
            let ftype = this.oldrequestdata ? this.oldrequestdata.appType : "API";
            this.getQuestionerList(ftype);
        });
    }
    getQuestionerList(formType) {
        let questionlist = [];
        var promise = new Promise((resolve, reject) => {
            this.comserv.getQuestionerList(formType).subscribe(data => {
                if (formType != "Form") {
                    this.questionlist2 = [];
                    this.questions2$ = questionlist;
                    let fvalue = new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["DropdownQuestion"]({
                        key: "1234567890",
                        label: "Form Type",
                        options: [{ key: "API", value: "API" }, { key: "AD", value: "AD" }, { key: "JDBC", value: "JDBC" }, { key: "OUD", value: "OUD" }],
                        value: formType,
                        required: true,
                        order: 1,
                        isenabled: true,
                        status: true
                    });
                    questionlist.push(fvalue);
                    this.questionlist2.push({
                        "id": "1234567890",
                        "fieldName": "Form Type",
                        "formType": "API",
                        "fieldProperties": {
                            "type": "dropdown",
                            "dataType": "text",
                            "validateExpression": "",
                            "minLength": 0,
                            "maxLength": 0,
                            "minValue": 0,
                            "maxValue": 0,
                            "mandotary": true,
                            "qualificationCriteia": "Required",
                            "isEnabled": true
                        }
                    });
                }
                let oldreqdata = [];
                if (this.oldrequestdata && formType == "Form")
                    oldreqdata = this.oldrequestdata.appInfo || [];
                if (this.oldrequestdata && formType != "Form")
                    oldreqdata = this.oldrequestdata.appIntagrationInfo || [];
                this.formid = data[0].id;
                data[0].formFields.forEach((element, index) => {
                    if (element.fieldProperties.isEnabled) {
                        let i = questionlist.length + 1;
                        let oldreqvalue;
                        let oldreqstatus;
                        if (oldreqdata.length > 0) {
                            let oldreqfil = oldreqdata.filter(rec => rec.fieldname === element.fieldName);
                            oldreqfil = oldreqfil || [];
                            if (oldreqfil.length > 0) {
                                oldreqvalue = oldreqfil[0].fieldvalue || "";
                                oldreqstatus = oldreqfil[0].status || "";
                            }
                        }
                        oldreqvalue = oldreqvalue || "";
                        if (element.fieldProperties.type == "textField") {
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["TextboxQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                validateExpression: element.fieldProperties.validateExpression,
                                type: element.fieldProperties.dataType,
                                minlength: element.fieldProperties.minLength,
                                maxlength: element.fieldProperties.maxLength,
                                minvalue: element.fieldProperties.minValue,
                                maxvalue: element.fieldProperties.maxValue,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                        else if (element.fieldProperties.type == "dropdown") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            if (element.fieldProperties.multiselect) {
                                questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["MultiDropdownQuestion"]({
                                    key: element.id,
                                    label: element.fieldName,
                                    options: listvalue,
                                    value: oldreqvalue,
                                    required: element.fieldProperties.mandotary,
                                    order: i,
                                    isenabled: element.fieldProperties.isEnabled,
                                    status: oldreqstatus
                                }));
                            }
                            else {
                                questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["DropdownQuestion"]({
                                    key: element.id,
                                    label: element.fieldName,
                                    options: listvalue,
                                    value: oldreqvalue,
                                    required: element.fieldProperties.mandotary,
                                    order: i,
                                    isenabled: element.fieldProperties.isEnabled,
                                    status: oldreqstatus
                                }));
                            }
                        }
                        else if (element.fieldProperties.type == "checkedoption") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["CheckboxQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                options: listvalue,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                        else if (element.fieldProperties.type == "radiooption") {
                            let listvalue = [];
                            element.fieldProperties.value.forEach(ele => {
                                listvalue.push({ key: ele.key, value: ele.value });
                            });
                            questionlist.push(new _dynamicquestioner_question_types__WEBPACK_IMPORTED_MODULE_1__["RadiobuttonQuestion"]({
                                key: element.id,
                                label: element.fieldName,
                                options: listvalue,
                                value: oldreqvalue,
                                required: element.fieldProperties.mandotary,
                                order: i,
                                isenabled: element.fieldProperties.isEnabled,
                                status: oldreqstatus
                            }));
                        }
                    }
                });
                if (formType == "Form") {
                    this.questionlist1 = data[0].formFields;
                    this.questions1$ = questionlist;
                }
                else {
                    data[0].formFields.forEach(element => {
                        this.questionlist2.push(element);
                    });
                    this.questions2$ = questionlist;
                }
            }).add(() => {
                console.log(this.questions1$);
                console.log(this.questions2$);
                resolve("");
            });
        });
        return promise;
    }
}
DynamicquestionlistComponent.ɵfac = function DynamicquestionlistComponent_Factory(t) { return new (t || DynamicquestionlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"])); };
DynamicquestionlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicquestionlistComponent, selectors: [["app-dynamicquestionlist"]], decls: 3, vars: 1, consts: [[1, "bodyview"], [3, "questions1", "questionlist1", "requestdata", "questions2", "questionlist2", "formid", 4, "ngIf"], [3, "questions1", "questionlist1", "requestdata", "questions2", "questionlist2", "formid"]], template: function DynamicquestionlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicquestionlistComponent_app_dynamic_form_2_Template, 1, 6, "app-dynamic-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questions1$ && ctx.questions2$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"]], styles: [".bodyview[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHluYW1pY3F1ZXN0aW9uZXIvZHluYW1pY3F1ZXN0aW9ubGlzdC9keW5hbWljcXVlc3Rpb25saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2R5bmFtaWNxdWVzdGlvbmVyL2R5bmFtaWNxdWVzdGlvbmxpc3QvZHluYW1pY3F1ZXN0aW9ubGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5dmlld3tcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicquestionlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamicquestionlist',
                templateUrl: './dynamicquestionlist.component.html',
                styleUrls: ['./dynamicquestionlist.component.scss']
            }]
    }], function () { return [{ type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utils_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] }]; }, null); })();


/***/ }),

/***/ "roKM":
/*!***********************************************************!*\
  !*** ./src/app/pages/dynamicquestioner/question-types.ts ***!
  \***********************************************************/
/*! exports provided: DropdownQuestion, MultiDropdownQuestion, TextboxQuestion, CheckboxQuestion, RadiobuttonQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDropdownQuestion", function() { return MultiDropdownQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxQuestion", function() { return CheckboxQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonQuestion", function() { return RadiobuttonQuestion; });
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-base */ "jyfv");

class DropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'dropdown';
    }
}
class MultiDropdownQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'multidropdown';
    }
}
class TextboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'textbox';
    }
}
class CheckboxQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'checkedoption';
    }
}
class RadiobuttonQuestion extends _question_base__WEBPACK_IMPORTED_MODULE_0__["QuestionBase"] {
    constructor() {
        super(...arguments);
        this.controlType = 'radiooption';
    }
}


/***/ }),

/***/ "sB0a":
/*!************************************************************!*\
  !*** ./src/app/utils/checkbox-group/checkbox.component.ts ***!
  \************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-group.component */ "+l/Z");



const _c0 = ["*"];
class CheckboxComponent {
    constructor(checkboxGroup) {
        this.checkboxGroup = checkboxGroup;
    }
    toggleCheck() {
        this.checkboxGroup.addOrRemove(this.value);
    }
    isChecked() {
        return this.checkboxGroup.contains(this.value);
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxGroupComponent"], 1)); };
CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["checkbox"]], inputs: { value: "value" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "click"], ["type", "checkbox", 3, "checked"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckboxComponent_Template_div_click_0_listener() { return ctx.toggleCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isChecked());
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkbox',
                template: `
    <div (click)="toggleCheck()">
        <input type="checkbox" [checked]="isChecked()" />
        <ng-content></ng-content>
    </div>`
            }]
    }], function () { return [{ type: _checkbox_group_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxGroupComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vHsX":
/*!**********************************************************************!*\
  !*** ./src/app/pages/createquestioner/createquestioner.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreatequestionerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatequestionerComponent", function() { return CreatequestionerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "OlR4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreatequestionerComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Option Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Source URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Custom Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Option List Source Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_46_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequestionerComponent_div_46_li_14_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeCustomItem(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coptlist_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coptlist_r11.key);
} }
const _c0 = function () { return { standalone: true }; };
function CreatequestionerComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom Option List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Key : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatequestionerComponent_div_46_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.coptKey = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Value : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatequestionerComponent_div_46_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.coptValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequestionerComponent_div_46_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.addCustomItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreatequestionerComponent_div_46_li_14_Template, 3, 1, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.coptKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.coptValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.customoptionlist);
} }
function CreatequestionerComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Allow Multi Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Multi Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Field Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Alpha Numberic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Minimum Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maximum Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Minimum Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maximum Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatequestionerComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Validate Expression");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const urlFormat = /^(https?|ftp):\/\/[^\s$.?#].[^\s]*$/;
class CreatequestionerComponent {
    constructor(formBuilder, comserv, modalService) {
        this.formBuilder = formBuilder;
        this.comserv = comserv;
        this.modalService = modalService;
        this.customoptionlist = [];
        this.headertitle = "";
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Id: [''],
            formGrpName: [''],
            fieldName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            fieldtype: ['textField', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            optiontype: ['customlist'],
            options: this.formBuilder.array([]),
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(urlFormat)]],
            multiselect: [false],
            fielddataType: ['text'],
            minLength: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0)]],
            maxLength: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0)]],
            minValue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0)]],
            maxValue: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(0)]],
            validateExpression: [''],
            qualificationCriteia: ['Required', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mandotary: [true],
            IsEnabled: [true],
            formType: ["Form", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        if (this.modalData && this.modalType == "Update") {
            this.questionList = this.questionList.filter(obj => obj.id !== this.modalData.id);
            this.registerForm.controls.Id.setValue(this.modalData.id || "");
            this.registerForm.controls.formGrpName.setValue(this.modalData.formGrpName || "");
            this.registerForm.controls.fieldName.setValue(this.modalData.fieldName || "");
            this.registerForm.controls.fieldtype.setValue(this.modalData.fieldProperties.type || "");
            if (this.modalData.fieldProperties.type == "dropdown" || this.modalData.fieldProperties.type == "radiooption" || this.modalData.fieldProperties.type == "checkedoption") {
                if (this.modalData.fieldProperties.source)
                    this.registerForm.controls.optiontype.setValue("sourceurl");
                else
                    this.registerForm.controls.optiontype.setValue("customlist");
            }
            if (this.modalData.fieldProperties.options)
                this.registerForm.controls.options.setValue(this.formBuilder.array(this.modalData.fieldProperties.options || []));
            this.registerForm.controls.source.setValue(this.modalData.fieldProperties.source || "");
            this.registerForm.controls.multiselect.setValue(this.modalData.fieldProperties.multiselect || false);
            this.registerForm.controls.fielddataType.setValue(this.modalData.fieldProperties.dataType);
            this.registerForm.controls.minLength.setValue(this.modalData.fieldProperties.minLength);
            this.registerForm.controls.maxLength.setValue(this.modalData.fieldProperties.maxLength);
            this.registerForm.controls.minValue.setValue(this.modalData.fieldProperties.minValue);
            this.registerForm.controls.maxValue.setValue(this.modalData.fieldProperties.maxValue);
            this.registerForm.controls.validateExpression.setValue(this.modalData.fieldProperties.validateExpression);
            this.registerForm.controls.qualificationCriteia.setValue(this.modalData.fieldProperties.qualificationCriteia);
            this.registerForm.controls.mandotary.setValue(this.modalData.fieldProperties.mandotary);
            this.registerForm.controls.IsEnabled.setValue(this.modalData.fieldProperties.isEnabled);
            this.registerForm.controls.formType.setValue(this.modalData.fieldProperties.formType || "Form");
            this.customoptionlist = this.modalData.fieldProperties.value || [];
            this.registerForm.controls['formType'].disable();
        }
        if (this.modalType == "Update")
            this.headertitle = "Update Request Data";
        else
            this.headertitle = "Create Request Data";
    }
    addCustomItem() {
        if (this.coptKey != "" && this.coptKey != null && this.coptValue != "" && this.coptValue != null) {
            this.customoptionlist.push({ key: this.coptKey, value: this.coptValue });
            this.coptKey = "";
            this.coptValue = "";
        }
        this.registerForm.controls.options = this.formBuilder.array(this.customoptionlist);
    }
    removeCustomItem(index) {
        this.customoptionlist.splice(index, 1);
        this.registerForm.controls.options = this.formBuilder.array(this.customoptionlist);
    }
    createQuestion() {
        let data = {};
        if (this.registerForm.value.fieldtype == "textField") {
            data = {
                "fieldName": this.registerForm.value.fieldName,
                "formType": this.registerForm.value.formType,
                "fieldProperties": {
                    "type": this.registerForm.value.fieldtype,
                    "dataType": this.registerForm.value.fielddataType,
                    "validateExpression": this.registerForm.value.validateExpression,
                    "minLength": this.registerForm.value.minLength,
                    "maxLength": this.registerForm.value.maxLength,
                    "minValue": this.registerForm.value.minValue,
                    "maxValue": this.registerForm.value.maxValue,
                    "mandotary": this.registerForm.value.mandotary,
                    "qualificationCriteia": this.registerForm.value.qualificationCriteia,
                    "isEnabled": this.registerForm.value.IsEnabled,
                }
            };
        }
        else if (this.registerForm.value.fieldtype == "dropdown" || this.registerForm.value.fieldtype == "checkedoption") {
            data = {
                "fieldName": this.registerForm.value.fieldName,
                "formType": this.registerForm.value.formType,
                "fieldProperties": {
                    "type": this.registerForm.value.fieldtype,
                    "value": this.customoptionlist,
                    "mandotary": this.registerForm.value.mandotary,
                    "qualificationCriteia": this.registerForm.value.qualificationCriteia,
                    "isEnabled": this.registerForm.value.IsEnabled,
                    "multiselect": this.registerForm.value.multiselect,
                }
            };
        }
        else if (this.registerForm.value.fieldtype == "radiooption") {
            data = {
                "fieldName": this.registerForm.value.fieldName,
                "formType": this.registerForm.value.formType,
                "fieldProperties": {
                    "type": this.registerForm.value.fieldtype,
                    "value": this.customoptionlist,
                    "mandotary": this.registerForm.value.mandotary,
                    "qualificationCriteia": this.registerForm.value.qualificationCriteia,
                    "isEnabled": this.registerForm.value.IsEnabled,
                }
            };
        }
        if (this.modalType == "Update") {
            data.id = this.registerForm.value.Id;
            this.comserv.updateQuestioner(data).subscribe((response) => {
                this.close();
            }, (error) => {
                console.log(error);
            });
        }
        else {
            this.comserv.addNewQuestioner(data).subscribe((response) => {
                this.close();
            }, (error) => {
                console.log(error);
            });
        }
    }
    close() {
        this.modalService.dismissAll();
    }
}
CreatequestionerComponent.ɵfac = function CreatequestionerComponent_Factory(t) { return new (t || CreatequestionerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
CreatequestionerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatequestionerComponent, selectors: [["app-createquestioner"]], inputs: { modalType: "modalType", modalData: "modalData", questionList: "questionList" }, decls: 88, vars: 13, consts: [[3, "formGroup", "ngSubmit"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-6"], [1, "carditemslable"], ["formControlName", "formType", 1, "form-control"], ["value", "Form"], ["value", "API"], ["value", "AD"], ["value", "OUD"], ["value", "JDBC"], ["formControlName", "fieldName", "type", "text", 1, "form-control"], ["formControlName", "fieldtype", 1, "form-control"], ["value", "textField"], ["value", "dropdown"], ["value", "radiooption"], ["value", "checkedoption"], ["class", "row", 4, "ngIf"], ["formControlName", "qualificationCriteia", 1, "form-control"], ["value", "Required", "selected", ""], ["value", "NotRequired"], ["value", "Condition"], [1, "form-check-inline"], [1, "form-check-label"], ["type", "checkbox", "formControlName", "mandotary", 1, "form-check-input"], ["type", "checkbox", "formControlName", "IsEnabled", 1, "form-check-input"], [1, "modal-footer"], [1, "d-flex", "justify-content-around"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["formControlName", "optiontype", 1, "form-control"], ["value", "sourceurl"], ["value", "customlist"], ["formControlName", "source", "type", "url", 1, "form-control"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "row", "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "fas", "fa-trash", "float-right", "iconremove", 3, "click"], ["type", "checkbox", "formControlName", "multiselect", 1, "form-check-input"], ["formControlName", "fielddataType", 1, "form-control"], ["value", "text", "selected", ""], ["value", "number"], ["formControlName", "minLength", "min", "0", "type", "number", 1, "form-control"], ["formControlName", "maxLength", "min", "0", "type", "number", 1, "form-control"], ["formControlName", "minValue", "min", "0", "type", "number", 1, "form-control"], ["formControlName", "maxValue", "min", "0", "type", "number", 1, "form-control"], ["formControlName", "validateExpression", "type", "text", 1, "form-control"]], template: function CreatequestionerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatequestionerComponent_Template_form_ngSubmit_0_listener() { return ctx.createQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatequestionerComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Form Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JDBC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Field Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Field Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Text Field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Radio Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Checked Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CreatequestionerComponent_div_44_Template, 10, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CreatequestionerComponent_div_45_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreatequestionerComponent_div_46_Template, 15, 7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreatequestionerComponent_div_47_Template, 9, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreatequestionerComponent_div_48_Template, 10, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CreatequestionerComponent_div_49_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CreatequestionerComponent_div_50_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CreatequestionerComponent_div_51_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CreatequestionerComponent_div_52_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, CreatequestionerComponent_div_53_Template, 6, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Qualification Criteia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Not Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Mandotary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Is Mandotary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Allow Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Is Enabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headertitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "dropdown" || ctx.registerForm.value.fieldtype == "checkedoption" || ctx.registerForm.value.fieldtype == "radiooption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.registerForm.value.fieldtype == "dropdown" || ctx.registerForm.value.fieldtype == "checkedoption" || ctx.registerForm.value.fieldtype == "radiooption") && ctx.registerForm.value.optiontype == "sourceurl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.registerForm.value.fieldtype == "dropdown" || ctx.registerForm.value.fieldtype == "checkedoption" || ctx.registerForm.value.fieldtype == "radiooption") && ctx.registerForm.value.optiontype == "customlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField" && ctx.registerForm.value.fielddataType == "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField" && ctx.registerForm.value.fielddataType == "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.value.fieldtype == "textField" && ctx.registerForm.value.fielddataType == "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".carditemslable[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.iconremove[_ngcontent-%COMP%]:hover {\n  color: orangered;\n  cursor: pointer;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding: 7px 15px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.close[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlcXVlc3Rpb25lci9jcmVhdGVxdWVzdGlvbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQztFQUNJLFlBQUE7QUFDTDs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlcXVlc3Rpb25lci9jcmVhdGVxdWVzdGlvbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRpdGVtc2xhYmxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuIH1cclxuXHJcbiAucm93e1xyXG4gICAgIG1hcmdpbjogMTBweDtcclxuIH1cclxuXHJcbi5pY29ucmVtb3ZlOmhvdmVye1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keXtcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgIG92ZXJmbG93OmF1dG87XHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatequestionerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createquestioner',
                templateUrl: './createquestioner.component.html',
                styleUrls: ['./createquestioner.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }]; }, { modalType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modalData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_questionerlist_questionerlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/questionerlist/questionerlist.component */ "QwkK");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_adminrequestlist_adminrequestlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/adminrequestlist/adminrequestlist.component */ "ZLkT");
/* harmony import */ var _pages_userrequestlist_userrequestlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/userrequestlist/userrequestlist.component */ "PGgz");
/* harmony import */ var _pages_dynamicquestioner_dynamicquestionlist_dynamicquestionlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dynamicquestioner/dynamicquestionlist/dynamicquestionlist.component */ "pRhy");
/* harmony import */ var _pages_requestapproval_requestapproval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/requestapproval/requestapproval.component */ "84Uz");
/* harmony import */ var _app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/services/auth/auth.guard */ "25YW");












const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'AdminRequestList', component: _pages_adminrequestlist_adminrequestlist_component__WEBPACK_IMPORTED_MODULE_5__["AdminrequestlistComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: 'AdminRequestList' } },
    { path: 'UserRequestList', component: _pages_userrequestlist_userrequestlist_component__WEBPACK_IMPORTED_MODULE_6__["UserrequestlistComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: 'UserRequestList' } },
    { path: 'UserRequest', component: _pages_dynamicquestioner_dynamicquestionlist_dynamicquestionlist_component__WEBPACK_IMPORTED_MODULE_7__["DynamicquestionlistComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: 'CreateNewRequest' } },
    { path: 'ManageRequest', component: _pages_questionerlist_questionerlist_component__WEBPACK_IMPORTED_MODULE_3__["QuestionerlistComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: 'QuestionerList' } },
    { path: 'RequestApproval', component: _pages_requestapproval_requestapproval_component__WEBPACK_IMPORTED_MODULE_8__["RequestapprovalComponent"], canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], data: { roles: 'RequestApproval' } },
    { path: 'Login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yX1z":
/*!************************************************************!*\
  !*** ./src/app/utils/popupdialog/popupdialog.component.ts ***!
  \************************************************************/
/*! exports provided: PopupdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupdialogComponent", function() { return PopupdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PopupdialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.modalTitle);
} }
function PopupdialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.modalContent);
} }
function PopupdialogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupdialogComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupdialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupdialogComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.close("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupdialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupdialogComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.close("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopupdialogComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    close(data) {
        this.modalService.dismissAll(data);
    }
}
PopupdialogComponent.ɵfac = function PopupdialogComponent_Factory(t) { return new (t || PopupdialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
PopupdialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupdialogComponent, selectors: [["app-popupdialog"]], inputs: { modalType: "modalType", modalTitle: "modalTitle", modalContent: "modalContent" }, decls: 8, vars: 5, consts: [[1, "container"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"]], template: function PopupdialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupdialogComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopupdialogComponent_div_2_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PopupdialogComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupdialogComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopupdialogComponent_div_7_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalTitle != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalContent != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalType == "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalType == "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modalType == "ALERT");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvcG9wdXBkaWFsb2cvcG9wdXBkaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91dGlscy9wb3B1cGRpYWxvZy9wb3B1cGRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgIHBhZGRpbmc6NXB4IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupdialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popupdialog',
                templateUrl: './popupdialog.component.html',
                styleUrls: ['./popupdialog.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { modalType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modalTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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