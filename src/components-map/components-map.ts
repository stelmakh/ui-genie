import * as React from 'react';
import { JSONSchema, UIGenieProps } from '../types';

type ItemsByName = Map<string, ComponentsMapItem>
type ItemsByType = { [key: string]: ComponentsMapItem[] }

export class ComponentsMap {
	private name: string;
	private mapByName: ItemsByName;
	private mapByType: ItemsByType;

	constructor(name: string) {
		this.name = name;
		this.mapByName = new Map();
		this.mapByType = {};
	}

	public addItem(item: ComponentsMapItem): ComponentsMap{
		if (this.mapByName.has(item.name)) {
			throw Error(`item with name ${item.name} exists`);
		}

		this.mapByName.set(item.name, item);
		const typeItems = this.mapByType[item.type] || [];
		typeItems.push(item);
		this.mapByType[item.type] = typeItems;

		return this;
	}

	public removeItem(name: string): ComponentsMap {
		if (this.mapByName.has(name)) {
			throw Error(`item with name ${name} does not exist`);
		}

		this.mapByName.delete(name);

		Object.keys(this.mapByType).every(type => {
			const items = this.mapByType[type];
			const index = items.findIndex(item => item.name === name);

			if (index === -1) { return true; }

			items.splice(index, 1);
			return false;
		});

		return this;
	}

	public getName() {
		return this.name;
	}

	public getItem(name: string) {
		return this.mapByName.get(name);
	}

	public getItemsForNode(node: JSONSchema): ComponentsMapItem[] {
		const type = node.type;
		if (!type) return [];

		const items = this.mapByType[type as string] || [];

		return items;
	}
}

export type ComponentsMapItem = {
    name: string;
    type: string;
    component: React.ComponentType<UIGenieProps>;
    //TODO: condition
}
