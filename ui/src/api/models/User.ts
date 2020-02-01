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
import {
    InternshipInfo,
    InternshipInfoFromJSON,
    InternshipInfoFromJSONTyped,
    InternshipInfoToJSON,
    ObjectId,
    ObjectIdFromJSON,
    ObjectIdFromJSONTyped,
    ObjectIdToJSON,
    UserPreferences,
    UserPreferencesFromJSON,
    UserPreferencesFromJSONTyped,
    UserPreferencesToJSON,
    UserSettings,
    UserSettingsFromJSON,
    UserSettingsFromJSONTyped,
    UserSettingsToJSON,
} from './';

/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     *
     * @type {ObjectId}
     * @memberof User
     */
    id: ObjectId;
    /**
     *
     * @type {Array<InternshipInfo>}
     * @memberof User
     */
    internships: Array<InternshipInfo>;
    /**
     *
     * @type {UserSettings}
     * @memberof User
     */
    settings: UserSettings;
    /**
     *
     * @type {UserPreferences}
     * @memberof User
     */
    preferences: UserPreferences;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'username': json['username'],
        'password': json['password'],
        'id': ObjectIdFromJSON(json['id']),
        'internships': ((json['internships'] as Array<any>).map(InternshipInfoFromJSON)),
        'settings': UserSettingsFromJSON(json['settings']),
        'preferences': UserPreferencesFromJSON(json['preferences']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'username': value.username,
        'password': value.password,
        'id': ObjectIdToJSON(value.id),
        'internships': ((value.internships as Array<any>).map(InternshipInfoToJSON)),
        'settings': UserSettingsToJSON(value.settings),
        'preferences': UserPreferencesToJSON(value.preferences),
    };
}
