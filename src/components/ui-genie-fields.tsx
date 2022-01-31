import React from 'react';
import { UIGenieView } from './ui-genie-view';
import { UIGenieProps } from '../types';

import {buildJsonPointer, nextSchema} from '../utils';

export interface UIGenieFieldsProps extends UIGenieProps {
    render?(
        item: React.ReactNode,
        props: UIGenieProps,
        key: string
    ): React.ReactNode;
}

export function fieldsProps(
	uiGenieViewProps: UIGenieProps
): Array<UIGenieProps & {field: string}> {
	const {
		schema: {properties = {}},
	} = uiGenieViewProps;

	const fields: string[] = Object.keys(properties);

	return fields.map(field => ({
		field,
		...getFieldProps(field, uiGenieViewProps)
	}));
}

export function getFieldProps(
	fieldName: string,
	{
		data = {},
		schema,
		pointer,
		...rest
	}: UIGenieProps
): UIGenieProps {
	return {
		...rest,
		schema: nextSchema(schema, fieldName),
		data: data[fieldName],
		pointer: buildJsonPointer(pointer, fieldName),
	};
}

export const UIGenieFields: React.FunctionComponent<UIGenieFieldsProps> = ({
	render = (a: React.ReactNode) => a,
	...props
}) => (
	<React.Fragment>
		{fieldsProps(props).map(fieldProps => {
			return render(
				<UIGenieView
					{...fieldProps}
					key={fieldProps.pointer}
				/>,
				fieldProps,
				fieldProps.field
			);
		})}
	</React.Fragment>
);
