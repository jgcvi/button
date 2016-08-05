"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var itemCard_component_1 = require('./item-card/itemCard.component');
var ITEMS = [
    { id: 1, img: 'src1', name: 'sewing item 1', price: 11.99 },
    { id: 2, img: 'src1', name: 'sewing item 2', price: 10.00 },
    { id: 3, img: 'src1', name: 'sewing item 3', price: 15.00 },
    { id: 4, img: 'src1', name: 'sewing item 4', price: 21.50 },
    { id: 5, img: 'src1', name: 'sewing item 5', price: 28.30 },
    { id: 6, img: 'src1', name: 'sewing item 6', price: 100 },
    { id: 7, img: 'src1', name: 'sewing item 7', price: 1.99 },
    { id: 8, img: 'src1', name: 'sewing item 8', price: 19.99 },
    { id: 9, img: 'src1', name: 'sewing item 9', price: 19.99 },
    { id: 0, img: 'src1', name: 'sewing item 0', price: 19.99 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.items = ITEMS;
        this.title = 'Sewing Store';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'app.component.html',
            directives: [itemCard_component_1.ItemCard],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map