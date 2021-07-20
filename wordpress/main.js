(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"example-container\" style=\"min-height: 100%;\" fullscreen>\r\n  <mat-sidenav #sidenav mode=\"side\" (closed)=\"events.push('close!')\">\r\n    <h3 matHeader>FAVORITES</h3>\r\n    <mat-list>\r\n      <h3 matSubheader><a routerLink=\"championships\"  (click)=\"sidenav.toggle()\">CHAMPIONSHIPS</a></h3>\r\n      <mat-list-item *ngFor=\"let item of championships\">\r\n        <img matListAvatar src=\"{{item.img}}\" alt=\"...\">\r\n        <h4 matLine>\r\n         <a routerLink=\"championships/{{item.id}}\" (click)=\"sidenav.toggle()\">{{item.name}}</a></h4>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      \r\n      <h3 matSubheader><a routerLink=\"teams\"  (click)=\"sidenav.toggle()\">TEAMS</a></h3>\r\n      <mat-list-item *ngFor=\"let item of teams\">\r\n        <img matListAvatar src=\"{{item.icon}}\" alt=\"...\">\r\n        <h4 matLine><a routerLink=\"teams/{{item.id}}\"  (click)=\"sidenav.toggle()\">{{item.name}}</a></h4>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider>\r\n\r\n      <h3 matSubheader><a routerLink=\"players\"  (click)=\"sidenav.toggle()\">PLAYERS</a></h3>\r\n      <mat-list-item *ngFor=\"let item of players\">\r\n        <img matListAvatar src=\"{{item.icon}}\" alt=\"...\">\r\n        <h4 matLine><a routerLink=\"players/{{item.id}}\"  (click)=\"sidenav.toggle()\">{{item.name}}</a></h4>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <br>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-button-toggle (click)=\"sidenav.toggle()\">\r\n      <mat-icon>list</mat-icon>\r\n    </mat-button-toggle>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./championships/championships.module": [
		"./src/app/championships/championships.module.ts",
		"default~championships-championships-module~player-player-module~team-team-module",
		"championships-championships-module"
	],
	"./player/player.module": [
		"./src/app/player/player.module.ts",
		"default~championships-championships-module~player-player-module~team-team-module",
		"player-player-module"
	],
	"./team/team.module": [
		"./src/app/team/team.module.ts",
		"default~championships-championships-module~player-player-module~team-team-module",
		"team-team-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var routes = [
    {
        path: 'championships',
        loadChildren: './championships/championships.module#ChampionshipsModule'
    },
    {
        path: 'teams',
        loadChildren: './team/team.module#TeamModule'
    },
    {
        path: 'players',
        loadChildren: './player/player.module#PlayerModule'
    },
    {
        path: '',
        redirectTo: 'championships',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_championships_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/championships.service */ "./src/app/services/championships.service.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(championshipService, teamService, playerService) {
        this.championshipService = championshipService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.title = 'football-five';
        this.events = [];
        this.opened = true;
        this.championships = [];
        console.log("APPPPPPPPPPPPPP");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getChampionships();
        this.getTeams();
        this.getPlayers();
    };
    AppComponent.prototype.getChampionships = function () {
        var _this = this;
        this.championshipService.getChampionships()
            .subscribe(function (championship) {
            _this.championships = championship;
            console.log(_this.championships);
        });
    };
    AppComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (team) {
            _this.teams = team;
            console.log(_this.teams);
        });
    };
    AppComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService.getPlayers()
            .subscribe(function (player) {
            _this.players = player;
            console.log(_this.players);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"] },
        { type: _services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
        { type: _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_championships_service__WEBPACK_IMPORTED_MODULE_2__["ChampionshipsService"],
            _services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_championships_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/championships.service */ "./src/app/services/championships.service.ts");
/* harmony import */ var _services_conf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/conf.service */ "./src/app/services/conf.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_4__["MaterialImportsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_services_conf_service__WEBPACK_IMPORTED_MODULE_9__["ConfService"], _services_championships_service__WEBPACK_IMPORTED_MODULE_8__["ChampionshipsService"], _services_player_service__WEBPACK_IMPORTED_MODULE_10__["PlayerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material-imports/material-imports.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-imports/material-imports.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImportsModule", function() { return MaterialImportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
































var MaterialImportsModule = /** @class */ (function () {
    function MaterialImportsModule() {
    }
    MaterialImportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"]
            ],
            exports: [
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"]
            ]
        })
    ], MaterialImportsModule);
    return MaterialImportsModule;
}());



/***/ }),

/***/ "./src/app/services/championships.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/championships.service.ts ***!
  \***************************************************/
/*! exports provided: ChampionshipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChampionshipsService", function() { return ChampionshipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _conf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conf.service */ "./src/app/services/conf.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





