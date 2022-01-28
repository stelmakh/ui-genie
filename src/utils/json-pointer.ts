import jsonPointer from 'json-pointer';

export function buildJsonPointer(
	pointer = '',
	...keys: string[]
): string {
	return pointer + jsonPointer.compile(keys);
}
