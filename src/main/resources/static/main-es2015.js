(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

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
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html ***!
      \**************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h3>Coupon panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../add-coupon\">Add coupon</a> <br>\n  <a routerLink=\"../update-coupon\">update coupon</a> <br>\n  <a routerLink=\"../delete-coupon\">Delete coupon</a> <br>\n</div>\n<h3>Company panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../get-company-details\">Company details</a>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html ***!
      \*********************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <label>\n    <input [(ngModel)]=\"company.name\" placeholder=\"name\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"company.email\" placeholder=\"email\" type=\"email\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"company.password\" placeholder=\"password\" type=\"password\">\n  </label>\n  <input (click)=\"addCompany()\" type=\"button\" value=\"Add\">\n</div>\n\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html ***!
      \*******************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <label>\n    <input [(ngModel)]=\"coupon.title\" placeholder=\"title\" type=\"text\">\n  </label>\n  <!--  <br>-->\n  <!--  <input type=\"checkbox\" name=\"Food\" value=\"Food\"> Food<br>-->\n  <!--  <input type=\"checkbox\" name=\"Vacation\" value=\"Vacation\"> Vacation<br>-->\n  <!--  <input type=\"checkbox\" name=\"Restaurant\" value=\"Restaurant\"> Restaurant<br>-->\n  <!--  <input type=\"checkbox\" name=\"Electricity\" value=\"Electricity\">Electricity<br>-->\n  <label>\n    <input [(ngModel)]=\"coupon.category\" placeholder=\"category\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.description\" placeholder=\"description\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.startDate\" type=\"date\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.endDate\" type=\"date\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.image\" placeholder=\"image URL\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.price\" placeholder=\"price\" type=\"number\">\n  </label>\n  <label>\n    <input (click)=\"addCoupon()\" type=\"button\" value=\"Add\">\n  </label>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html ***!
      \***********************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <label>\n    <input [(ngModel)]=\"customer.firstName\" placeholder=\"first name\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"customer.lastName\" placeholder=\"last name\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"customer.email\" placeholder=\"email\" type=\"email\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"customer.password\" placeholder=\"password\" type=\"password\">\n  </label>\n\n  <input (click)=\"addCustomer()\" type=\"button\" value=\"Add\">\n\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
      \*********************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h3>Company panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../add-company\">Add company</a>\n  <br>\n  <a routerLink=\"../update-company\">Update company</a>\n  <br>\n  <a routerLink=\"../delete-company\">Delete company</a>\n  <br>\n  <a routerLink=\"../get-one-company\">Get one company</a>\n  <br>\n  <a routerLink=\"../get-all-companies\">Get all companies</a>\n</div>\n<br>\n<h3>Customer panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../add-customer\">Add customer</a>\n  <br>\n  <a routerLink=\"../update-customer\">Update customer</a>\n  <br>\n  <a routerLink=\"../delete-customer\">Delete customer</a>\n  <br>\n  <a routerLink=\"../get-one-customer\">Get one customer</a>\n  <br>\n  <a routerLink=\"../get-all-customers\">Get all customers</a>\n</div>\n<br>\n<h3>Coupons panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../get-all-coupons\">Get all coupons</a>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html ***!
      \***************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<label>\n  <input [(ngModel)]=\"company.id\" placeholder=\"id\" type=\"number\">\n</label>\n<input (click)=\"deleteCompany()\" type=\"button\" value=\"Delete\">\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.html ***!
      \*******************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<p>delete-coupon-purchase works!</p>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html ***!
      \*************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<label>\n  <input [(ngModel)]=\"coupon.id\" placeholder=\"id\" type=\"number\">\n</label>\n<input (click)=\"deleteCoupon()\" type=\"button\" value=\"Delete\">\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html ***!
      \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<label>\n  <input [(ngModel)]=\"customer.id\" placeholder=\"id\" type=\"number\">\n</label>\n<input (click)=\"deleteCustomer()\" type=\"button\" value=\"Delete\">\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html ***!
      \*********************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor=\"let c of companies\">\n    <td>{{c.id}}</td>\n    <td>{{c.name}}</td>\n    <td>{{c.email}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html ***!
      \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>Company ID</th>\n    <th>Title</th>\n    <th>Description</th>\n    <th>Category</th>\n    <th>Price</th>\n    <th>Start Date</th>\n    <th>End Date</th>\n    <th>Amount</th>\n  </tr>\n  <tr *ngFor=\"let c of coupons\">\n    <td>{{c.id}}</td>\n    <td>{{c.companyID.id}}</td>\n    <td>{{c.title}}</td>\n    <td>{{c.description}}</td>\n    <td>{{c.category}}</td>\n    <td>{{c.price}}</td>\n    <td>{{c.startDate}}</td>\n    <td>{{c.endDate}}</td>\n    <td>{{c.amount}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html ***!
      \*********************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor=\"let c of customers\">\n    <td>{{c.id}}</td>\n    <td>{{c.firstName}}</td>\n    <td>{{c.lastName}}</td>\n    <td>{{c.email}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html ***!
      \*************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Email</th>\n  </tr>\n  <tr>\n    <td>{{company.id}}</td>\n    <td>{{company.name}}</td>\n    <td>{{company.email}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html ***!
      \***************************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>Title</th>\n    <th>Description</th>\n    <th>Category</th>\n    <th>Start Date</th>\n    <th>End Date</th>\n  </tr>\n  <tr *ngFor=\"let c of coupons\">\n    <td>{{c.title}}</td>\n    <td>{{c.description}}</td>\n    <td>{{c.category}}</td>\n    <td>{{c.startDate}}</td>\n    <td>{{c.endDate}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html ***!
      \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h5>Find company by ID</h5> <br>\n<label>\n  <input [(ngModel)]=\"company.id\" placeholder=\"id\" type=\"number\">\n  <input (click)=\"getOneCompanyById()\" type=\"button\" value=\"Find\">\n</label> <br>\n<h5>Find company by name</h5> <br>\n<label>\n  <input [(ngModel)]=\"company.name\" placeholder=\"name\" type=\"text\">\n  <input (click)=\"getOneCompanyByName()\" type=\"button\" value=\"Find\">\n</label><br>\n<h5>Find company by email</h5> <br>\n<label>\n  <input [(ngModel)]=\"company.email\" placeholder=\"email\" type=\"email\">\n  <input (click)=\"getOneCompanyByEmail()\" type=\"button\" value=\"Find\">\n</label><br>\n\n<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>Name</th>\n    <th>Email</th>\n  </tr>\n  <tr>\n    <td>{{company.id}}</td>\n    <td>{{company.name}}</td>\n    <td>{{company.email}}</td>\n  </tr>\n</table>\n\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html ***!
      \*******************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h5>Find customer by ID</h5> <br>\n<label>\n  <input [(ngModel)]=\"customer.id\" placeholder=\"id\" type=\"number\">\n  <input (click)=\"getOneCustomerById()\" type=\"button\" value=\"Find\">\n</label>\n<h5>Find customer by email</h5> <br>\n<label>\n  <input [(ngModel)]=\"customer.email\" placeholder=\"email\" type=\"email\">\n</label>\n<input (click)=\"getOneCustomerByEmail()\" type=\"button\" value=\"Find\">\n\n<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Email</th>\n  </tr>\n  <tr>\n    <td>{{customer.id}}</td>\n    <td>{{customer.firstName}}</td>\n    <td>{{customer.lastName}}</td>\n    <td>{{customer.email}}</td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
      \*******************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h1>Home page</h1>\n<h1>please login :)</h1>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
      \***********************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<section>\n  <header>\n    <h1>Welcome to Shatz ltd</h1>\n    <!--    <app-header></app-header>-->\n  </header>\n  <nav>\n    <app-navigation></app-navigation>\n  </nav>\n  <main>\n    <!-- <app-home></app-home> -->\n    <router-outlet></router-outlet>\n  </main>\n  <footer>\n    <!--    <app-footer></app-footer>-->\n  </footer>\n</section>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
      \*********************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <label>\n    <input [(ngModel)]=\"email\" placeholder=\"email\" required=\"true\" type=\"email\"/>\n  </label><br/>\n  <label>\n    <input [(ngModel)]=\"password\" placeholder=\"password\" required=\"true\" type=\"password\"/>\n  </label><br/>\n  <label>\n    <select [(ngModel)]=\"type\">\n      <option>Admin</option>\n      <option>Company</option>\n      <option>Customer</option>\n    </select>\n  </label><br/>\n  <input (click)=\"login()\" type=\"submit\" value=\"Login\"/>\n</div>\n\n\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
      \*******************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <a routerLink=\"home\">Home</a>\n  <a routerLink=\"login\">Login</a>\n  <a routerLink=\"\" (click)=\"logout()\">Logout</a>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html ***!
      \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<table style=\"width:100%\">\n  <tr>\n    <th>ID</th>\n    <th>Title</th>\n    <th>CompanyID</th>\n  </tr>\n  <tr *ngFor=\"let c of coupons\">\n    <td>{{c.id}}</td>\n    <td>{{c.title}}</td>\n    <td>{{c.companyID.id}}</td>\n    <td>\n      <button (click)=\"purchaseCoupon(c)\">Purchase</button>\n    </td>\n  </tr>\n</table>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html ***!
      \***************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<label>\n  <input (keyup)=getCompanyId() [(ngModel)]=\"company.id\" placeholder=\"id\" type=\"number\">\n</label>\n<label>\n  <input [(ngModel)]=\"company.name\" disabled=\"true\" placeholder=\"name\" type=\"text\">\n</label>\n<label>\n  <input [(ngModel)]=\"company.email\" placeholder=\"email\" type=\"email\">\n</label>\n<label>\n  <input [(ngModel)]=\"company.password\" placeholder=\"password\" type=\"password\">\n</label>\n<input (click)=\"updateCompany()\" type=\"submit\" value=\"Update\">\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html ***!
      \*************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<div>\n  <label>\n    <input [(ngModel)]=\"coupon.id\" placeholder=\"coupon ID\" type=\"number\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.title\" placeholder=\"title\" type=\"text\">\n  </label>\n  <!--  <br>-->\n  <!--  <input type=\"checkbox\" name=\"Food\" value=\"Food\"> Food<br>-->\n  <!--  <input type=\"checkbox\" name=\"Vacation\" value=\"Vacation\"> Vacation<br>-->\n  <!--  <input type=\"checkbox\" name=\"Restaurant\" value=\"Restaurant\"> Restaurant<br>-->\n  <!--  <input type=\"checkbox\" name=\"Electricity\" value=\"Electricity\">Electricity<br>-->\n  <label>\n    <input [(ngModel)]=\"coupon.category\" placeholder=\"category\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.description\" placeholder=\"description\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.startDate\" type=\"date\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.endDate\" type=\"date\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.image\" placeholder=\"image URL\" type=\"text\">\n  </label>\n  <label>\n    <input [(ngModel)]=\"coupon.price\" placeholder=\"price\" type=\"number\">\n  </label>\n  <label>\n    <input (click)=\"updateCoupon()\" type=\"button\" value=\"Update\">\n  </label>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html ***!
      \*****************************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<label>\n  <input (keyup)=getCustomerId() [(ngModel)]=\"customer.id\" placeholder=\"id\" type=\"number\">\n</label>\n<label>\n  <input [(ngModel)]=\"customer.firstName\" placeholder=\"first name\" type=\"string\">\n</label>\n<label>\n  <input [(ngModel)]=\"customer.lastName\" placeholder=\"last name\" type=\"string\">\n</label>\n<label>\n  <input [(ngModel)]=\"customer.email\" placeholder=\"email\" type=\"email\">\n</label>\n<label>\n  <input [(ngModel)]=\"customer.password\" placeholder=\"password\" type=\"password\">\n</label>\n\n<input (click)=\"updateCustomer()\" type=\"button\" value=\"Update\">\n");

        /***/
    }),

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
      \****************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("<h3>Customer panel:</h3>\n<br>\n<div>\n  <a routerLink=\"../purchase-coupon\">Purchase coupon</a> <br>\n  <a routerLink=\"../get-customer-coupons\">Customer coupons</a>\n</div>\n");

        /***/
    }),

    /***/
    "./node_modules/tslib/tslib.es6.js":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/
    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__extends", function () {
            return __extends;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__assign", function () {
            return __assign;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__rest", function () {
            return __rest;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__decorate", function () {
            return __decorate;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__param", function () {
            return __param;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__metadata", function () {
            return __metadata;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
            return __awaiter;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__generator", function () {
            return __generator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
            return __exportStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__values", function () {
            return __values;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__read", function () {
            return __read;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spread", function () {
            return __spread;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
            return __spreadArrays;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__await", function () {
            return __await;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
            return __asyncGenerator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
            return __asyncDelegator;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
            return __asyncValues;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
            return __makeTemplateObject;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importStar", function () {
            return __importStar;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
            return __importDefault;
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        /* global Reflect, Promise */

        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
                function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };

        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                }
            return t;
        }

        function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
            return function (target, key) {
                decorator(target, key, paramIndex);
            }
        }

        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }

                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                label: 0, sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                }, trys: [], ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
                return this;
            }), g;

            function verb(n) {
                return function (v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {value: op[1], done: false};
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {value: op[0] ? op[1] : void 0, done: true};
            }
        }

        function __exportStar(m, exports) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }

        function __values(o) {
            var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
            if (m) return m.call(o);
            return {
                next: function () {
                    if (o && i >= o.length) o = void 0;
                    return {value: o && o[i++], done: !o};
                }
            };
        }

        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o), r, ar = [], e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {error: error};
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }

        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
            return ar;
        }

        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        }

        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []), i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i;

            function verb(n) {
                if (g[n]) i[n] = function (v) {
                    return new Promise(function (a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
            }

            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }

            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }

            function fulfill(value) {
                resume("next", value);
            }

            function reject(value) {
                resume("throw", value);
            }

            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }

        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function (e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function () {
                return this;
            }, i;

            function verb(n, f) {
                i[n] = o[n] ? function (v) {
                    return (p = !p) ? {value: __await(o[n](v)), done: n === "return"} : f ? f(v) : v;
                } : f;
            }
        }

        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator], i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i);

            function verb(n) {
                i[n] = o[n] && function (v) {
                    return new Promise(function (resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }

            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function (v) {
                    resolve({value: v, done: d});
                }, reject);
            }
        }

        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {value: raw});
            } else {
                cooked.raw = raw;
            }
            return cooked;
        }

        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result.default = mod;
            return result;
        }

        function __importDefault(mod) {
            return (mod && mod.__esModule) ? mod : {default: mod};
        }


        /***/
    }),

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
        /* harmony import */
        var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
        /* harmony import */
        var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
        /* harmony import */
        var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
        /* harmony import */
        var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
        /* harmony import */
        var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
        /* harmony import */
        var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
        /* harmony import */
        var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
        /* harmony import */
        var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
        /* harmony import */
        var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
        /* harmony import */
        var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
        /* harmony import */
        var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
        /* harmony import */
        var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
        /* harmony import */
        var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
        /* harmony import */
        var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
        /* harmony import */
        var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
        /* harmony import */
        var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
        /* harmony import */
        var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
        /* harmony import */
        var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
        /* harmony import */
        var _customer_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
        /* harmony import */
        var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
        /* harmony import */
        var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
        /* harmony import */
        var _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts");


        const routes = [
            {path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]},
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'admin',
                component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"]
            },
            {path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"]},
            {
                path: 'customer',
                component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_21__["CustomerComponent"]
            },
            {
                path: 'add-company',
                component: _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_6__["AddCompanyComponent"]
            },
            {
                path: 'update-company',
                component: _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyComponent"]
            },
            {
                path: 'delete-company',
                component: _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_8__["DeleteCompanyComponent"]
            },
            {
                path: 'get-all-companies',
                component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_9__["GetAllCompaniesComponent"]
            },
            {
                path: 'get-one-company',
                component: _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_10__["GetOneCompanyComponent"]
            },
            {
                path: 'add-customer',
                component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_11__["AddCustomerComponent"]
            },
            {
                path: 'update-customer',
                component: _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCustomerComponent"]
            },
            {
                path: 'delete-customer',
                component: _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_13__["DeleteCustomerComponent"]
            },
            {
                path: 'get-one-customer',
                component: _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_14__["GetOneCustomerComponent"]
            },
            {
                path: 'get-all-customers',
                component: _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_15__["GetAllCustomersComponent"]
            },
            {
                path: 'add-coupon',
                component: _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_17__["AddCouponComponent"]
            },
            {
                path: 'update-coupon',
                component: _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_19__["UpdateCouponComponent"]
            },
            {
                path: 'delete-coupon',
                component: _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_20__["DeleteCouponComponent"]
            },
            {
                path: 'get-company-details',
                component: _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_18__["GetCompanyDetailsComponent"]
            },
            {
                path: 'purchase-coupon',
                component: _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_22__["PurchaseCouponComponent"]
            },
            {
                path: 'get-all-coupons',
                component: _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_23__["GetAllCouponsComponent"]
            },
            {
                path: 'get-customer-coupons',
                component: _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_24__["GetCustomerCouponsComponent"]
            },
            {path: '', redirectTo: 'login', pathMatch: 'full'}
        ];
        let AppRoutingModule = class AppRoutingModule {
        };
        AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            })
        ], AppRoutingModule);


        /***/
    }),

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
        /* harmony import */
        var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
        /* harmony import */
        var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
        /* harmony import */
        var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
        /* harmony import */
        var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
        /* harmony import */
        var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
        /* harmony import */
        var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
        /* harmony import */
        var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
        /* harmony import */
        var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
        /* harmony import */
        var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
        /* harmony import */
        var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
        /* harmony import */
        var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
        /* harmony import */
        var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
        /* harmony import */
        var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
        /* harmony import */
        var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
        /* harmony import */
        var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
        /* harmony import */
        var _company_company_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
        /* harmony import */
        var _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
        /* harmony import */
        var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
        /* harmony import */
        var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
        /* harmony import */
        var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
        /* harmony import */
        var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
        /* harmony import */
        var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
        /* harmony import */
        var _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/get-all-coupons/get-all-coupons.component */ "./src/app/components/get-all-coupons/get-all-coupons.component.ts");
        /* harmony import */
        var _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/get-customer-coupons/get-customer-coupons.component */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts");
        /* harmony import */
        var _components_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/delete-coupon-purchase/delete-coupon-purchase.component */ "./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.ts");


        let AppModule = class AppModule {
        };
        AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                declarations: [
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_11__["AddCompanyComponent"],
                    _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_12__["UpdateCompanyComponent"],
                    _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_13__["DeleteCompanyComponent"],
                    _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_14__["GetAllCompaniesComponent"],
                    _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_15__["GetOneCompanyComponent"],
                    _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__["AddCustomerComponent"],
                    _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_17__["UpdateCustomerComponent"],
                    _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_18__["DeleteCustomerComponent"],
                    _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_19__["GetOneCustomerComponent"],
                    _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_20__["GetAllCustomersComponent"],
                    _company_company_component__WEBPACK_IMPORTED_MODULE_21__["CompanyComponent"],
                    _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__["CustomerComponent"],
                    _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_23__["AddCouponComponent"],
                    _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_24__["GetCompanyDetailsComponent"],
                    _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_25__["UpdateCouponComponent"],
                    _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__["DeleteCouponComponent"],
                    _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseCouponComponent"],
                    _components_get_all_coupons_get_all_coupons_component__WEBPACK_IMPORTED_MODULE_28__["GetAllCouponsComponent"],
                    _components_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_29__["GetCustomerCouponsComponent"],
                    _components_delete_coupon_purchase_delete_coupon_purchase_component__WEBPACK_IMPORTED_MODULE_30__["DeleteCouponPurchaseComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"]]
            })
        ], AppModule);


        /***/
    }),

    /***/
    "./src/app/company/company.component.css":
    /*!***********************************************!*\
      !*** ./src/app/company/company.component.css ***!
      \***********************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */");

        /***/
    }),

    /***/
    "./src/app/company/company.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/company/company.component.ts ***!
      \**********************************************/
    /*! exports provided: CompanyComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
            return CompanyComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let CompanyComponent = class CompanyComponent {
            constructor() {
            }

            ngOnInit() {
            }
        };
        CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-company',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/company/company.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")).default]
            })
        ], CompanyComponent);


        /***/
    }),

    /***/
    "./src/app/components/add-company/add-company.component.css":
    /*!******************************************************************!*\
      !*** ./src/app/components/add-company/add-company.component.css ***!
      \******************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/add-company/add-company.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/add-company/add-company.component.ts ***!
      \*****************************************************************/
    /*! exports provided: AddCompanyComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () {
            return AddCompanyComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/companies */ "./src/app/models/companies.ts");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let AddCompanyComponent = class AddCompanyComponent {
            constructor(client) {
                this.client = client;
                this.company = new _models_companies__WEBPACK_IMPORTED_MODULE_2__["Companies"]();
            }

            ngOnInit() {
            }

            addCompany() {
                this.client.addCompany(this.company).subscribe(result => {
                    alert('company info:  ' + 'company ID: ' + result.id + ' name: ' + result.name + ' email: ' + result.email);
                });
            }
        };
        AddCompanyComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]}
        ];
        AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-add-company',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/add-company/add-company.component.css")).default]
            })
        ], AddCompanyComponent);


        /***/
    }),

    /***/
    "./src/app/components/add-coupon/add-coupon.component.css":
    /*!****************************************************************!*\
      !*** ./src/app/components/add-coupon/add-coupon.component.css ***!
      \****************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvdXBvbi9hZGQtY291cG9uLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/components/add-coupon/add-coupon.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/add-coupon/add-coupon.component.ts ***!
      \***************************************************************/
    /*! exports provided: AddCouponComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function () {
            return AddCouponComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_coupons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/coupons */ "./src/app/models/coupons.ts");
        /* harmony import */
        var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");


        let AddCouponComponent = class AddCouponComponent {
            constructor(client) {
                this.client = client;
                this.coupon = new _models_coupons__WEBPACK_IMPORTED_MODULE_2__["Coupons"]();
            }

            ngOnInit() {
            }

            addCoupon() {
                this.client.addCoupon(this.coupon).subscribe(result => {
                    alert('coupon info:  ' + ' ID: ' + result.id + ' name: ' + result.title);
                });
            }
        };
        AddCouponComponent.ctorParameters = () => [
            {type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]}
        ];
        AddCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-add-coupon',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-coupon.component.css */ "./src/app/components/add-coupon/add-coupon.component.css")).default]
            })
        ], AddCouponComponent);


        /***/
    }),

    /***/
    "./src/app/components/add-customer/add-customer.component.css":
    /*!********************************************************************!*\
      !*** ./src/app/components/add-customer/add-customer.component.css ***!
      \********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */");

        /***/
    }),

    /***/
    "./src/app/components/add-customer/add-customer.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/add-customer/add-customer.component.ts ***!
      \*******************************************************************/
    /*! exports provided: AddCustomerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () {
            return AddCustomerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
        /* harmony import */
        var _models_customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/customers */ "./src/app/models/customers.ts");


        let AddCustomerComponent = class AddCustomerComponent {
            constructor(client) {
                this.client = client;
                this.customer = new _models_customers__WEBPACK_IMPORTED_MODULE_3__["Customers"]();
            }

            ngOnInit() {
            }

            addCustomer() {
                this.client.addCustomer(this.customer).subscribe(result => {
                    alert('Customer info:  ' + 'customer ID: ' + result.id + ' name: ' + result.firstName + ' last name: ' + ' email: ' + result.email);
                });
            }
        };
        AddCustomerComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-add-customer',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/add-customer/add-customer.component.css")).default]
            })
        ], AddCustomerComponent);


        /***/
    }),

    /***/
    "./src/app/components/admin/admin.component.css":
    /*!******************************************************!*\
      !*** ./src/app/components/admin/admin.component.css ***!
      \******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/admin/admin.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/admin/admin.component.ts ***!
      \*****************************************************/
    /*! exports provided: AdminComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
            return AdminComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let AdminComponent = class AdminComponent {
            // TODO add logout route
            // TODO add missing methods from Spring for example show all coupons by price
            // TODO finish customer component
            constructor() {
            }

            ngOnInit() {
            }
        };
        AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-admin',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
            })
        ], AdminComponent);


        /***/
    }),

    /***/
    "./src/app/components/delete-company/delete-company.component.css":
    /*!************************************************************************!*\
      !*** ./src/app/components/delete-company/delete-company.component.css ***!
      \************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWNvbXBhbnkvZGVsZXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/delete-company/delete-company.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/delete-company/delete-company.component.ts ***!
      \***********************************************************************/
    /*! exports provided: DeleteCompanyComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function () {
            return DeleteCompanyComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/companies */ "./src/app/models/companies.ts");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let DeleteCompanyComponent = class DeleteCompanyComponent {
            constructor(client) {
                this.client = client;
                this.company = new _models_companies__WEBPACK_IMPORTED_MODULE_2__["Companies"]();
            }

            deleteCompany() {
                this.client.deleteCompany(this.company.id).subscribe(() => {
                    alert('company deleted');
                });
            }

            ngOnInit() {
            }
        };
        DeleteCompanyComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]}
        ];
        DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-delete-company',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-company.component.css */ "./src/app/components/delete-company/delete-company.component.css")).default]
            })
        ], DeleteCompanyComponent);


        /***/
    }),

    /***/
    "./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.css":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.css ***!
      \****************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWNvdXBvbi1wdXJjaGFzZS9kZWxldGUtY291cG9uLXB1cmNoYXNlLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.ts ***!
      \***************************************************************************************/
    /*! exports provided: DeleteCouponPurchaseComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DeleteCouponPurchaseComponent", function () {
            return DeleteCouponPurchaseComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_coupons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/coupons */ "./src/app/models/coupons.ts");
        /* harmony import */
        var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");


        let DeleteCouponPurchaseComponent = class DeleteCouponPurchaseComponent {
            constructor(client) {
                this.client = client;
                this.coupon = new _models_coupons__WEBPACK_IMPORTED_MODULE_2__["Coupons"]();
            }

            deleteCouponPurchase() {
                this.client.deleteCouponPurchase(this.coupon).subscribe(() => {
                    alert('coupon deleted');
                });
            }

            ngOnInit() {
            }
        };
        DeleteCouponPurchaseComponent.ctorParameters = () => [
            {type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]}
        ];
        DeleteCouponPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-delete-coupon-purchase',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-coupon-purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-coupon-purchase.component.css */ "./src/app/components/delete-coupon-purchase/delete-coupon-purchase.component.css")).default]
            })
        ], DeleteCouponPurchaseComponent);


        /***/
    }),

    /***/
    "./src/app/components/delete-coupon/delete-coupon.component.css":
    /*!**********************************************************************!*\
      !*** ./src/app/components/delete-coupon/delete-coupon.component.css ***!
      \**********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWNvdXBvbi9kZWxldGUtY291cG9uLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/components/delete-coupon/delete-coupon.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/delete-coupon/delete-coupon.component.ts ***!
      \*********************************************************************/
    /*! exports provided: DeleteCouponComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DeleteCouponComponent", function () {
            return DeleteCouponComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_coupons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/coupons */ "./src/app/models/coupons.ts");
        /* harmony import */
        var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");


        let DeleteCouponComponent = class DeleteCouponComponent {
            constructor(client) {
                this.client = client;
                this.coupon = new _models_coupons__WEBPACK_IMPORTED_MODULE_2__["Coupons"]();
            }

            deleteCoupon() {
                this.client.deleteCoupon(this.coupon.id).subscribe(() => {
                    alert('coupon deleted');
                });
            }

            ngOnInit() {
            }
        };
        DeleteCouponComponent.ctorParameters = () => [
            {type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]}
        ];
        DeleteCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-delete-coupon',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-coupon.component.css */ "./src/app/components/delete-coupon/delete-coupon.component.css")).default]
            })
        ], DeleteCouponComponent);


        /***/
    }),

    /***/
    "./src/app/components/delete-customer/delete-customer.component.css":
    /*!**************************************************************************!*\
      !*** ./src/app/components/delete-customer/delete-customer.component.css ***!
      \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWN1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */");

        /***/
    }),

    /***/
    "./src/app/components/delete-customer/delete-customer.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/delete-customer/delete-customer.component.ts ***!
      \*************************************************************************/
    /*! exports provided: DeleteCustomerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function () {
            return DeleteCustomerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
        /* harmony import */
        var _models_customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/customers */ "./src/app/models/customers.ts");


        let DeleteCustomerComponent = class DeleteCustomerComponent {
            constructor(client) {
                this.client = client;
                this.customer = new _models_customers__WEBPACK_IMPORTED_MODULE_3__["Customers"]();
            }

            deleteCustomer() {
                this.client.deleteCustomer(this.customer.id).subscribe(() => {
                    alert('customer deleted');
                });
            }

            ngOnInit() {
            }
        };
        DeleteCustomerComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-delete-customer',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-customer.component.css */ "./src/app/components/delete-customer/delete-customer.component.css")).default]
            })
        ], DeleteCustomerComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-all-companies/get-all-companies.component.css":
    /*!******************************************************************************!*\
      !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
      \******************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY29tcGFuaWVzL2dldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

        /***/
    }),

    /***/
    "./src/app/components/get-all-companies/get-all-companies.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
      \*****************************************************************************/
    /*! exports provided: GetAllCompaniesComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function () {
            return GetAllCompaniesComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let GetAllCompaniesComponent = class GetAllCompaniesComponent {
            constructor(client) {
                this.client = client;
                this.companies = [];
            }

            ngOnInit() {
                this.client.getAllCompanies().subscribe((result) => {
                    this.companies = result;
                });
            }
        };
        GetAllCompaniesComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-all-companies',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")).default]
            })
        ], GetAllCompaniesComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-all-coupons/get-all-coupons.component.css":
    /*!**************************************************************************!*\
      !*** ./src/app/components/get-all-coupons/get-all-coupons.component.css ***!
      \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbnMvZ2V0LWFsbC1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb25zL2dldC1hbGwtY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/app/components/get-all-coupons/get-all-coupons.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/get-all-coupons/get-all-coupons.component.ts ***!
      \*************************************************************************/
    /*! exports provided: GetAllCouponsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetAllCouponsComponent", function () {
            return GetAllCouponsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let GetAllCouponsComponent = class GetAllCouponsComponent {
            constructor(client) {
                this.client = client;
                this.coupons = [];
            }

            ngOnInit() {
                this.client.getAllCoupons().subscribe((result) => {
                    this.coupons = result;
                });
            }
        };
        GetAllCouponsComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        GetAllCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-all-coupons',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupons/get-all-coupons.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupons.component.css */ "./src/app/components/get-all-coupons/get-all-coupons.component.css")).default]
            })
        ], GetAllCouponsComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-all-customers/get-all-customers.component.css":
    /*!******************************************************************************!*\
      !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
      \******************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY3VzdG9tZXJzL2dldC1hbGwtY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/app/components/get-all-customers/get-all-customers.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
      \*****************************************************************************/
    /*! exports provided: GetAllCustomersComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function () {
            return GetAllCustomersComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let GetAllCustomersComponent = class GetAllCustomersComponent {
            constructor(client) {
                this.client = client;
                this.customers = [];
            }

            ngOnInit() {
                this.client.getAllCustomers().subscribe((result) => {
                    this.customers = result;
                });
            }
        };
        GetAllCustomersComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-all-customers',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/get-all-customers/get-all-customers.component.css")).default]
            })
        ], GetAllCustomersComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-company-details/get-company-details.component.css":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/get-company-details/get-company-details.component.css ***!
      \**********************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1kZXRhaWxzL2dldC1jb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1kZXRhaWxzL2dldC1jb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

        /***/
    }),

    /***/
    "./src/app/components/get-company-details/get-company-details.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/get-company-details/get-company-details.component.ts ***!
      \*********************************************************************************/
    /*! exports provided: GetCompanyDetailsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetCompanyDetailsComponent", function () {
            return GetCompanyDetailsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/companies */ "./src/app/models/companies.ts");
        /* harmony import */
        var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");


        let GetCompanyDetailsComponent = class GetCompanyDetailsComponent {
            constructor(client) {
                this.client = client;
                this.company = new _models_companies__WEBPACK_IMPORTED_MODULE_2__["Companies"]();
            }

            ngOnInit() {
                this.client.getCompanyDetails().subscribe((result) => {
                    this.company = result;
                });
            }
        };
        GetCompanyDetailsComponent.ctorParameters = () => [
            {type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]}
        ];
        GetCompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-company-details',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-details.component.css */ "./src/app/components/get-company-details/get-company-details.component.css")).default]
            })
        ], GetCompanyDetailsComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-customer-coupons/get-customer-coupons.component.css":
    /*!************************************************************************************!*\
      !*** ./src/app/components/get-customer-coupons/get-customer-coupons.component.css ***!
      \************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMvZ2V0LWN1c3RvbWVyLWNvdXBvbnMuY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/get-customer-coupons/get-customer-coupons.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/get-customer-coupons/get-customer-coupons.component.ts ***!
      \***********************************************************************************/
    /*! exports provided: GetCustomerCouponsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsComponent", function () {
            return GetCustomerCouponsComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");


        let GetCustomerCouponsComponent = class GetCustomerCouponsComponent {
            constructor(client) {
                this.client = client;
                this.coupons = [];
            }

            ngOnInit() {
                this.client.getCustomerCoupons().subscribe((result) => {
                    this.coupons = result;
                });
            }
        };
        GetCustomerCouponsComponent.ctorParameters = () => [
            {type: _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]}
        ];
        GetCustomerCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-customer-coupons',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-coupons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-coupons/get-customer-coupons.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-coupons.component.css */ "./src/app/components/get-customer-coupons/get-customer-coupons.component.css")).default]
            })
        ], GetCustomerCouponsComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-one-company/get-one-company.component.css":
    /*!**************************************************************************!*\
      !*** ./src/app/components/get-one-company/get-one-company.component.css ***!
      \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWNvbXBhbnkvZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LW9uZS1jb21wYW55L2dldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/app/components/get-one-company/get-one-company.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/get-one-company/get-one-company.component.ts ***!
      \*************************************************************************/
    /*! exports provided: GetOneCompanyComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function () {
            return GetOneCompanyComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_companies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/companies */ "./src/app/models/companies.ts");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let GetOneCompanyComponent = class GetOneCompanyComponent {
            constructor(client) {
                this.client = client;
                this.company = new _models_companies__WEBPACK_IMPORTED_MODULE_2__["Companies"]();
            }

            getOneCompanyById() {
                this.client.getOneCompanyById(this.company.id).subscribe((result) => {
                    if (result == null || undefined) {
                        alert('Company not found!');
                    } else {
                        this.company = result;
                    }
                });
            }

            getOneCompanyByName() {
                this.client.getOneCompanyByName(this.company.name).subscribe((result) => {
                    if (result == null || undefined) {
                        alert('Company not found!');
                    } else {
                        this.company = result;
                    }
                });
            }

            getOneCompanyByEmail() {
                this.client.getOneCompanyByEmail(this.company.email).subscribe((result) => {
                    if (result == null || undefined) {
                        alert('Company not found!');
                    } else {
                        this.company = result;
                    }
                });
            }

            ngOnInit() {
            }
        };
        GetOneCompanyComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]}
        ];
        GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-one-company',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-company.component.css */ "./src/app/components/get-one-company/get-one-company.component.css")).default]
            })
        ], GetOneCompanyComponent);


        /***/
    }),

    /***/
    "./src/app/components/get-one-customer/get-one-customer.component.css":
    /*!****************************************************************************!*\
      !*** ./src/app/components/get-one-customer/get-one-customer.component.css ***!
      \****************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWN1c3RvbWVyL2dldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWN1c3RvbWVyL2dldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

        /***/
    }),

    /***/
    "./src/app/components/get-one-customer/get-one-customer.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/get-one-customer/get-one-customer.component.ts ***!
      \***************************************************************************/
    /*! exports provided: GetOneCustomerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function () {
            return GetOneCustomerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
        /* harmony import */
        var _models_customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/customers */ "./src/app/models/customers.ts");


        let GetOneCustomerComponent = class GetOneCustomerComponent {
            constructor(client) {
                this.client = client;
                this.customer = new _models_customers__WEBPACK_IMPORTED_MODULE_3__["Customers"]();
            }

            getOneCustomerById() {
                this.client.getOneCustomerById(this.customer.id).subscribe((result) => {
                    if (result == null || undefined) {
                        alert('customer not found!');
                    } else {
                        this.customer = result;
                    }
                });
            }

            getOneCustomerByEmail() {
                this.client.getOneCustomerByEmail(this.customer.email).subscribe((result) => {
                    if (result == null || undefined) {
                        alert('customer not found!');
                    } else {
                        this.customer = result;
                    }
                });
            }

            ngOnInit() {
            }
        };
        GetOneCustomerComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-get-one-customer',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-customer.component.css */ "./src/app/components/get-one-customer/get-one-customer.component.css")).default]
            })
        ], GetOneCustomerComponent);


        /***/
    }),

    /***/
    "./src/app/components/home/home.component.css":
    /*!****************************************************!*\
      !*** ./src/app/components/home/home.component.css ***!
      \****************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/components/home/home.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/
    /*! exports provided: HomeComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
            return HomeComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let HomeComponent = class HomeComponent {
            constructor() {
            }

            ngOnInit() {
            }
        };
        HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-home',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
            })
        ], HomeComponent);


        /***/
    }),

    /***/
    "./src/app/components/layout/layout.component.css":
    /*!********************************************************!*\
      !*** ./src/app/components/layout/layout.component.css ***!
      \********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("section {\r\n  height: 100%;\r\n  background-color: #ff9e0c;\r\n  display: grid;\r\n  grid-template-rows: 10% 80% 10%;\r\n  grid-template-columns: 20% 80%;\r\n}\r\n\r\nsection > * {\r\n  border: solid black 1px;\r\n}\r\n\r\nheader {\r\n  grid-column: span 2;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  grid-column: span 2;\r\n}\r\n\r\nmain {\r\n  overflow: auto;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ZTBjO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgODAlIDEwJTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbn1cclxuXHJcbnNlY3Rpb24gPiAqIHtcclxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/app/components/layout/layout.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/layout/layout.component.ts ***!
      \*******************************************************/
    /*! exports provided: LayoutComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
            return LayoutComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let LayoutComponent = class LayoutComponent {
            constructor() {
            }

            ngOnInit() {
            }
        };
        LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-layout',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
            })
        ], LayoutComponent);


        /***/
    }),

    /***/
    "./src/app/components/login/login.component.css":
    /*!******************************************************!*\
      !*** ./src/app/components/login/login.component.css ***!
      \******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/login/login.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/
    /*! exports provided: LoginComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
            return LoginComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


        let LoginComponent = class LoginComponent {
            constructor(loginService, router) {
                this.loginService = loginService;
                this.router = router;
            }

            ngOnInit() {
            }

            login() {
                this.loginService.login(this.email, this.password, this.type).subscribe(response => {
                    // console.log(response);
                    if (response.startsWith('4')) {
                        alert('Login failed');
                    } else if (this.type === ('Admin')) {
                        sessionStorage.token = response;
                        this.router.navigate(['/admin']);
                    } else if (this.type === ('Company')) {
                        sessionStorage.token = response;
                        this.router.navigate(['/company']);
                    } else if (this.type === ('Customer')) {
                        sessionStorage.token = response;
                        this.router.navigate(['/customer']);
                    }
                });
            }
        };
        LoginComponent.ctorParameters = () => [
            {type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]},
            {type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]}
        ];
        LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-login',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
            })
        ], LoginComponent);


        /***/
    }),

    /***/
    "./src/app/components/navigation/navigation.component.css":
    /*!****************************************************************!*\
      !*** ./src/app/components/navigation/navigation.component.css ***!
      \****************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("div {\r\n  margin: 10px;\r\n}\r\n\r\ndiv > a {\r\n  display: block;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\ndiv > button {\r\n  display: block;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuZGl2ID4gYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5kaXYgPiBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4iXX0= */");

        /***/
    }),

    /***/
    "./src/app/components/navigation/navigation.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/navigation/navigation.component.ts ***!
      \***************************************************************/
    /*! exports provided: NavigationComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
            return NavigationComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let NavigationComponent = class NavigationComponent {
            constructor(client) {
                this.client = client;
            }

            logout() {
                this.client.post('http://localhost:8080/logout/' + sessionStorage.getItem('token'), null);
                sessionStorage.removeItem('token');
                alert('logged out successfully');
            }

            ngOnInit() {
            }
        };
        NavigationComponent.ctorParameters = () => [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-navigation',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
            })
        ], NavigationComponent);


        /***/
    }),

    /***/
    "./src/app/components/purchase-coupon/purchase-coupon.component.css":
    /*!**************************************************************************!*\
      !*** ./src/app/components/purchase-coupon/purchase-coupon.component.css ***!
      \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("table, th, td {\r\n  border: 2px solid black;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  table-layout: fixed;\r\n  width: 180px;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdXJjaGFzZS1jb3Vwb24vcHVyY2hhc2UtY291cG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2UtY291cG9uL3B1cmNoYXNlLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */");

        /***/
    }),

    /***/
    "./src/app/components/purchase-coupon/purchase-coupon.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/purchase-coupon/purchase-coupon.component.ts ***!
      \*************************************************************************/
    /*! exports provided: PurchaseCouponComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function () {
            return PurchaseCouponComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");


        let PurchaseCouponComponent = class PurchaseCouponComponent {
            constructor(client) {
                this.client = client;
                this.coupons = [];
            }

            ngOnInit() {
                this.client.getAllCoupons().subscribe((result) => {
                    this.coupons = result;
                });
            }

            purchaseCoupon(c) {
                this.client.purchaseCoupon(c).subscribe(result => {
                    if (result != null) {
                        alert('coupon purchased:  ' + ' ID: ' + result.id + ' name: ' + result.title);
                    }
                });
            }
        };
        PurchaseCouponComponent.ctorParameters = () => [
            {type: _services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]}
        ];
        PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-purchase-coupon',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/components/purchase-coupon/purchase-coupon.component.css")).default]
            })
        ], PurchaseCouponComponent);


        /***/
    }),

    /***/
    "./src/app/components/update-company/update-company.component.css":
    /*!************************************************************************!*\
      !*** ./src/app/components/update-company/update-company.component.css ***!
      \************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJ9 */");

        /***/
    }),

    /***/
    "./src/app/components/update-company/update-company.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/update-company/update-company.component.ts ***!
      \***********************************************************************/
    /*! exports provided: UpdateCompanyComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function () {
            return UpdateCompanyComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
        /* harmony import */
        var _models_companies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/companies */ "./src/app/models/companies.ts");


        let UpdateCompanyComponent =
