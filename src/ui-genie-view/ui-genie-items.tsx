import React from 'react';
import { UIGenieView } from '.';
import { UIGenieProps } from '../types';

import {buildJsonPointer, nextSchema} from '../utils';

export type UIGenieItemsProps = {
    render?(
        item: React.ReactNode,
        props: UIGenieProps,
        index: number
    ): React.ReactNode;
} & UIGenieProps;

export const UIGenieItems = ({render = a => a, ...props}: UIGenieItemsProps) => (
	<React.Fragment>
		{itemsProps(props).map((itemProps, index) =>
			render(
				<UIGenieView
					{...itemProps}
					key={index}
				/>,
				itemProps,
				index
			)
		)}
	</React.Fragment>
);

export function itemsProps({
	data = [],
	schema,
	pointer = '',
	...rest
}: UIGenieProps): UIGenieProps[] {
	return (data as any[]).map((item, i) => ({
		...rest,
		schema: nextSchema(schema),
		data: item,
		pointer: buildJsonPointer(pointer, String(i)),
	}));
}
