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
 * Defines web application firewall policy.
 *
 * @extends models['Resource']
 */
class WebApplicationFirewallPolicy1 extends models['Resource'] {
  /**
   * Create a WebApplicationFirewallPolicy1.
   * @property {object} [policySettings] Describes  policySettings for policy
   * @property {string} [policySettings.enabledState] describes if the policy
   * is in enabled state or disabled state. Possible values include:
   * 'Disabled', 'Enabled'
   * @property {string} [policySettings.mode] Describes if it is in detection
   * mode  or prevention mode at policy level. Possible values include:
   * 'Prevention', 'Detection'
   * @property {object} [customRules] Describes custom rules inside the policy
   * @property {array} [customRules.rules] List of rules
   * @property {array} [applicationGateways] A collection of references to
   * application gateways.
   * @property {string} [provisioningState] Provisioning state of the
   * WebApplicationFirewallPolicy.
   * @property {string} [resourceState] Resource status of the policy. Possible
   * values include: 'Creating', 'Enabling', 'Enabled', 'Disabling',
   * 'Disabled', 'Deleting'
   * @property {string} [etag] Gets a unique read-only string that changes
   * whenever the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WebApplicationFirewallPolicy1
   *
   * @returns {object} metadata of WebApplicationFirewallPolicy1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WebApplicationFirewallPolicy',
      type: {
        name: 'Composite',
        className: 'WebApplicationFirewallPolicy1',
        modelProperties: {
          id: {
            required: false,
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
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          policySettings: {
            required: false,
            serializedName: 'properties.policySettings',
            type: {
              name: 'Composite',
              className: 'PolicySettings'
            }
          },
          customRules: {
            required: false,
            serializedName: 'properties.customRules',
            type: {
              name: 'Composite',
              className: 'CustomRules'
            }
          },
          applicationGateways: {
            required: false,
            readOnly: true,
            serializedName: 'properties.applicationGateways',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationGatewayElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationGateway'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          resourceState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WebApplicationFirewallPolicy1;