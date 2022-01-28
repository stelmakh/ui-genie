import { UIGenieProps } from '../types';

export function nextSchema(
	schema: UIGenieProps['schema'],
	dataPointer?: string
): UIGenieProps['schema'] {
	if (dataPointer !== undefined && schema.type === 'object') {
		const {properties = {}} = schema;
		return properties[dataPointer];
	}

	if (schema.type === 'array') {
		return schema.items || [];
	}

	throw Error('expecting array or object schema');
}
