import React from 'react';
import { ErrorBoundary } from '../error-boundary';
import { UIGenieProps } from '../types';
import { Validator } from '../validator';

export type UIGenieViewProps = UIGenieProps

class UIGenieViewLogic extends React.Component<UIGenieViewProps>{
	public componentDidMount() {
		this.validate();
	}

	public componentDidUpdate() {
		this.validate();
	}

	private validate() {
		const {schema, data} = this.props;
		const isValid = Validator.validate(schema, data);

		if (!isValid) throw new Error('Data not valid');
	}

	render() {
		const {
			schema,
			componentsMap
		} = this.props;

		const matchedComponents = componentsMap?.getItemsForNode(schema);
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
