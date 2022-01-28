import { ComponentsMap } from '../components-map';
import { JSONSchema } from './JSONSchema';

export interface UIGenieProps {
    schema: JSONSchema
    data?: any
    componentsMap: ComponentsMap
    pointer?: string
}
