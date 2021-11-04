/**
 * Validate BPAY Payment API
 * When a payment is submitted to a Financial Institution, the Financial Institution is required to validate the payment details when accepting it. This API validates the payment details for the Settlement Date specified in a request. This API provides functionality to perform BPAY payment validation before payment is submitted.   * This validation result is correct as at the time of calling the API Service.   * The Validate BPAY Payment API does not result in a payment being submitted to BPAY for processing. The Payment Instruction must be submitted to your financial institution (or BPAY if you are a Scheme Member) before cut-off on the same Business Banking Day as the Settlement date specified in a request.   * A maximum of 200 payment records may be included in a request. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: operations@bpay.com.au
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidationSummary } from './ValidationSummary';
import { HttpFile } from '../http/http';

/**
* Represents the outcome of validating the details of an individual BPAY payment
*/
export class ValidatonResultItem {
    /**
    * Unique identifier for the BPAY payment being validated. This corresponds to the \"tid\" supplied in the corresponding PaymentValidationRequest.
    */
    'tid'?: string;
    /**
    * The collection of batch payments to be included in the batch file. Note that a maximum of 200 payments can be processed in a single request.
    */
    'validationSummary'?: Array<ValidationSummary>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tid",
            "baseName": "tid",
            "type": "string",
            "format": ""
        },
        {
            "name": "validationSummary",
            "baseName": "validationSummary",
            "type": "Array<ValidationSummary>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValidatonResultItem.attributeTypeMap;
    }
    
    public constructor() {
    }
}

