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

const models = require('./index');

/**
 * Definition of a Resource
 *
 * @extends models['BaseResource']
 */
class Resource extends models['BaseResource'] {
  /**
   * Create a Resource.
   * @member {string} [id] Fully qualified identifier of the resource
   * @member {string} [name] Name of the resource
   * @member {string} [type] Type of the resource
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Resource
   *
   * @returns {object} metadata of Resource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Resource',
      type: {
        name: 'Composite',
        className: 'Resource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Resource;