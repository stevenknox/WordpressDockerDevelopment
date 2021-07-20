(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~championships-championships-module~player-player-module~team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/match-vs/match-vs.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/match-vs/match-vs.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"match-vs\" style=\"\">\r\n    <div style=\"padding: 5px;\">\r\n      <img matListAvatar src=\"{{match.local.icon}}\" alt=\"...\" class=\"team\"> {{match.local.name}} ({{match.localGoal}})\r\n    </div>\r\n    <div style=\"padding: 5px;\">\r\n      <img matListAvatar src=\"{{match.visit.icon}}\" alt=\"...\" class=\"team\"> {{match.visit.name}} ({{match.visitGoal}})\r\n    </div>\r\n  </div>\r\n  <div class=\"match-info\">\r\n    <div>\r\n      {{match.matchDate}}\r\n    </div>\r\n    <div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/newsletters/newsletters.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/newsletters/newsletters.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list>\r\n  <mat-list-item *ngFor=\"let news of newsletters\">\r\n    <img matListAvatar src=\"{{news.img}}\" alt=\"...\">\r\n    <h3 matLine> <span> {{news.title}} </span> </h3>\r\n    <p matLine>\r\n      <span>{{news.date | date: 'dd/MM/yyyy'}} </span>\r\n      <span>{{news.description}} </span>\r\n    </p>\r\n  </mat-list-item>\r\n</mat-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table-groups/standing-table-groups.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table-groups/standing-table-groups.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let standingGroup of standingGroups\">\r\n  <h1>Group: {{standingGroup.group}}</h1>\r\n  <app-standing-table [standingTeams]=\"standingGroup.teams\"></app-standing-table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table/standing-table.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table/standing-table.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<table mat-table [dataSource]=\"standingTeams\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name. </th>\r\n    <td mat-cell *matCellDef=\"let team\"> {{team.team.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"MP\">\r\n    <th mat-header-cell *matHeaderCellDef> MP </th>\r\n    <td mat-cell *matCellDef=\"let team\"> {{team.MP}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"GD\">\r\n    <th mat-header-cell *matHeaderCellDef> GD </th>\r\n    <td mat-cell *matCellDef=\"let team\"> {{team.GD}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"points\">\r\n    <th mat-header-cell *matHeaderCellDef> Points </th>\r\n    <td mat-cell *matCellDef=\"let team\"> {{team.points}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n</table>");

/***/ }),

/***/ "./src/app/ccommon/ccommon.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ccommon/ccommon.module.ts ***!
  \*******************************************/
/*! exports provided: CcommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcommonModule", function() { return CcommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../material-imports/material-imports.module */ "./src/app/material-imports/material-imports.module.ts");
/* harmony import */ var _newsletters_newsletters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newsletters/newsletters.component */ "./src/app/ccommon/newsletters/newsletters.component.ts");
/* harmony import */ var _match_vs_match_vs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-vs/match-vs.component */ "./src/app/ccommon/match-vs/match-vs.component.ts");
/* harmony import */ var _standing_table_groups_standing_table_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standing-table-groups/standing-table-groups.component */ "./src/app/ccommon/standing-table-groups/standing-table-groups.component.ts");
/* harmony import */ var _standing_table_standing_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standing-table/standing-table.component */ "./src/app/ccommon/standing-table/standing-table.component.ts");
/* harmony import */ var _standing_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./standing-sort.pipe */ "./src/app/ccommon/standing-sort.pipe.ts");









