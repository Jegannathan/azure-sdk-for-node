/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Define match variables
 *
 */
class MatchVariable1 {
  /**
   * Create a MatchVariable1.
   * @property {string} name Match Variable. Possible values include:
   * 'RemoteAddr', 'RequestMethod', 'QueryString', 'PostArgs', 'RequestUri',
   * 'RequestHeaders', 'RequestBody', 'RequestCookies'
   * @property {string} [selector] Describes field of the matchVariable
   * collection
   */
  constructor() {
  }

  /**
   * Defines the metadata of MatchVariable1
   *
   * @returns {object} metadata of MatchVariable1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MatchVariable',
      type: {
        name: 'Composite',
        className: 'MatchVariable1',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          selector: {
            required: false,
            serializedName: 'selector',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MatchVariable1;