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
import { Apigenerals1inquiriesReceivers } from './apigenerals1inquiriesReceivers';


export interface InlineResponse20024 { 
    id?: string;
    created_at?: string;
    updated_at?: string;
    reminder_date?: string;
    content?: string;
    has_documents?: boolean;
    receivers?: Array<Apigenerals1inquiriesReceivers>;
}