var ChampionshipsService = /** @class */ (function () {
    /**
     * Championship constructor
     */
    function ChampionshipsService(http, confSvc) {
        this.http = http;
        this.confSvc = confSvc;
        /** json file URL */
        this.jsonFileURL = "../assets/championships.json";
        this.jsonStandingsURL = "../assets/championship_@id_standings.json";
        this.jsonMatchesURL = "../assets/championship_@id_matches.json";
    }
    /**
     * Returns the champhionship list
     */
    ChampionshipsService.prototype.list = function () {
        return this.championships;
    };
    /**
     * Gets the list of championships
     */
    ChampionshipsService.prototype.getChampionships = function () {
        return this.http.get(this.confSvc.championshipsUrl());
    };
    /**
     * Gets Championship by Id
     */
    ChampionshipsService.prototype.getChampionshipById = function (id) {
        return this.http.get(this.confSvc.championshipsUrl());
    };
    /**
   * Gets First Championship by Id
   */
    ChampionshipsService.prototype.getChampionshipFirst = function () {
        return this.http.get(this.confSvc.championshipsUrl()).map(function (response) {
            return response.json() /*.sort((x, y) => y.order - x.order)*/[0];
        }).catch(this.handleError);
    };
    /**
     * Gets Championship Standings by Championship Id
     */
    ChampionshipsService.prototype.getStandingsById = function (id) {
        return this.http.get(this.jsonStandingsURL.replace("@id", id));
    };
    /**
     * Gets Matches Standings by Championship Id
     */
    ChampionshipsService.prototype.getMatchesById = function (id) {
        return this.http.get(this.jsonMatchesURL.replace("@id", id));
    };
    /**
     * Handles the response erros
     */
    ChampionshipsService.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorResponse.json || "Server error");
    };
    ChampionshipsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _conf_service__WEBPACK_IMPORTED_MODULE_3__["ConfService"] }
    ]; };
    ChampionshipsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _conf_service__WEBPACK_IMPORTED_MODULE_3__["ConfService"]])
    ], ChampionshipsService);
    return ChampionshipsService;
}());



/***/ }),

/***/ "./src/app/services/conf.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/conf.service.ts ***!
  \******************************************/
/*! exports provided: ConfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfService", function() { return ConfService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ConfService = /** @class */ (function () {
    function ConfService() {
        this.fromAssets = true;
        this.championshipsAssetURL = "../assets/championships.json";
        this.championshipsAssetByIdURL = "../assets/championship_1.json";
        this.jsonStandingsURL = "../assets/championship_@id_standings.json";
        this.jsonMatchesURL = "../assets/championship_@id_matches.json";
        this.baseUrl = "http://localhost:3000/api";
        this.teamsApiUrl = "teams";
        this.championshipsApiUrl = "championships";
        this.championship = {
            displayStandings: true,
            displayMatches: true,
            displayNews: true
        };
    }
    ConfService.prototype.teamsUrl = function () {
        if (this.fromAssets) {
            return this.championshipsAssetURL;
        }
        return this.baseUrl + "/" + this.teamsApiUrl;
    };
    ConfService.prototype.championshipsUrl = function () {
        if (this.fromAssets) {
            return this.championshipsAssetURL;
        }
        return this.baseUrl + "/" + this.championshipsApiUrl;
    };
    ConfService.prototype.championshipsByIdUrl = function () {
        if (this.fromAssets) {
            return this.championshipsAssetByIdURL;
        }
        return this.baseUrl + "/" + this.championshipsApiUrl;
    };
    ConfService.ctorParameters = function () { return []; };
    ConfService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ConfService);
    return ConfService;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__);




 //get everything from Rx    
var PlayerService = /** @class */ (function () {
    /** Player service contructor*/
    function PlayerService(http) {
        this.http = http;
        /** json URL*/
        this.jsonFileURL = "../assets/players.json";
        this.jsonFileByIdURL = "../assets/players_@id.json";
    }
    /**
     * Returns the list of players on the service
     */
    PlayerService.prototype.list = function () {
        return this.players;
    };
    /**
     * Return a Observable with the list of players
     */
    PlayerService.prototype.getPlayers = function () {
        return this.http.get(this.jsonFileURL);
    };
    /**
     * Return player by id
     */
    PlayerService.prototype.playersByChampionship = function (championship) {
        return this.players;
    };
    /**
     * Return an observable with player that match the id param
    */
    PlayerService.prototype.getPlayerById = function (id) {
        return this.http.get(this.jsonFileByIdURL.replace("@id", id));
    };
    /**
     * Handles response error
     */
    PlayerService.prototype.handleError = function (errorResponse) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorResponse.json || "Server error");
    };
    PlayerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PlayerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



var TeamService = /** @class */ (function () {
    /** Team service constructor */
    function TeamService(http) {
        this.http = http;
        /** json URL */
        this.jsonFileURL = "../assets/teams.json";
        this.jsonFileByIdURL = "../assets/teams_@id.json";
        /** json URL */
        this.jsonPlayersURL = "../assets/teams_@id_players.json";
    }
    /**
     * Returns the list of teams
     */
    TeamService.prototype.list = function () {
        return this.teams;
    };
    /**
     * Return team by championship
     */
    TeamService.prototype.teamsByChampionship = function (championship) {
        return this.teams;
    };
    /**
     * Return an observable with the yeam that matches the id
     */
    TeamService.prototype.getTeamById = function (id) {
        return this.http.get(this.jsonFileByIdURL.replace("@id", id));
    };
    /**
     * Gets players by Team Id
     */
    TeamService.prototype.getPlayersById = function (id) {
        return this.http.get(this.jsonPlayersURL.replace("@id", id));
    };
    /**
     * Return an observable with the list of teams
     */
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.jsonFileURL);
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Steven\Source\football-five\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map