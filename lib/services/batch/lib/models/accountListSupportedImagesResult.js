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
 * @summary The result of listing the supported Virtual Machine Images.
 */
class AccountListSupportedImagesResult extends Array {
  /**
   * Create a AccountListSupportedImagesResult.
   * @property {string} [odatanextLink]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AccountListSupportedImagesResult
   *
   * @returns {object} metadata of AccountListSupportedImagesResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccountListSupportedImagesResult',
      type: {
        name: 'Composite',
        className: 'AccountListSupportedImagesResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageInformationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageInformation'
                  }
              }
            }
          },
          odatanextLink: {
            required: false,
            serializedName: 'odata\\.nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccountListSupportedImagesResult;