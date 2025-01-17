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
 * @summary Settings which will be used by the data disks associated to Compute
 * Nodes in the Pool.
  *
 */
class DataDisk {
  /**
   * Create a DataDisk.
   * @property {number} lun The logical unit number. The lun is used to
   * uniquely identify each data disk. If attaching multiple disks, each should
   * have a distinct lun.
   * @property {string} [caching] The type of caching to be enabled for the
   * data disks. The default value for caching is readwrite. For information
   * about the caching options see:
   * https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
   * Possible values include: 'none', 'readOnly', 'readWrite'
   * @property {number} diskSizeGB The initial disk size in gigabytes.
   * @property {string} [storageAccountType] The storage Account type to be
   * used for the data disk. If omitted, the default is "standard_lrs".
   * Possible values include: 'StandardLRS', 'PremiumLRS'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataDisk
   *
   * @returns {object} metadata of DataDisk
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataDisk',
      type: {
        name: 'Composite',
        className: 'DataDisk',
        modelProperties: {
          lun: {
            required: true,
            serializedName: 'lun',
            type: {
              name: 'Number'
            }
          },
          caching: {
            required: false,
            serializedName: 'caching',
            type: {
              name: 'Enum',
              allowedValues: [ 'none', 'readOnly', 'readWrite' ]
            }
          },
          diskSizeGB: {
            required: true,
            serializedName: 'diskSizeGB',
            type: {
              name: 'Number'
            }
          },
          storageAccountType: {
            required: false,
            serializedName: 'storageAccountType',
            type: {
              name: 'Enum',
              allowedValues: [ 'StandardLRS', 'PremiumLRS' ]
            }
          }
        }
      }
    };
  }
}

module.exports = DataDisk;
