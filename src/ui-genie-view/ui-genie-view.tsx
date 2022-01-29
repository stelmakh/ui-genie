import React from 'react';
import { ErrorBoundary } from '../error-boundary';
import { UIGenieProps } from '../types';

export type UIGenieViewProps = UIGenieProps

class UIGenieViewLogic extends React.Component<UIGenieViewProps>{
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
			throw new Error(`No component found for type ${schema.type}`);
		}

		return <Component {...this.props}/>;
	}
}

export const UIGenieView: React.FC<UIGenieViewProps> = props => (
	<ErrorBoundary>
		<UIGenieViewLogic {...props}/>
	</ErrorBoundary>
);
