import { Component, Input } from '@angular/core';
import { Item } from '../models/item'

@Component({
	selector: 'item-card',
	moduleId: module.id,
	templateUrl: 'itemCard.component.html',
})

export class ItemCard {
	@Input() item: Item;
}
