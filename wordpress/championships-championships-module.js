(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["championships-championships-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-info/championship-info.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-info/championship-info.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n  <div class=\"banner-ch\" [style.margin]=\"'1rem'\">\r\n    <img [style.max-height]=\"'150px'\" mat-card-image src=\"{{championship?.img}}\" alt=\"Alt\">\r\n  </div>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h1 [style.margin-left]=\"'-1rem'\">\r\n        {{championship?.name}}\r\n      </h1>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{championship?.description}}\r\n    </p>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Matches\">\r\n        <div class=\"match-vs-container\" *ngFor=\"let match of matches\">\r\n          <app-match-vs [match]=\"match\"></app-match-vs>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Standings\">\r\n        <app-standing-table-groups *ngIf=\"championship.groups\" [standingGroups]=\"standingGroups\">\r\n        </app-standing-table-groups>\r\n        <app-standing-table *ngIf=\"!championship.groups\" [standingTeams]=\"standingGroups\"></app-standing-table>\r\n      </mat-tab>\r\n      <mat-tab label=\"Newsletters\">\r\n        <app-newsletters [newsletters]=\"championship?.newsletters\"></app-newsletters>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n  </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-list/championship-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-list/championship-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list>\r\n  <mat-list-item *ngFor=\"let c of championships\">\r\n    <img matListAvatar src=\"{{c.img}}\" alt=\"...\">\r\n    <a routerLink=\"{{'/championships/' + c.id}}\">{{c.name}}</a>\r\n  </mat-list-item>\r\n</mat-list>\r\n");

/***/ }),

/***/ "./src/app/championships/championship-info/championship-info.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/championships/championship-info/championship-info.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwLWluZm8vY2hhbXBpb25zaGlwLWluZm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/championships/championship-info/championship-info.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/championships/championship-info/championship-info.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChampionshipInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipInfoComponent", function() { return ChampionshipInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_championships_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/championships.service */ "./src/app/services/championships.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var ChampionshipInfoComponent = /** @class */ (function () {
    function ChampionshipInfoComponent(championshipService, router, route) {
        this.championshipService = championshipService;
        this.router = router;
        this.route = route;
        var snapshot = router.routerState.snapshot;
        this.championship = {};
        this.standingGroups = [];
    }
    ChampionshipInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id > 0) {
                _this.getChampionship(_this.id);
                _this.getMatches(_this.id);
                _this.getStandings(_this.id);
            }
            else {
                _this.getChampionshipFirst();
            }
        });
    };
    ChampionshipInfoComponent.prototype.getChampionship = function (id) {
        var _this = this;
        this.championshipService.getChampionshipById(id)
            .subscribe(function (championship) {
            _this.championship = championship.find(function (x) { return x.id == id; });
        });
    };
    ChampionshipInfoComponent.prototype.getChampionshipFirst = function () {
        var _this = this;
        this.championshipService.getChampionshipFirst()
            .subscribe(function (championship) {
            _this.championship = championship;
            _this.getMatches(_this.championship.id);
            _this.getStandings(_this.championship.id);
        });
    };
    ChampionshipInfoComponent.prototype.getStandings = function (id) {
        var _this = this;
        this.championshipService.getStandingsById(id)
            .subscribe(function (standingGroups) {
            _this.standingGroups = standingGroups;
        });
    };
    ChampionshipInfoComponent.prototype.getMatches = function (id) {
        var _this = this;
        this.championshipService.getMatchesById(id)
            .subscribe(function (matches) {
            _this.matches = matches;
        });
    };
    ChampionshipInfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ChampionshipInfoComponent.ctorParameters = function () { return [
        { type: _services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ChampionshipInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-championship-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./championship-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-info/championship-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./championship-info.component.css */ "./src/app/championships/championship-info/championship-info.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ChampionshipInfoComponent);
    return ChampionshipInfoComponent;
}());



/***/ }),

/***/ "./src/app/championships/championship-list/championship-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/championships/championship-list/championship-list.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW1waW9uc2hpcHMvY2hhbXBpb25zaGlwLWxpc3QvY2hhbXBpb25zaGlwLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/championships/championship-list/championship-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/championships/championship-list/championship-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChampionshipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipListComponent", function() { return ChampionshipListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_championships_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/championships.service */ "./src/app/services/championships.service.ts");



var ChampionshipListComponent = /** @class */ (function () {
    function ChampionshipListComponent(championshipSvc) {
        this.championshipSvc = championshipSvc;
        this.championships = [];
    }
    ChampionshipListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.championshipSvc.getChampionships().subscribe(function (data) {
            _this.championships = data;
        });
    };
    ChampionshipListComponent.ctorParameters = function () { return [
        { type: _services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"] }
    ]; };
    ChampionshipListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-championship-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./championship-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/championships/championship-list/championship-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./championship-list.component.css */ "./src/app/championships/championship-list/championship-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"]])
    ], ChampionshipListComponent);
    return ChampionshipListComponent;
}());



/***/ }),

/***/ "./src/app/championships/championships-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/championships/championships-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ChampionshipsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsRoutingModule", function() { return ChampionshipsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _championship_list_championship_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./championship-list/championship-list.component */ "./src/app/championships/championship-list/championship-list.component.ts");
/* harmony import */ var _championship_info_championship_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./championship-info/championship-info.component */ "./src/app/championships/championship-info/championship-info.component.ts");





var routes = [
    {
        path: '',
        component: _championship_list_championship_list_component__WEBPACK_IMPORTED_MODULE_3__["ChampionshipListComponent"]
    },
    {
        path: ':id',
        component: _championship_info_championship_info_component__WEBPACK_IMPORTED_MODULE_4__["ChampionshipInfoComponent"]
    }
];
var ChampionshipsRoutingModule = /** @class */ (function () {
    function ChampionshipsRoutingModule() {
    }
    ChampionshipsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChampionshipsRoutingModule);
    return ChampionshipsRoutingModule;
}());



/***/ }),

/***/ "./src/app/championships/championships.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/championships/championships.module.ts ***!
  \*******************************************************/
/*! exports provided: ChampionshipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsModule", function() { return ChampionshipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _championships_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./championships-routing.module */ "./src/app/championships/championships-routing.module.ts");
/* harmony import */ var _championship_list_championship_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./championship-list/championship-list.component */ "./src/app/championships/championship-list/championship-list.component.ts");
/* harmony import */ var _championship_info_championship_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./championship-info/championship-info.component */ "./src/app/championships/championship-info/championship-info.component.ts");
/* harmony import */ var _services_championships_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/championships.service */ "./src/app/services/championships.service.ts");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../ccommon/ccommon.module */ "./src/app/ccommon/ccommon.module.ts");









var ChampionshipsModule = /** @class */ (function () {
    function ChampionshipsModule() {
    }
    ChampionshipsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_championship_list_championship_list_component__WEBPACK_IMPORTED_MODULE_4__["ChampionshipListComponent"], _championship_info_championship_info_component__WEBPACK_IMPORTED_MODULE_5__["ChampionshipInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _championships_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChampionshipsRoutingModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_7__["MaterialImportsModule"],
                _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_8__["CcommonModule"]
            ],
            providers: [_services_championships_service__WEBPACK_IMPORTED_MODULE_6__["ChampionshipsService"]]
        })
    ], ChampionshipsModule);
    return ChampionshipsModule;
}());



/***/ })

}]);
//# sourceMappingURL=championships-championships-module.js.map