(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-info/team-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-info/team-info.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\" *ngIf=\"team\">\r\n  <div class=\"banner-ch\" [style.margin]=\"'1rem'\">\r\n    <img [style.max-height]=\"'150px'\" mat-card-image src=\"{{team.img}}\" class=\"\" alt=\"Alt\">\r\n  </div>\r\n  <mat-card-header>\r\n    <h1 [style.margin-left]=\"'-1rem'\">\r\n      {{team.name}}\r\n    </h1>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{team.biography}}\r\n    </p>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n    <mat-tab-group>\r\n      <mat-tab label=\"Players\">\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let player of players\">\r\n            <img matListAvatar src=\"{{player.icon}}\" alt=\"...\">\r\n            <h3 matLine> <span> {{player.name}} {{player.goals}}</span> </h3>\r\n            <p matLine>\r\n              <span class=\"demo-2\">{{player.birthDate | date: 'dd/MM/yyyy'}} </span>\r\n            </p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"Newsletters\">\r\n        <app-newsletters [newsletters]=\"team?.newsletters\"></app-newsletters>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-list/team-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-list/team-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <mat-card *ngFor=\"let item of teams\" style=\"display: inline-block; margin: 20px; width: 140px;\">\r\n    <img src=\"{{item.icon}}\" style=\"width: 100px;\" class=\"mat-card-image\" alt=\"image caption\">\r\n    <mat-card-content>\r\n      <h2>{{item.name}}</h2>\r\n      <p>{{item.description}}</p>\r\n    </mat-card-content>\r\n    <mat-card-footer>\r\n      <a routerLink=\"/teams/{{item.id}}\">SHOW</a>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/team/team-info/team-info.component.css":
/*!********************************************************!*\
  !*** ./src/app/team/team-info/team-info.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS1pbmZvL3RlYW0taW5mby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/team/team-info/team-info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/team/team-info/team-info.component.ts ***!
  \*******************************************************/
/*! exports provided: TeamInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamInfoComponent", function() { return TeamInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




var TeamInfoComponent = /** @class */ (function () {
    /**
     * Team Info component constructor
     */
    function TeamInfoComponent(teamService, router, route) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
        var snapshot = router.routerState.snapshot;
    }
    /** Load initial data */
    TeamInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params["id"];
            if (_this.id > 0) {
                _this.getTeam(_this.id);
                _this.getPlayers(_this.id);
            }
            else {
                _this.getTeam(1);
            }
        });
    };
    /**
     * Load team info from service
     */
    TeamInfoComponent.prototype.getTeam = function (id) {
        var _this = this;
        this.teamService.getTeamById(id).subscribe(function (team) {
            _this.team = team;
            console.log(_this.team);
        });
    };
    /**
     * Load players from service by team id
     */
    TeamInfoComponent.prototype.getPlayers = function (id) {
        var _this = this;
        this.teamService.getPlayersById(id).subscribe(function (players) {
            _this.players = players;
        });
    };
    /**
     * Unsubscribe from observable
     */
    TeamInfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeamInfoComponent.ctorParameters = function () { return [
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    TeamInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-team-info",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-info/team-info.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-info.component.css */ "./src/app/team/team-info/team-info.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TeamInfoComponent);
    return TeamInfoComponent;
}());



/***/ }),

/***/ "./src/app/team/team-list/team-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/team/team-list/team-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS1saXN0L3RlYW0tbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/team/team-list/team-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/team/team-list/team-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/team.service */ "./src/app/services/team.service.ts");



var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(teamService) {
        this.teamService = teamService;
    }
    /** Load the team list from service */
    TeamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeams().subscribe(function (teams) {
            _this.teams = teams;
        }, function (error) { return _this.errorMessage = error; });
    };
    TeamListComponent.ctorParameters = function () { return [
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }
    ]; };
    TeamListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team-list/team-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-list.component.css */ "./src/app/team/team-list/team-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "./src/app/team/team-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/team/team-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRoutingModule", function() { return TeamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-list/team-list.component */ "./src/app/team/team-list/team-list.component.ts");
/* harmony import */ var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-info/team-info.component */ "./src/app/team/team-info/team-info.component.ts");





var routes = [
    {
        path: '',
        component: _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_3__["TeamListComponent"]
    },
    {
        path: ':id',
        component: _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_4__["TeamInfoComponent"]
    }
];
var TeamRoutingModule = /** @class */ (function () {
    function TeamRoutingModule() {
    }
    TeamRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TeamRoutingModule);
    return TeamRoutingModule;
}());



/***/ }),

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/team/team-routing.module.ts");
/* harmony import */ var _team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-list/team-list.component */ "./src/app/team/team-list/team-list.component.ts");
/* harmony import */ var _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-info/team-info.component */ "./src/app/team/team-info/team-info.component.ts");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../ccommon/ccommon.module */ "./src/app/ccommon/ccommon.module.ts");








var TeamModule = /** @class */ (function () {
    function TeamModule() {
    }
    TeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_4__["TeamListComponent"], _team_info_team_info_component__WEBPACK_IMPORTED_MODULE_5__["TeamInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _team_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamRoutingModule"],
                _ccommon_ccommon_module__WEBPACK_IMPORTED_MODULE_7__["CcommonModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_6__["MaterialImportsModule"]
            ]
        })
    ], TeamModule);
    return TeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=team-team-module.js.map