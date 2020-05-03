function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Admin_Tab/add-news-portal/add-news-portal.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Admin_Tab/add-news-portal/add-news-portal.component.ts ***!
    \************************************************************************/

  /*! exports provided: AddNewsPortalComponent */

  /***/
  function srcAppAdmin_TabAddNewsPortalAddNewsPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewsPortalComponent", function () {
      return AddNewsPortalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/Core/services/admin-and-news-service/news.service */
    "./src/app/Core/services/admin-and-news-service/news.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AddNewsPortalComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Title .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title should be longer than 5 .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Description .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Summary .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Summary can not extend 100 words.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Full News .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddNewsPortalComponent_mat_error_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Enter Http url .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AddNewsPortalComponent = /*#__PURE__*/function () {
      function AddNewsPortalComponent(fb, newsDb, toastrService, route) {
        _classCallCheck(this, AddNewsPortalComponent);

        this.fb = fb;
        this.newsDb = newsDb;
        this.toastrService = toastrService;
        this.route = route;
        var reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.newsForm = this.fb.group({
          title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
          description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          summary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
          fullNews: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(reg)]]
        });
      }

      _createClass(AddNewsPortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNews",
        value: function addNews(myForm) {
          var _this = this;

          this.newsDb.addNews(myForm).subscribe(function (data) {
            _this.newsForm.reset();

            _this.toastrService.success('News added successfuly');

            _this.route.navigate(["/news"]);
          });
        }
      }]);

      return AddNewsPortalComponent;
    }();

    AddNewsPortalComponent.ɵfac = function AddNewsPortalComponent_Factory(t) {
      return new (t || AddNewsPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AddNewsPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddNewsPortalComponent,
      selectors: [["app-add-news-portal"]],
      decls: 37,
      vars: 9,
      consts: [[1, "example-card", 2, "width", "720px", "margin", "50px auto", "background-color", "#f7f7f7", "height", "400px"], [2, "margin-left", "267px"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["cellspacing", "0", 1, "example-full-width"], [1, "example-full-width", 2, "width", "340px"], ["matInput", "", "placeholder", "Title", "formControlName", "title", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Description", "formControlName", "description", "required", ""], ["appearance", "fill", 2, "width", "340px"], ["matInput", "", "formControlName", "summary"], ["type", "url", "matInput", "", "formControlName", "fullNews"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]],
      template: function AddNewsPortalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewsPortalComponent_Template_form_ngSubmit_5_listener() {
            return ctx.addNews(ctx.newsForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddNewsPortalComponent_mat_error_11_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddNewsPortalComponent_mat_error_12_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddNewsPortalComponent_mat_error_17_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddNewsPortalComponent_mat_error_24_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddNewsPortalComponent_mat_error_25_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Full News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddNewsPortalComponent_mat_error_32_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddNewsPortalComponent_mat_error_33_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Post The News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("title").errors == null ? null : ctx.newsForm.get("title").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("title").errors == null ? null : ctx.newsForm.get("title").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("description").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("summary").errors == null ? null : ctx.newsForm.get("summary").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("summary").errors == null ? null : ctx.newsForm.get("summary").errors.maxlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("fullNews").errors == null ? null : ctx.newsForm.get("fullNews").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsForm.get("fullNews").errors == null ? null : ctx.newsForm.get("fullNews").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newsForm.invalid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewsPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-news-portal',
          templateUrl: './add-news-portal.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Admin_Tab/admin-base-page/admin-base-page.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Admin_Tab/admin-base-page/admin-base-page.component.ts ***!
    \************************************************************************/

  /*! exports provided: AdminBasePageComponent */

  /***/
  function srcAppAdmin_TabAdminBasePageAdminBasePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminBasePageComponent", function () {
      return AdminBasePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminBasePageComponent = /*#__PURE__*/function () {
      function AdminBasePageComponent() {
        _classCallCheck(this, AdminBasePageComponent);
      }

      _createClass(AdminBasePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminBasePageComponent;
    }();

    AdminBasePageComponent.ɵfac = function AdminBasePageComponent_Factory(t) {
      return new (t || AdminBasePageComponent)();
    };

    AdminBasePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminBasePageComponent,
      selectors: [["app-admin-base-page"]],
      decls: 1,
      vars: 0,
      template: function AdminBasePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminBasePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-base-page',
          templateUrl: './admin-base-page.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Admin_Tab/admin-base-page/admin-login-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Admin_Tab/admin-base-page/admin-login-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: adminRoutes, AdminRoutingModule */

  /***/
  function srcAppAdmin_TabAdminBasePageAdminLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adminRoutes", function () {
      return adminRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-base-page.component */
    "./src/app/Admin_Tab/admin-base-page/admin-base-page.component.ts");
    /* harmony import */


    var _app_Admin_Tab_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/Admin_Tab/admin-login/admin-login.component */
    "./src/app/Admin_Tab/admin-login/admin-login.component.ts");
    /* harmony import */


    var _app_Admin_Tab_admin_login_LoginAdmin_can_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/Admin_Tab/admin-login/LoginAdmin-can-activate.guard */
    "./src/app/Admin_Tab/admin-login/LoginAdmin-can-activate.guard.ts");
    /* harmony import */


    var _app_Admin_Tab_add_news_portal_add_news_portal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/Admin_Tab/add-news-portal/add-news-portal.component */
    "./src/app/Admin_Tab/add-news-portal/add-news-portal.component.ts");

    var adminRoutes = [{
      path: '',
      component: _app_Admin_Tab_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"]
    }, {
      path: 'addNews',
      component: _app_Admin_Tab_add_news_portal_add_news_portal_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsPortalComponent"],
      canActivate: [_app_Admin_Tab_admin_login_LoginAdmin_can_activate_guard__WEBPACK_IMPORTED_MODULE_4__["LoginCanActivateGuard"]]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        declarations: [_admin_base_page_component__WEBPACK_IMPORTED_MODULE_2__["AdminBasePageComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_base_page_component__WEBPACK_IMPORTED_MODULE_2__["AdminBasePageComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Admin_Tab/admin-login/LoginAdmin-can-activate.guard.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Admin_Tab/admin-login/LoginAdmin-can-activate.guard.ts ***!
    \************************************************************************/

  /*! exports provided: LoginCanActivateGuard */

  /***/
  function srcAppAdmin_TabAdminLoginLoginAdminCanActivateGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCanActivateGuard", function () {
      return LoginCanActivateGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var LoginCanActivateGuard = /*#__PURE__*/function () {
      function LoginCanActivateGuard(router, toastrService) {
        _classCallCheck(this, LoginCanActivateGuard);

        this.router = router;
        this.toastrService = toastrService;
      }

      _createClass(LoginCanActivateGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (sessionStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
            this.router.navigate(['/adminLogin']);
            this.toastrService.warning('Please login to continue!', 'Admin Portal');
            return false;
          }

          return true;
        }
      }]);

      return LoginCanActivateGuard;
    }();

    LoginCanActivateGuard.ɵfac = function LoginCanActivateGuard_Factory(t) {
      return new (t || LoginCanActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    LoginCanActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginCanActivateGuard,
      factory: LoginCanActivateGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginCanActivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Admin_Tab/admin-login/admin-login.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Admin_Tab/admin-login/admin-login.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppAdmin_TabAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_Core_services_admin_and_news_service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/Core/services/admin-and-news-service/login.service */
    "./src/app/Core/services/admin-and-news-service/login.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function AdminLoginComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter UserName!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter Password!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AdminLoginComponent = /*#__PURE__*/function () {
      function AdminLoginComponent(toastrService, route, fb, loginService) {
        _classCallCheck(this, AdminLoginComponent);

        this.toastrService = toastrService;
        this.route = route;
        this.fb = fb;
        this.loginService = loginService;
        console.log('In Admin Construcctor');
        this.loginForm = this.fb.group({
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(AdminLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('TOKEN') !== null) {
            this.route.navigate(['adminLogin/addNews']);
          }
        }
      }, {
        key: "login",
        value: function login(form) {
          if (this.loginService.validateUser(form)) {
            sessionStorage.setItem('TOKEN', 'token');
            sessionStorage.setItem('username', form.username);
            this.route.navigate(['adminLogin/addNews']);
            this.toastrService.success('Logged in successfully!', 'Admin Portal');
          } else {
            this.toastrService.warning('Please enter valid credentials!', 'Admin Portal');
          }
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
      return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Core_services_admin_and_news_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]));
    };

    AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLoginComponent,
      selectors: [["app-admin-login"]],
      decls: 21,
      vars: 4,
      consts: [[1, "example-card", 2, "width", "720px", "margin", "50px auto", "background-color", "#f7f7f7", "height", "271px"], [2, "margin-left", "267px"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["cellspacing", "0", 1, "example-full-width"], [1, "example-full-width"], ["matInput", "", "placeholder", "User Name", "formControlName", "username", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password", "required", ""], ["id", "#username-error-msg", "name", "#username-error-msg", 4, "ngIf"], ["type", "submit", "id", "#password-error-msg", "name", "#password-error-msg", "mat-raised-button", "", "color", "primary", 3, "disabled"], ["id", "#username-error-msg", "name", "#username-error-msg"]],
      template: function AdminLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.login(ctx.loginForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminLoginComponent_mat_error_11_Template, 2, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminLoginComponent_mat_error_16_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("username").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-login',
          templateUrl: './admin-login.component.html'
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_Core_services_admin_and_news_service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Admin_Tab/admin-login/admin-login.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Admin_Tab/admin-login/admin-login.module.ts ***!
    \*************************************************************/

  /*! exports provided: adminLoginModule */

  /***/
  function srcAppAdmin_TabAdminLoginAdminLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adminLoginModule", function () {
      return adminLoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin-login.component */
    "./src/app/Admin_Tab/admin-login/admin-login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _Core_services_admin_and_news_service_in_memory_database_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Core/services/admin-and-news-service/in-memory-database-details */
    "./src/app/Core/services/admin-and-news-service/in-memory-database-details.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");

    var adminLoginModule = function adminLoginModule() {
      _classCallCheck(this, adminLoginModule);
    };

    adminLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: adminLoginModule
    });
    adminLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function adminLoginModule_Factory(t) {
        return new (t || adminLoginModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_Core_services_admin_and_news_service_in_memory_database_details__WEBPACK_IMPORTED_MODULE_4__["InMemoryLoginDataService"], {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](adminLoginModule, {
        declarations: [_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"]],
        exports: [_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](adminLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_6__["SharedMaterialModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_Core_services_admin_and_news_service_in_memory_database_details__WEBPACK_IMPORTED_MODULE_4__["InMemoryLoginDataService"], {
            dataEncapsulation: false,
            passThruUnknownUrl: true
          })],
          exports: [_admin_login_component__WEBPACK_IMPORTED_MODULE_1__["AdminLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Core/services/admin-and-news-service/in-memory-database-details.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/Core/services/admin-and-news-service/in-memory-database-details.ts ***!
    \************************************************************************************/

  /*! exports provided: InMemoryLoginDataService */

  /***/
  function srcAppCoreServicesAdminAndNewsServiceInMemoryDatabaseDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryLoginDataService", function () {
      return InMemoryLoginDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InMemoryLoginDataService = /*#__PURE__*/function () {
      function InMemoryLoginDataService() {
        _classCallCheck(this, InMemoryLoginDataService);
      }

      _createClass(InMemoryLoginDataService, [{
        key: "createDb",
        value: function createDb() {
          var adminDetail = [{
            id: 1,
            username: 'admin',
            password: 'admin'
          }];
          var newsDetail = [{
            id: 1,
            title: 'No Change In GuidLine',
            description: 'SC Refuses to Pass Directions for Changing Guidelines on Covid-19 Treatment',
            summary: 'During the hearing, Ohio-based Indian origin doctor and PBT President Kunal Saha said he has not challenged the treatment line for Covid-19 per se but the use of HCQ and AZM combination has side effects and people are dying due to it.',
            fullNews: 'https://www.news18.com/news/india/sc-refuses-to-pass-directions-for-changing-guidelines-on-covid-19-treatment-2599337.html'
          }, {
            id: 2,
            title: 'No Vaccine',
            description: '1-MIN READ With No Vaccine, Herd Immunity is Our Only Hope in Fight Against Coronavirus: Senior Scientist',
            summary: 'A senior scientist working on Randomised Control Trial (RCT) said a large number of the population would first get infected and then develop natural immunity against the virus, preventing it from spreading further.',
            fullNews: 'https://www.news18.com/news/india/with-no-vaccine-herd-immunity-is-our-only-hope-in-fight-against-coronavirus-senior-scientist-2599265.html'
          }];
          return {
            adminDetail: adminDetail,
            newsDetail: newsDetail
          };
        }
      }, {
        key: "genId",
        value: function genId(newsDetail) {
          return newsDetail.length > 0 ? Math.max.apply(Math, _toConsumableArray(newsDetail.map(function (news) {
            return news.id;
          }))) + 1 : 1;
        }
      }]);

      return InMemoryLoginDataService;
    }();

    InMemoryLoginDataService.ɵfac = function InMemoryLoginDataService_Factory(t) {
      return new (t || InMemoryLoginDataService)();
    };

    InMemoryLoginDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InMemoryLoginDataService,
      factory: InMemoryLoginDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryLoginDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Core/services/admin-and-news-service/login.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Core/services/admin-and-news-service/login.service.ts ***!
    \***********************************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppCoreServicesAdminAndNewsServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.apiUrl = 'api/adminDetail';
        this.getUsers();
      }

      _createClass(LoginService, [{
        key: "getUsers",
        value: function getUsers() {
          var _this2 = this;

          this.http.get(this.apiUrl).subscribe(function (data) {
            _this2.loginData = data;
          });
        }
      }, {
        key: "validateUser",
        value: function validateUser(user) {
          var validUser = false;

          if (this.loginData.findIndex(function (admin) {
            return user.username.toLowerCase() === admin.username.toLowerCase() && user.password === admin.password;
          }) > -1) {
            validUser = true;
          }

          return validUser;
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Core/services/admin-and-news-service/news.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/Core/services/admin-and-news-service/news.service.ts ***!
    \**********************************************************************/

  /*! exports provided: NewsService */

  /***/
  function srcAppCoreServicesAdminAndNewsServiceNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsService", function () {
      return NewsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var NewsService = /*#__PURE__*/function () {
      function NewsService(http) {
        _classCallCheck(this, NewsService);

        this.http = http;
        this.apiUrl = 'api/newsDetail';
      }

      _createClass(NewsService, [{
        key: "getNews",
        value: function getNews() {
          return this.http.get(this.apiUrl); // var news = JSON.parse(localStorage.getItem('newsList'));
          // return news;
        }
      }, {
        key: "addNews",
        value: function addNews(newNews) {
          return this.http.post(this.apiUrl, newNews, httpOptions); // if (JSON.parse(localStorage.getItem('newsList')) === null) {
          //   this.newsData = [];
          // } else {
          //   this.newsData = JSON.parse(localStorage.getItem('newsList'));
          // }
          // newNews.id = this.genId(this.newsData);
          // this.newsData.push(newNews);
          // localStorage.setItem('newsList', JSON.stringify(this.newsData));
        }
      }]);

      return NewsService;
    }();

    NewsService.ɵfac = function NewsService_Factory(t) {
      return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsService,
      factory: NewsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Core/services/dashboard-covid-services/covid-statewise-service.service.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/Core/services/dashboard-covid-services/covid-statewise-service.service.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CovidStatewiseServiceService */

  /***/
  function srcAppCoreServicesDashboardCovidServicesCovidStatewiseServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidStatewiseServiceService", function () {
      return CovidStatewiseServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CovidStatewiseServiceService = /*#__PURE__*/function () {
      function CovidStatewiseServiceService(http) {
        _classCallCheck(this, CovidStatewiseServiceService);

        this.http = http;
        this.apiUrl = "https://api.covid19india.org/data.json ";
        this.districtApi = "https://api.covid19india.org/state_district_wise.json ";
      }

      _createClass(CovidStatewiseServiceService, [{
        key: "getStateWiseDetails",
        value: function getStateWiseDetails() {
          return this.http.get(this.apiUrl);
        }
      }, {
        key: "getDistrictWiseDetails",
        value: function getDistrictWiseDetails() {
          return this.http.get(this.districtApi);
        }
      }]);

      return CovidStatewiseServiceService;
    }();

    CovidStatewiseServiceService.ɵfac = function CovidStatewiseServiceService_Factory(t) {
      return new (t || CovidStatewiseServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CovidStatewiseServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CovidStatewiseServiceService,
      factory: CovidStatewiseServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidStatewiseServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/DashBoard_Tab/dashboard/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/DashBoard_Tab/dashboard/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashBoard_TabDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_Core_services_dashboard_covid_services_covid_statewise_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/Core/services/dashboard-covid-services/covid-statewise-service.service */
    "./src/app/Core/services/dashboard-covid-services/covid-statewise-service.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _district_list_district_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../district-list/district-list.component */
    "./src/app/DashBoard_Tab/district-list/district-list.component.ts");

    function DashboardComponent_ng_container_27_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, column_r5));
      }
    }

    function DashboardComponent_ng_container_27_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r9 = ctx.$implicit;

        var column_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9[column_r5]);
      }
    }

    function DashboardComponent_ng_container_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_container_27_th_1_Template, 4, 3, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_ng_container_27_td_2_Template, 2, 1, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r5);
      }
    }

    function DashboardComponent_td_29_app_district_list_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-district-list", 22);
      }

      if (rf & 2) {
        var element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("districtData", ctx_r12.districts(element_r11.state));
      }
    }

    function DashboardComponent_td_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_td_29_app_district_list_2_Template, 1, 1, "app-district-list", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r11 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r1.displayedColumns.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r11 == ctx_r1.expandedElement ? "expanded" : "collapsed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r11 == ctx_r1.expandedElement && element_r11.confirmed != 0);
      }
    }

    function DashboardComponent_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function DashboardComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_31_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var element_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.expandedElement = ctx_r15.expandedElement === element_r14 ? null : element_r14;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r3.expandedElement === element_r14);
      }
    }

    function DashboardComponent_tr_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
      }
    }

    var _c0 = function _c0() {
      return ["expandedDetail"];
    };

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(http, stateWiseData) {
        _classCallCheck(this, DashboardComponent);

        this.http = http;
        this.stateWiseData = stateWiseData;

        this.isExpansionDetailRow = function (i, row) {
          return row.hasOwnProperty('detailRow');
        };

        this.displayedColumns = ['state', 'active', 'confirmed', 'recovered', 'deaths'];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.stateWiseData.getStateWiseDetails().subscribe(function (data) {
            _this3.getStateWiseDetails(data);
          }, function (err) {
            console.log('HTTP Error', err);
          });
          this.stateWiseData.getDistrictWiseDetails().subscribe(function (data) {
            _this3.AllStateDistrictData = data;
          }, function (err) {
            console.log('HTTP Error', err);
          });
        }
      }, {
        key: "getStateWiseDetails",
        value: function getStateWiseDetails(data) {
          this.stateData = data.statewise;
          this.active = this.stateData[0].active;
          this.confirmed = this.stateData[0].confirmed;
          this.deceased = this.stateData[0].deaths;
          this.recovered = this.stateData[0].recovered;
          this.stateData = this.stateData.slice(1);
        }
      }, {
        key: "districts",
        value: function districts(state) {
          return this.AllStateDistrictData[state].districtData;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Core_services_dashboard_covid_services_covid_statewise_service_service__WEBPACK_IMPORTED_MODULE_3__["CovidStatewiseServiceService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 33,
      vars: 18,
      consts: [[1, "Level", 2, "margin", "50px auto"], [1, "level-item", "is-cherry", "fadeInUp", 2, "animation-delay", "1s", "color", "#ff073a"], [1, "heading"], [1, "level-item", "is-blue", "fadeInUp", 2, "animation-delay", "1.1s", "color", "#007bff"], [1, "title", "has-text-info"], [1, "level-item", "is-green", "fadeInUp", 2, "animation-delay", "1.2s", "color", "#28a745"], [1, "title", "has-text-success"], [1, "level-item", "is-gray", "fadeInUp", 2, "animation-delay", "1.3s", "color", "#6c757d"], [1, "title", "has-text-grey"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 2, "width", "960px", "margin", "10px auto", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "style", "font-size: medium;", 4, "matHeaderCellDef"], ["mat-header-cell", "", 2, "font-size", "medium"], ["mat-cell", ""], [1, "example-element-detail"], [3, "districtData", 4, "ngIf"], [3, "districtData"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Deceased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DashboardComponent_ng_container_27_Template, 3, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DashboardComponent_td_29_Template, 3, 3, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DashboardComponent_tr_30_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DashboardComponent_tr_31_Template, 1, 2, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_tr_32_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.confirmed));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, ctx.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, ctx.recovered));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, ctx.deceased));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.stateData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _district_list_district_list_component__WEBPACK_IMPORTED_MODULE_6__["DistrictListComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]],
      styles: [".Level[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-self: center;\r\n    width: 30rem;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n  cursor: pointer;\r\n}\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaEJvYXJkX1RhYi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL0Rhc2hCb2FyZF9UYWIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxldmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '0px',
          minHeight: '0',
          visibility: 'hidden'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          height: '*',
          visibility: 'visible'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px',
            minHeight: '0',
            visibility: 'hidden'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*',
            visibility: 'visible'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _app_Core_services_dashboard_covid_services_covid_statewise_service_service__WEBPACK_IMPORTED_MODULE_3__["CovidStatewiseServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/DashBoard_Tab/dashboard/dashboard.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/DashBoard_Tab/dashboard/dashboard.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashBoard_TabDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/DashBoard_Tab/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _district_list_district_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../district-list/district-list.component */
    "./src/app/DashBoard_Tab/district-list/district-list.component.ts");
    /* harmony import */


    var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts"); // This is dashboard feature module.


    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _district_list_district_list_component__WEBPACK_IMPORTED_MODULE_3__["DistrictListComponent"]],
        imports: [_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _district_list_district_list_component__WEBPACK_IMPORTED_MODULE_3__["DistrictListComponent"]],
          imports: [_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/DashBoard_Tab/district-list/district-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/DashBoard_Tab/district-list/district-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: DistrictListComponent */

  /***/
  function srcAppDashBoard_TabDistrictListDistrictListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistrictListComponent", function () {
      return DistrictListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DistrictListComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.value.deceased);
      }
    }

    var DistrictListComponent = /*#__PURE__*/function () {
      function DistrictListComponent() {
        _classCallCheck(this, DistrictListComponent);
      }

      _createClass(DistrictListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DistrictListComponent;
    }();

    DistrictListComponent.ɵfac = function DistrictListComponent_Factory(t) {
      return new (t || DistrictListComponent)();
    };

    DistrictListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DistrictListComponent,
      selectors: [["app-district-list"]],
      inputs: {
        stateIs: ["districtData", "stateIs"]
      },
      decls: 17,
      vars: 3,
      consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
      template: function DistrictListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "District");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deceased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DistrictListComponent_tr_15_Template, 11, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 1, ctx.stateIs));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hCb2FyZF9UYWIvZGlzdHJpY3QtbGlzdC9kaXN0cmljdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DistrictListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-district-list',
          templateUrl: './district-list.component.html',
          styleUrls: ['./district-list.component.css']
        }]
      }], function () {
        return [];
      }, {
        stateIs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['districtData']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/News_Tab/latest-news/latest-news.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/News_Tab/latest-news/latest-news.component.ts ***!
    \***************************************************************/

  /*! exports provided: LatestNewsComponent */

  /***/
  function srcAppNews_TabLatestNewsLatestNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestNewsComponent", function () {
      return LatestNewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/Core/services/admin-and-news-service/news.service */
    "./src/app/Core/services/admin-and-news-service/news.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LatestNewsComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Summary :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For FullNews :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "click here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.summary, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.fullNews, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function LatestNewsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LatestNewsComponent_div_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.moreInfo(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "More Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LatestNewsComponent_div_0_div_11_Template, 14, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hideFullNews && item_r1.id == ctx_r0.showForId);
      }
    }

    var LatestNewsComponent = /*#__PURE__*/function () {
      function LatestNewsComponent(newsService) {
        var _this4 = this;

        _classCallCheck(this, LatestNewsComponent);

        this.newsService = newsService;
        newsService.getNews().subscribe(function (data) {
          _this4.newsToBeShown = data;
        });
      }

      _createClass(LatestNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.hideFullNews = false;
        }
      }, {
        key: "moreInfo",
        value: function moreInfo(newsId) {
          this.hideFullNews = this.hideFullNews == true && this.showForId == newsId ? false : true;
          this.showForId = newsId;
        }
      }]);

      return LatestNewsComponent;
    }();

    LatestNewsComponent.ɵfac = function LatestNewsComponent_Factory(t) {
      return new (t || LatestNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
    };

    LatestNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LatestNewsComponent,
      selectors: [["app-latest-news"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [1, "card", 2, "width", "80%", "background-color", "#f7f7f7", "; margin", "10px auto"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["type", "submit", 3, "click"], ["class", "card-body", 4, "ngIf"], [3, "href"]],
      template: function LatestNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LatestNewsComponent_div_0_Template, 12, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsToBeShown);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL05ld3NfVGFiL2xhdGVzdC1uZXdzL2xhdGVzdC1uZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-latest-news',
          templateUrl: './latest-news.component.html',
          styleUrls: ['./latest-news.component.css']
        }]
      }], function () {
        return [{
          type: _app_Core_services_admin_and_news_service_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/News_Tab/latest-news/latest-news.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/News_Tab/latest-news/latest-news.module.ts ***!
    \************************************************************/

  /*! exports provided: latestNewsModule */

  /***/
  function srcAppNews_TabLatestNewsLatestNewsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "latestNewsModule", function () {
      return latestNewsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _latest_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./latest-news.component */
    "./src/app/News_Tab/latest-news/latest-news.component.ts"); // This is dashboard feature module.


    var latestNewsModule = function latestNewsModule() {
      _classCallCheck(this, latestNewsModule);
    };

    latestNewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: latestNewsModule
    });
    latestNewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function latestNewsModule_Factory(t) {
        return new (t || latestNewsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](latestNewsModule, {
        declarations: [_latest_news_component__WEBPACK_IMPORTED_MODULE_2__["LatestNewsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](latestNewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_latest_news_component__WEBPACK_IMPORTED_MODULE_2__["LatestNewsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Precaution_Tab/precautions/precautions.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Precaution_Tab/precautions/precautions.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PrecautionsComponent */

  /***/
  function srcAppPrecaution_TabPrecautionsPrecautionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrecautionsComponent", function () {
      return PrecautionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrecautionsComponent = /*#__PURE__*/function () {
      function PrecautionsComponent() {
        _classCallCheck(this, PrecautionsComponent);

        this.title = "Precautions";
        this.quote = "STAY HOME.SAVE LIVES.";
      }

      _createClass(PrecautionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrecautionsComponent;
    }();

    PrecautionsComponent.ɵfac = function PrecautionsComponent_Factory(t) {
      return new (t || PrecautionsComponent)();
    };

    PrecautionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrecautionsComponent,
      selectors: [["app-precautions"]],
      decls: 18,
      vars: 2,
      consts: [[1, "card", 2, "width", "555px", "margin", "50px auto", "background-color", "#f7f7f7"], [2, "margin", "5px auto"], [1, "card-body"], [1, "card-title"], [2, "list-style-type", "disc"]],
      template: function PrecautionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Stay Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "a safe distance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wash your hands often");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cover Your face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sick? call the helpline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quote);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ByZWNhdXRpb25fVGFiL3ByZWNhdXRpb25zL3ByZWNhdXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecautionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-precautions',
          templateUrl: './precautions.component.html',
          styleUrls: ['./precautions.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " LogOut ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["dashBoard"];
    };

    var _c1 = function _c1() {
      return ["news"];
    };

    var _c2 = function _c2() {
      return ["precaution"];
    };

    var _c3 = function _c3() {
      return ["adminLogin"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(route) {
        _classCallCheck(this, AppComponent);

        this.route = route;
        this.title = 'covid-tracking-app';
        this.logoutEnable = false;
      }

      _createClass(AppComponent, [{
        key: "logOut",
        value: function logOut() {
          sessionStorage.clear();
          this.route.navigate(['/adminLogin']);
        }
      }, {
        key: "logoutEnabled",
        value: function logoutEnabled() {
          if (sessionStorage.getItem('TOKEN') !== null) {
            this.logoutEnable = true;
          } else {
            this.logoutEnable = false;
          }

          return this.logoutEnable;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 9,
      consts: [[1, "navbar", "navbar-expand", "navbar-fixed-top", "navbar-dark", "bg-dark"], [1, "navbar-nav", 2, "width", "90%"], [1, "nav-item"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink"], [1, "navbar-nav"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DashBoard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Latest News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Precaution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_li_16_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logoutEnabled());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_appRouting_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/appRouting/app-routing.module */
    "./src/app/core/appRouting/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_appRouting_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_appRouting_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _core_appRouting_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/appRouting/app-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/appRouting/app-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppCoreAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/DashBoard_Tab/dashboard/dashboard.module */
    "./src/app/DashBoard_Tab/dashboard/dashboard.module.ts");
    /* harmony import */


    var _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/Admin_Tab/admin-login/admin-login.module */
    "./src/app/Admin_Tab/admin-login/admin-login.module.ts");
    /* harmony import */


    var _app_Admin_Tab_admin_base_page_admin_login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/Admin_Tab/admin-base-page/admin-login-routing.module */
    "./src/app/Admin_Tab/admin-base-page/admin-login-routing.module.ts");
    /* harmony import */


    var _app_Admin_Tab_admin_base_page_admin_base_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/Admin_Tab/admin-base-page/admin-base-page.component */
    "./src/app/Admin_Tab/admin-base-page/admin-base-page.component.ts");
    /* harmony import */


    var _app_News_Tab_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/News_Tab/latest-news/latest-news.component */
    "./src/app/News_Tab/latest-news/latest-news.component.ts");
    /* harmony import */


    var _app_Precaution_Tab_precautions_precautions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/Precaution_Tab/precautions/precautions.component */
    "./src/app/Precaution_Tab/precautions/precautions.component.ts");
    /* harmony import */


    var _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/News_Tab/latest-news/latest-news.module */
    "./src/app/News_Tab/latest-news/latest-news.module.ts");
    /* harmony import */


    var _app_DashBoard_Tab_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/DashBoard_Tab/dashboard/dashboard.component */
    "./src/app/DashBoard_Tab/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashBoard',
      pathMatch: 'full'
    }, {
      path: 'dashBoard',
      component: _app_DashBoard_Tab_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
    }, {
      path: 'news',
      component: _app_News_Tab_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_6__["LatestNewsComponent"]
    }, {
      path: 'adminLogin',
      component: _app_Admin_Tab_admin_base_page_admin_base_page_component__WEBPACK_IMPORTED_MODULE_5__["AdminBasePageComponent"],
      children: _toConsumableArray(_app_Admin_Tab_admin_base_page_admin_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["adminRoutes"])
    }, {
      path: 'precaution',
      component: _app_Precaution_Tab_precautions_precautions_component__WEBPACK_IMPORTED_MODULE_7__["PrecautionsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _app_Admin_Tab_admin_login_admin_login_module__WEBPACK_IMPORTED_MODULE_3__["adminLoginModule"], _app_News_Tab_latest_news_latest_news_module__WEBPACK_IMPORTED_MODULE_8__["latestNewsModule"], _app_DashBoard_Tab_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared-material.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/shared-material.module.ts ***!
    \**************************************************/

  /*! exports provided: SharedMaterialModule */

  /***/
  function srcAppSharedSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function () {
      return SharedMaterialModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js"); // This is a shared module that is used throughout the app.

    /**
     * NgModule decorator that holds all the imported modules.
     * It also exports the modules for other modules to use them.
     */

    /**
     * This is the class that will be imported wherever needed.
     */


    var SharedMaterialModule = function SharedMaterialModule() {
      _classCallCheck(this, SharedMaterialModule);
    };

    SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: SharedMaterialModule
    });
    SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      factory: function SharedMaterialModule_Factory(t) {
        return new (t || SharedMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]],
        exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵsetClassMetadata"](SharedMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()],
          exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\NAGP-Angular9\covid-tracking-app\covid-tracking-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map