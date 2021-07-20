(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-info/player-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-info/player-info.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\r\n  <div class=\"banner-ch\" [style.margin]=\"'1rem'\">\r\n    <img [style.max-height]=\"'150px'\" [style.max-width]=\"'250px'\" mat-card-image src=\"{{player?.img}}\" class=\"\" alt=\"Alt\">\r\n  </div>\r\n  <mat-card-header>\r\n    <h1 [style.margin-left]=\"'-1rem'\">\r\n      {{player?.name}}\r\n    </h1>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Biography\">\r\n        <p>\r\n          {{player?.biography}}\r\n        </p>\r\n      </mat-tab>\r\n      <mat-tab label=\"Newsletters\">\r\n        <app-newsletters [newsletters]=\"player?.newsletters\"></app-newsletters>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-list/player-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-list/player-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <mat-card *ngFor=\"let item of players\" style=\"display: inline-block; margin: 20px; width: 140px;\">\r\n      <img src=\"{{item.icon}}\" style=\"width: 100px;\" class=\"mat-card-image\" alt=\"image caption\">\r\n      <mat-card-content>\r\n        <h2>{{item.name}}</h2>\r\n        <p>{{item.description}}</p>\r\n      </mat-card-content>\r\n      <mat-card-footer>\r\n        <a routerLink=\"/players/{{item.id}}\">SHOW</a>\r\n      </mat-card-footer>\r\n    </mat-card>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./src/app/player/player-info/player-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/player/player-info/player-info.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXItaW5mby9wbGF5ZXItaW5mby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/player/player-info/player-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/player/player-info/player-info.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoComponent", function() { return PlayerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var PlayerInfoComponent = /** @class */ (function () {
    function PlayerInfoComponent(playerService, router, route) {
        this.playerService = playerService;
        this.router = router;
        this.route = route;
        var snapshot = router.routerState.snapshot;
    }
    PlayerInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            if (_this.id > 0) {
                _this.getPlayer(_this.id);
            }
            else {
                _this.getPlayer(1);
            }
        });
    };
    PlayerInfoComponent.prototype.getPlayer = function (id) {
        var _this = this;
        this.playerService.getPlayerById(id)
            .subscribe(function (player) { return _this.player = player; });
    };
    PlayerInfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PlayerInfoComponent.ctorParameters = function () { return [
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PlayerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-info/player-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-info.component.css */ "./src/app/player/player-info/player-info.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PlayerInfoComponent);
    return PlayerInfoComponent;
}());



/***/ }),

/***/ "./src/app/player/player-list/player-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXItbGlzdC9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/player/player-list/player-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/player/player-list/player-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");



var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(playerService) {
        this.playerService = playerService;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers().subscribe(function (data) {
            _this.players = data;
        });
    };
    PlayerListComponent.ctorParameters = function () { return [
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }
    ]; };
    PlayerListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./player-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player-list/player-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./player-list.component.css */ "./src/app/player/player-list/player-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/player/player-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/player/player-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlayerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutingModule", function() { return PlayerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
/* harmony import */ var _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-info/player-info.component */ "./src/app/player/player-info/player-info.component.ts");





var routes = [
    {
        path: '',
        component: _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayerListComponent"]
    },
    {
        path: ':id',
        component: _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_4__["PlayerInfoComponent"]
    }
];
var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/player/player-routing.module.ts");
/* harmony import */ var _player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-list/player-list.component */ "./src/app/player/player-list/player-list.component.ts");
/* harmony import */ var _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-info/player-info.component */ "./src/app/player/player-info/player-info.component.ts");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../ccommon/ccommon.module */ "./src/app/ccommon/ccommon.module.ts");








var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__["PlayerListComponent"], _player_info_player_info_component__WEBPACK_IMPORTED_MODULE_5__["PlayerInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _player_routing_module__WEBPACK_IMPORTED_MODULE_3__["PlayerRoutingModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_6__["MaterialImportsModule"],
                _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_7__["CcommonModule"]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ })

}]);
//# sourceMappingURL=player-player-module.js.map