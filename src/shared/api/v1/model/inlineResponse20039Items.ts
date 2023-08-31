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
import { SalaryLevel } from './salaryLevel';
import { ProcessType } from './processType';
import { ReasonRefund } from './reasonRefund';
import { EmployeeStatus } from './employeeStatus';
import { InlineResponse20039TransferClause } from './inlineResponse20039TransferClause';
import { FileType } from './fileType';
import { StatusEmployeeFeedBack } from './statusEmployeeFeedBack';
import { DepositType } from './depositType';
import { ProductType } from './productType';
import { DepositStatus } from './depositStatus';


export interface InlineResponse20039Items { 
    id?: number;
    salary_month?: string;
    updated_at?: string;
    deposit_type?: DepositType;
    salary_level?: SalaryLevel;
    reason_refund?: ReasonRefund;
    is_employee_declaration?: boolean;
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
    employee_id?: number;
    department_id?: number;
    first_name?: string;
    last_name?: string;
    personal_id?: string;
    employer_product_code?: string;
    employer_company_id?: number;
    employer_product_name?: string;
    section14?: boolean;
    employer_product_type?: ProductType;
    product_code?: number;
    product_id?: number;
    company_id?: number;
    company_name?: string;
    sum_ipi_employer?: number;
    status?: StatusEmployeeFeedBack;
    file_type?: FileType;
    defrayal_error?: Array<string>;
    transfer_clause?: Array<InlineResponse20039TransferClause>;
    process_type?: ProcessType;
    is_change?: boolean;
}
export namespace InlineResponse20039Items {
}