var CcommonModule = /** @class */ (function () {
    function CcommonModule() {
    }
    CcommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _newsletters_newsletters_component__WEBPACK_IMPORTED_MODULE_4__["NewslettersComponent"],
                _match_vs_match_vs_component__WEBPACK_IMPORTED_MODULE_5__["MatchVsComponent"],
                _standing_table_groups_standing_table_groups_component__WEBPACK_IMPORTED_MODULE_6__["StandingTableGroupsComponent"],
                _standing_table_standing_table_component__WEBPACK_IMPORTED_MODULE_7__["StandingTableComponent"],
                _standing_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["StandingSortPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_imports_material_imports_module__WEBPACK_IMPORTED_MODULE_3__["MaterialImportsModule"]
            ],
            exports: [
                _newsletters_newsletters_component__WEBPACK_IMPORTED_MODULE_4__["NewslettersComponent"],
                _match_vs_match_vs_component__WEBPACK_IMPORTED_MODULE_5__["MatchVsComponent"],
                _standing_table_groups_standing_table_groups_component__WEBPACK_IMPORTED_MODULE_6__["StandingTableGroupsComponent"],
                _standing_table_standing_table_component__WEBPACK_IMPORTED_MODULE_7__["StandingTableComponent"],
                _standing_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["StandingSortPipe"],
            ]
        })
    ], CcommonModule);
    return CcommonModule;
}());



/***/ }),

/***/ "./src/app/ccommon/match-vs/match-vs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ccommon/match-vs/match-vs.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".match-vs {\r\n  width: 60%;\r\n  display: inline-block;\r\n  border-left: 6px solid red;\r\n  border-right: 2px solid rgb(107, 102, 102);\r\n}\r\n\r\n.match-vs .team {\r\n  width: 30px;\r\n  height: 30px;\r\n  display: block;\r\n  display: inline-block;\r\n}\r\n\r\n.match-info {\r\n  width: 30%;\r\n  display: inline-block;\r\n  padding: 10px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .match-vs {\r\n    width: 60%;\r\n    display: inline-block;\r\n    border-left: 6px solid red;\r\n    border-right: 2px solid rgb(107, 102, 102);\r\n  }\r\n\r\n  .match-vs .team {\r\n    width: 30px;\r\n    height: 30px;\r\n    display: block;\r\n    display: inline-block;\r\n  }\r\n\r\n  .match-info {\r\n    width: 30%;\r\n    display: inline-block;\r\n    padding: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2NvbW1vbi9tYXRjaC12cy9tYXRjaC12cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jY29tbW9uL21hdGNoLXZzL21hdGNoLXZzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2gtdnMge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigxMDcsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLm1hdGNoLXZzIC50ZWFtIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWF0Y2gtaW5mbyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWF0Y2gtdnMge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDEwNywgMTAyLCAxMDIpO1xyXG4gIH1cclxuXHJcbiAgLm1hdGNoLXZzIC50ZWFtIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWF0Y2gtaW5mbyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/ccommon/match-vs/match-vs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ccommon/match-vs/match-vs.component.ts ***!
  \********************************************************/
/*! exports provided: MatchVsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchVsComponent", function() { return MatchVsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var MatchVsComponent = /** @class */ (function () {
    function MatchVsComponent() {
        this.match = {};
    }
    MatchVsComponent.prototype.ngOnInit = function () {
    };
    MatchVsComponent.ctorParameters = function () { return []; };
    MatchVsComponent.propDecorators = {
        match: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    MatchVsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-vs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./match-vs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/match-vs/match-vs.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./match-vs.component.css */ "./src/app/ccommon/match-vs/match-vs.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MatchVsComponent);
    return MatchVsComponent;
}());



/***/ }),

/***/ "./src/app/ccommon/newsletters/newsletters.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ccommon/newsletters/newsletters.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Njb21tb24vbmV3c2xldHRlcnMvbmV3c2xldHRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/ccommon/newsletters/newsletters.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ccommon/newsletters/newsletters.component.ts ***!
  \**************************************************************/
/*! exports provided: NewslettersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslettersComponent", function() { return NewslettersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var NewslettersComponent = /** @class */ (function () {
    function NewslettersComponent() {
    }
    NewslettersComponent.prototype.ngOnInit = function () {
    };
    NewslettersComponent.ctorParameters = function () { return []; };
    NewslettersComponent.propDecorators = {
        newsletters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NewslettersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsletters',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newsletters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/newsletters/newsletters.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newsletters.component.css */ "./src/app/ccommon/newsletters/newsletters.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NewslettersComponent);
    return NewslettersComponent;
}());



/***/ }),

