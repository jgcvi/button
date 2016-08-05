import { provideRouter, RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemDetail } from'./itemDetail/itemDetail.component';

const routes: RouterConfig = [
	{
		path: 'items',
		component: AppComponent
	},
	{
		path: 'detail/:id',
		component: ItemDetail
	}
];

export const appRouterProviders = [
	provideRouter(routes)
];
