/**
 * Smarti
 * Smarti1
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: dinav@smarti-saas.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InlineResponse20040Items } from './inlineResponse20040Items';
import { InlineResponse20040Other } from './inlineResponse20040Other';


export interface InlineResponse20040 { 
    items?: Array<InlineResponse20040Items>;
    total?: number;
    lastPage?: number;
    other?: InlineResponse20040Other;
    code?: number;
}

