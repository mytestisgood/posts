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
import { AccountType } from './accountType';
import { ProcessType } from './processType';
import { StatusFeedback } from './statusFeedback';
import { StatusProcess } from './statusProcess';
import { TransmissionProductAuto } from './transmissionProductAuto';


export interface InlineResponse2007Items { 
    account_type?: AccountType;
    allowed_change_groups?: string;
    allowed_fix_errors?: string;
    allowed_show_exceptions?: string;
    created_at?: string;
    id?: number;
    name?: string;
    status?: string;
    type?: ProcessType;
    total?: number;
    date?: number;
    error_details?: string;
    transmit_date?: string;
    payment_instructions?: boolean;
    is_references?: boolean;
    status_feedback?: StatusFeedback;
    is_exceptions?: boolean;
    is_relevant?: boolean;
    department_name?: string;
    dep_id?: number;
    organization_name?: string;
    organization_id?: number;
    employer_name?: string;
    employer_id?: number;
    operator_name?: string;
    payment_instructions_auto?: TransmissionProductAuto;
    transmission_product_auto?: TransmissionProductAuto;
    status_process?: StatusProcess;
    is_comment?: boolean;
    count_inquiries?: number;
    is_feedback_send?: boolean;
    type_upload?: number;
}
export namespace InlineResponse2007Items {
}


