/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InternshipInfo
 */
export interface InternshipInfo {
    /**
     * 
     * @type {string}
     * @memberof InternshipInfo
     */
    locationCity?: string;
    /**
     * 
     * @type {string}
     * @memberof InternshipInfo
     */
    locationState?: string;
    /**
     * 
     * @type {Date}
     * @memberof InternshipInfo
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof InternshipInfo
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof InternshipInfo
     */
    company?: string;
}

export function InternshipInfoFromJSON(json: any): InternshipInfo {
    return InternshipInfoFromJSONTyped(json, false);
}

export function InternshipInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternshipInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationCity': !exists(json, 'locationCity') ? undefined : json['locationCity'],
        'locationState': !exists(json, 'locationState') ? undefined : json['locationState'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'company': !exists(json, 'company') ? undefined : json['company'],
    };
}

export function InternshipInfoToJSON(value?: InternshipInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationCity': value.locationCity,
        'locationState': value.locationState,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'company': value.company,
    };
}

