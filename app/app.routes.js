"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var itemDetail_component_1 = require('./itemDetail/itemDetail.component');
var routes = [
    {
        path: 'items',
        component: app_component_1.AppComponent
    },
    {
        path: 'detail/:id',
        component: itemDetail_component_1.ItemDetail
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map