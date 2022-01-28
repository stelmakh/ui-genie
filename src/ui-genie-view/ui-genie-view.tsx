import * as React from 'react';
import { UIGenieProps } from '../types';

export type UIGenieViewProps = UIGenieProps

export class UIGenieView extends React.Component<UIGenieViewProps>{
	render() {
		const {
			schema,
			data,
			componentsMap
		} = this.props;

		const matchedComponents = componentsMap?.getItemsForNode(schema);
		console.log(schema, data, componentsMap);
		const Component = matchedComponents[0]?.component;

		if (!Component) {
			return <div>
                NO COMPONENT FOUND
			</div>;
		}

		return <Component {...this.props}/>;

	}
}
