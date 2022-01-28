import * as React from 'react';
import { JSONSchemaType } from '../types';

export class ComponentsMap {
	name: string;
	map: Map<string, ComponentsMapItem>;

	constructor(name: string) {
		this.name = name;
		this.map = new Map();
	}

	addItem = (item: ComponentsMapItem): ComponentsMap => {
		if (this.map.has(item.name)) {
			throw Error(`item with name ${item.name} exists`);
		}

		this.map.set(item.name, item);
		return this;
	};

	removeItem = (name: string): ComponentsMap => {
		if (this.map.has(name)) {
			throw Error(`item with name ${name} does not exist`);
		}

		this.map.delete(name);
		return this;
	};
}

export type ComponentsMapItem = {
    name: string;
    type: JSONSchemaType;
    component: () => React.ReactNode;
    //TODO: condition
}
