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
import { Comment } from './comment';
import { DepositStatus } from './depositStatus';
import { DepositType } from './depositType';
import { EmployeeStatus } from './employeeStatus';
import { FileType } from './fileType';
import { ManualStatus } from './manualStatus';
import { ProcessType } from './processType';
import { ProductType } from './productType';
import { ReasonRefund } from './reasonRefund';
import { SalaryLevel } from './salaryLevel';
import { StatusEmployeeFeedBack } from './statusEmployeeFeedBack';
import { StatusFeedback } from './statusFeedback';
import { StatusProcess } from './statusProcess';


export interface InlineResponse20040Items { 
    id?: number;
    salary_month?: string;
    updated_at?: string;
    deposit_type?: DepositType;
    salary_level?: SalaryLevel;
    reason_refund?: ReasonRefund;
    path_employee_declaration?: string;
    deposit_status?: DepositStatus;
    salary?: number;
    employee_status?: EmployeeStatus;
    employee_status_start_date?: string;
    work_month_percentage?: number;
    is_relevant?: boolean;
    policy_or_account_number?: string;
    working_days_in_month?: number;
    amount?: number;
    name?: string;
    personal_id?: string;
    product_code?: string;
    product_type?: ProductType;
    company_name?: string;
    company_id?: string;
    process_date?: string;
    deposit_month?: string;
    deposit_date?: string;
    employer_id?: string;
    employer_name?: string;
    department_id?: string;
    inquiries?: Array<string>;
    comments?: Array<Comment>;
    comment?: string;
    reason?: string;
    status?: StatusEmployeeFeedBack;
    manual_status?: ManualStatus;
    sent_file_name?: string;
    group_thing_id?: number;
    file_type?: FileType;
    sent_group_id?: number;
    status_sent_group?: StatusFeedback;
    employee_id?: number;
    file_status?: StatusProcess;
    product_name?: string;
    type?: ProcessType;
}
export namespace InlineResponse20040Items {
}