/***/ "./src/app/ccommon/standing-sort.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/ccommon/standing-sort.pipe.ts ***!
  \***********************************************/
/*! exports provided: StandingSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingSortPipe", function() { return StandingSortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var StandingSortPipe = /** @class */ (function () {
    function StandingSortPipe() {
    }
    StandingSortPipe.prototype.transform = function (standings, args) {
        standings.sort(function (a, b) {
            if (a.points < b.points) {
                return 1;
            }
            else if (a.points > b.points) {
                return -1;
            }
            else if (a.GD < b.GD) {
                return 1;
            }
            else if (a.GD > b.GD) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return standings;
    };
    StandingSortPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'standingSort'
        })
    ], StandingSortPipe);
    return StandingSortPipe;
}());



/***/ }),

/***/ "./src/app/ccommon/standing-table-groups/standing-table-groups.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/ccommon/standing-table-groups/standing-table-groups.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Njb21tb24vc3RhbmRpbmctdGFibGUtZ3JvdXBzL3N0YW5kaW5nLXRhYmxlLWdyb3Vwcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/ccommon/standing-table-groups/standing-table-groups.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ccommon/standing-table-groups/standing-table-groups.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StandingTableGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingTableGroupsComponent", function() { return StandingTableGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var StandingTableGroupsComponent = /** @class */ (function () {
    function StandingTableGroupsComponent() {
    }
    StandingTableGroupsComponent.prototype.ngOnInit = function () {
    };
    StandingTableGroupsComponent.ctorParameters = function () { return []; };
    StandingTableGroupsComponent.propDecorators = {
        standingGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    StandingTableGroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standing-table-groups',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./standing-table-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table-groups/standing-table-groups.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./standing-table-groups.component.css */ "./src/app/ccommon/standing-table-groups/standing-table-groups.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StandingTableGroupsComponent);
    return StandingTableGroupsComponent;
}());



/***/ }),

/***/ "./src/app/ccommon/standing-table/standing-table.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ccommon/standing-table/standing-table.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".standing-table {\r\n    width: 380px;\r\n}\r\n\r\n.mat-column-MP {\r\n    flex: 0 0 10% !important;\r\n    min-width: 75px !important;\r\n}\r\n\r\n.mat-column-GD {\r\n    flex: 0 0 10% !important;\r\n    min-width: 75px !important;\r\n}\r\n\r\n.mat-column-points {\r\n    flex: 0 0 10% !important;\r\n    min-width: 75px !important;\r\n}\r\n\r\n.mat-column-name {\r\n    flex: 0 0 30% !important;\r\n    min-width: 104px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2NvbW1vbi9zdGFuZGluZy10YWJsZS9zdGFuZGluZy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jY29tbW9uL3N0YW5kaW5nLXRhYmxlL3N0YW5kaW5nLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhbmRpbmctdGFibGUge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1NUCB7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tR0Qge1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXBvaW50cyB7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbmFtZSB7XHJcbiAgICBmbGV4OiAwIDAgMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/ccommon/standing-table/standing-table.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ccommon/standing-table/standing-table.component.ts ***!
  \********************************************************************/
/*! exports provided: StandingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingTableComponent", function() { return StandingTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var StandingTableComponent = /** @class */ (function () {
    function StandingTableComponent() {
        this.displayedColumns = ['name', 'MP', 'GD', 'points'];
    }
    StandingTableComponent.prototype.ngOnInit = function () {
    };
    StandingTableComponent.ctorParameters = function () { return []; };
    StandingTableComponent.propDecorators = {
        standingTeams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    StandingTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standing-table',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./standing-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ccommon/standing-table/standing-table.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./standing-table.component.css */ "./src/app/ccommon/standing-table/standing-table.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StandingTableComponent);
    return StandingTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~championships-championships-module~player-player-module~team-team-module.js.map