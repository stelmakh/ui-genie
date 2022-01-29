import Ajv from 'ajv';
import { JSONSchema } from '../types';

export class Validator {
	private static ajv: Ajv;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	public static validate(schema: JSONSchema, data: any): boolean {
		if (!Validator.ajv) {
			Validator.ajv = new Ajv();
		}

		const validate = Validator.ajv.compile(schema);

		const valid = validate(data);
		if (!valid) console.log('errors', validate.errors);

		return valid;
	}
}
