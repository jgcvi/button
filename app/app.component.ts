import { Component, OnInit } from '@angular/core';
import { ItemCard } from './item-card/itemCard.component';
import { Item } from './models/item';

const ITEMS: Item[] = [
	{id: 1, img: 'src1', name: 'sewing item 1', price: 11.99 },
	{id: 2, img: 'src1', name: 'sewing item 2', price: 10.00 },
	{id: 3, img: 'src1', name: 'sewing item 3', price: 15.00 },
	{id: 4, img: 'src1', name: 'sewing item 4', price: 21.50 },
	{id: 5, img: 'src1', name: 'sewing item 5', price: 28.30 },
	{id: 6, img: 'src1', name: 'sewing item 6', price: 100 },
	{id: 7, img: 'src1', name: 'sewing item 7', price: 1.99},
	{id: 8, img: 'src1', name: 'sewing item 8', price: 19.99},
	{id: 9, img: 'src1', name: 'sewing item 9', price: 19.99},
	{id: 0, img: 'src1', name: 'sewing item 0', price: 19.99},
];

@Component({
	selector: 'my-app',
	moduleId: module.id,
	templateUrl: 'app.component.html',
	directives: [ItemCard],
})

export class AppComponent {
	public items = ITEMS;
	title = 'Sewing Store'
}

