export type NonNegativeInteger = number;
export type NonNegativeIntegerDefault0 = NonNegativeInteger;
export type SchemaArray = JSONSchema[];
export type StringArray = string[];
export type SimpleTypes =
    | 'array'
    | 'boolean'
    | 'integer'
    | 'null'
    | 'number'
    | 'object'
    | 'string';

export interface JSONSchema {
    $id?: string;
    $schema?: string;
    $ref?: string;
    title?: string;
    description?: string;
    default?: any;
    examples?: any[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: NonNegativeInteger;
    minLength?: NonNegativeIntegerDefault0;
    pattern?: string;
    additionalItems?: JSONSchema;
    items?: JSONSchema | SchemaArray;
    maxItems?: NonNegativeInteger;
    minItems?: NonNegativeIntegerDefault0;
    uniqueItems?: boolean;
    contains?: JSONSchema;
    maxProperties?: NonNegativeInteger;
    minProperties?: NonNegativeIntegerDefault0;
    required?: StringArray;
    additionalProperties?: JSONSchema | boolean;
    definitions?: {
        [k: string]: JSONSchema;
    };
    properties?: {
        [k: string]: JSONSchema;
    };
    patternProperties?: {
        [k: string]: JSONSchema;
    };
    dependencies?: {
        [k: string]: JSONSchema | StringArray;
    };
    propertyNames?: JSONSchema;
    const?: any;
    enum?: any[];
    type?: SimpleTypes | SimpleTypes[];
    format?: string;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: JSONSchema;
    if?: JSONSchema;
    then?: JSONSchema;
    else?: JSONSchema;
    [k: string]: any;
}