// add new component ng g c components/
            class UpdateCompanyComponent {
                constructor(client) {
                    this.client = client;
                    this.company = new _models_companies__WEBPACK_IMPORTED_MODULE_3__["Companies"]();
                }

                updateCompany() {
                    this.client.updateCompany(this.company).subscribe(result => {
                        alert('company info:  ' + 'company ID: ' + result.id + ' name: ' + result.name + ' email: ' + result.email);
                    });
                }

                // get company name by it's ID to auto fill the "name" field in the update page
                getCompanyId() {
                    this.client.getCompanyId(this.company.id).subscribe(result => {
                        if (result == null || undefined) {
                            this.company.name = 'company not found!';
                        } else {
                            this.company.name = result.name;
                        }
                    });
                }

                ngOnInit() {
                }
            };
        UpdateCompanyComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]}
        ];
        UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-update-company',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/update-company/update-company.component.css")).default]
            })
            // add new component ng g c components/
        ], UpdateCompanyComponent);


        /***/
    }),

    /***/
    "./src/app/components/update-coupon/update-coupon.component.css":
    /*!**********************************************************************!*\
      !*** ./src/app/components/update-coupon/update-coupon.component.css ***!
      \**********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNvdXBvbi91cGRhdGUtY291cG9uLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/components/update-coupon/update-coupon.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/update-coupon/update-coupon.component.ts ***!
      \*********************************************************************/
    /*! exports provided: UpdateCouponComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function () {
            return UpdateCouponComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_coupons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/coupons */ "./src/app/models/coupons.ts");
        /* harmony import */
        var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");


        let UpdateCouponComponent = class UpdateCouponComponent {
            constructor(client) {
                this.client = client;
                this.coupon = new _models_coupons__WEBPACK_IMPORTED_MODULE_2__["Coupons"]();
            }

            updateCoupon() {
                this.client.updateCoupon(this.coupon).subscribe(result => {
                    alert('coupon info:  ' + ' ID: ' + result.id + ' name: ' + result.title);
                });
            }

            ngOnInit() {
            }
        };
        UpdateCouponComponent.ctorParameters = () => [
            {type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]}
        ];
        UpdateCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-update-coupon',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-coupon.component.css */ "./src/app/components/update-coupon/update-coupon.component.css")).default]
            })
        ], UpdateCouponComponent);


        /***/
    }),

    /***/
    "./src/app/components/update-customer/update-customer.component.css":
    /*!**************************************************************************!*\
      !*** ./src/app/components/update-customer/update-customer.component.css ***!
      \**************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWN1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */");

        /***/
    }),

    /***/
    "./src/app/components/update-customer/update-customer.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/update-customer/update-customer.component.ts ***!
      \*************************************************************************/
    /*! exports provided: UpdateCustomerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function () {
            return UpdateCustomerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _models_customers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/customers */ "./src/app/models/customers.ts");
        /* harmony import */
        var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");


        let UpdateCustomerComponent = class UpdateCustomerComponent {
            constructor(client) {
                this.client = client;
                this.customer = new _models_customers__WEBPACK_IMPORTED_MODULE_2__["Customers"]();
            }

            updateCustomer() {
                this.client.updateCustomer(this.customer).subscribe(result => {
                    // tslint:disable-next-line:max-line-length
                    alert('info: ' + ' ID: ' + result.id + ' first name: ' + result.firstName + ' last name ' + result.lastName + ' email: ' + result.email);
                });
            }

            getCustomerId() {
                this.client.getOneCustomerById(this.customer.id).subscribe(result => {
                    if (result == null || undefined) {
                        this.customer.firstName = 'customer not found!';
                        this.customer.lastName = '';
                        this.customer.email = '';
                        this.customer.password = '';
                    } else {
                        this.customer.firstName = result.firstName;
                        this.customer.lastName = result.lastName;
                        this.customer.email = result.email;
                    }
                });
            }

            ngOnInit() {
            }
        };
        UpdateCustomerComponent.ctorParameters = () => [
            {type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]}
        ];
        UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-update-customer',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/update-customer/update-customer.component.css")).default]
            })
        ], UpdateCustomerComponent);


        /***/
    }),

    /***/
    "./src/app/customer/customer.component.css":
    /*!*************************************************!*\
      !*** ./src/app/customer/customer.component.css ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */
        __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */");

        /***/
    }),

    /***/
    "./src/app/customer/customer.component.ts":
    /*!************************************************!*\
      !*** ./src/app/customer/customer.component.ts ***!
      \************************************************/
    /*! exports provided: CustomerComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
            return CustomerComponent;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


        let CustomerComponent = class CustomerComponent {
            constructor() {
            }

            ngOnInit() {
            }
        };
        CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-customer',
                template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
                styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")).default]
            })
        ], CustomerComponent);


        /***/
    }),

    /***/
    "./src/app/models/companies.ts":
    /*!*************************************!*\
      !*** ./src/app/models/companies.ts ***!
      \*************************************/
    /*! exports provided: Companies */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Companies", function () {
            return Companies;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class Companies {
            constructor(id, name, email, password) {
                this.id = id;
                this.name = name;
                this.email = email;
                this.password = password;
            }
        }


        /***/
    }),

    /***/
    "./src/app/models/coupons.ts":
    /*!***********************************!*\
      !*** ./src/app/models/coupons.ts ***!
      \***********************************/
    /*! exports provided: Coupons */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Coupons", function () {
            return Coupons;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class Coupons {
            // tslint:disable-next-line:max-line-length
            constructor(id, companyID, title, description, image, category, startDate, endDate, price, amount) {
                this.id = id;
                this.companyID = companyID;
                this.title = title;
                this.description = description;
                this.image = image;
                this.category = category;
                this.startDate = startDate;
                this.endDate = endDate;
                this.price = price;
                this.amount = amount;
            }
        }


        /***/
    }),

    /***/
    "./src/app/models/customers.ts":
    /*!*************************************!*\
      !*** ./src/app/models/customers.ts ***!
      \*************************************/
    /*! exports provided: Customers */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "Customers", function () {
            return Customers;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

        class Customers {
            constructor(id, firstName, lastName, email, password) {
                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.password = password;
            }
        }


        /***/
    }),

    /***/
    "./src/app/services/admin.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/admin.service.ts ***!
      \*******************************************/
    /*! exports provided: AdminService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AdminService", function () {
            return AdminService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let AdminService =
// to open a new service ng g s services/
            class AdminService {
                constructor(client) {
                    this.client = client;
                }

                addCompany(company) {
                    return this.client.post('http://localhost:8080/admin/addNewCompany/' + sessionStorage.token, company);
                }

                updateCompany(company) {
                    return this.client.put('http://localhost:8080/admin/updateCompany/' + sessionStorage.token, company);
                }

                deleteCompany(id) {
                    return this.client.delete('http://localhost:8080/admin/deleteCompany/' + id + '/' + sessionStorage.token);
                }

                getCompanyId(id) {
                    return this.client.get('http://localhost:8080/admin/findCompanyById/' + id + '/' + sessionStorage.token);
                }

                getAllCompanies() {
                    return this.client.get('http://localhost:8080/admin/findAllCompanies/' + sessionStorage.token);
                }

                getOneCompanyById(id) {
                    return this.client.get('http://localhost:8080/admin/findCompanyById/' + id + '/' + sessionStorage.token);
                }

                getOneCompanyByName(name) {
                    return this.client.get('http://localhost:8080/admin/findCompanyByName/' + name + '/' + sessionStorage.token);
                }

                getOneCompanyByEmail(email) {
                    return this.client.get('http://localhost:8080/admin/findCompanyByEmail/' + email + '/' + sessionStorage.token);
                }

                addCustomer(customer) {
                    return this.client.post('http://localhost:8080/admin/addNewCustomer/' + sessionStorage.token, customer);
                }

                updateCustomer(customer) {
                    return this.client.put('http://localhost:8080/admin/updateCustomer/' + sessionStorage.token, customer);
                }

                deleteCustomer(id) {
                    return this.client.delete('http://localhost:8080/admin/deleteCustomer/' + id + '/' + sessionStorage.token);
                }

                getOneCustomerById(id) {
                    return this.client.get('http://localhost:8080/admin/findCustomerById/' + id + '/' + sessionStorage.token);
                }

                getOneCustomerByEmail(email) {
                    return this.client.get('http://localhost:8080/admin/findCustomerByEmail/' + email + '/' + sessionStorage.token);
                }

                getAllCustomers() {
                    return this.client.get('http://localhost:8080/admin/findAllCustomers/' + sessionStorage.token);
                }

                getAllCoupons() {
                    return this.client.get('http://localhost:8080/admin/findAllCoupons/' + sessionStorage.token);
                }
            };
        AdminService.ctorParameters = () => [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root'
            })
            // to open a new service ng g s services/
        ], AdminService);


        /***/
    }),

    /***/
    "./src/app/services/company.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/company.service.ts ***!
      \*********************************************/
    /*! exports provided: CompanyService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
            return CompanyService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let CompanyService = class CompanyService {
            constructor(client) {
                this.client = client;
            }

            addCoupon(coupon) {
                return this.client.post('http://localhost:8080/company/addNewCoupon/' + sessionStorage.token, coupon);
            }

            updateCoupon(coupon) {
                return this.client.put('http://localhost:8080/company/updateCoupon/' + sessionStorage.token, coupon);
            }

            deleteCoupon(id) {
                return this.client.delete('http://localhost:8080/company/deleteCoupon/' + id + '/' + sessionStorage.token);
            }

            getCompanyDetails() {
                return this.client.get('http://localhost:8080/company/getCompanyDetails/' + sessionStorage.token);
            }
        };
        CompanyService.ctorParameters = () => [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root'
            })
        ], CompanyService);


        /***/
    }),

    /***/
    "./src/app/services/customer.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/customer.service.ts ***!
      \**********************************************/
    /*! exports provided: CustomerService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
            return CustomerService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let CustomerService = class CustomerService {
            constructor(client) {
                this.client = client;
            }

            purchaseCoupon(coupon) {
                return this.client.post('http://localhost:8080/customer/purchaseCoupon/' + sessionStorage.token, coupon);
            }

            getCustomerCoupons() {
                return this.client.get('http://localhost:8080/customer/getCustomerCoupons/' + sessionStorage.token);
            }

            getAllCoupons() {
                return this.client.get('http://localhost:8080/customer/getAllCoupons/' + sessionStorage.token);
            }

            deleteCouponPurchase(coupon) {
                return this.client.delete('http://localhost:8080/customer/deleteCouponPurchase/' + sessionStorage.token + coupon);
            }
        };
        CustomerService.ctorParameters = () => [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root'
            })
        ], CustomerService);


        /***/
    }),

    /***/
    "./src/app/services/login.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/
    /*! exports provided: LoginService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "LoginService", function () {
            return LoginService;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


        let LoginService = class LoginService {
            constructor(client) {
                this.client = client;
            }

            // could be an example for other methods, here we use post method like in swagger
            login(email, password, type) {
                return this.client.post('http://localhost:8080/login/' + email + '/' + password + '/' + type, null, {responseType: 'text'});
            }

            logout() {
                alert('here');
                this.client.post('http://localhost:8080/logout/' + sessionStorage.getItem('token'), null);
            }
        };
        LoginService.ctorParameters = () => [
            {type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}
        ];
        LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                providedIn: 'root'
            })
        ], LoginService);


        /***/
    }),

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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


        /***/
    }),

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
        /* harmony import */
        var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
        }
        Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
            .catch(err => console.error(err));


        /***/
    }),

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! C:\Users\Daniel\AppData\Local\Temp\CouponSystemWeb\src\main.ts */"./src/main.ts");


        /***/
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
