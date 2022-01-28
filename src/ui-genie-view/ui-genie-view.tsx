import * as React from 'react';
import { ComponentsMap } from '../components-map';
import { JSONSchema } from '../types';

export interface UIGenieViewProps {
    schema?: JSONSchema
    data?: unknown
    componentsMap?: ComponentsMap
}

export const UIGenieView: React.FC<UIGenieViewProps> = ({
	schema,
	data,
	componentsMap

}) => {
	console.log(schema, data, componentsMap);

	return <div>
        Hello UIGenie
	</div>;
};
