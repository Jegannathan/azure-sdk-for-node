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
 * Class representing a NewsTopic.
 * @extends models['Thing']
 */
class NewsTopic extends models['Thing'] {
  /**
   * Create a NewsTopic.
   * @member {boolean} [isBreakingNews] A Boolean value that indicates whether
   * the topic is considered breaking news. If the topic is considered breaking
   * news, the value is true.
   * @member {object} [query] A search query term that returns this trending
   * topic.
   * @member {string} [query.text] The query string. Use this string as the
   * query term in a new search request.
   * @member {string} [query.displayText] The display version of the query
   * term. This version of the query term may contain special characters that
   * highlight the search term found in the query string. The string contains
   * the highlighting characters only if the query enabled hit highlighting
   * @member {string} [query.webSearchUrl] The URL that takes the user to the
   * Bing search results page for the query.Only related search results include
   * this field.
   * @member {string} [query.searchLink] The URL that you use to get the
   * results of the related search. Before using the URL, you must append query
   * parameters as appropriate and include the Ocp-Apim-Subscription-Key
   * header. Use this URL if you're displaying the results in your own user
   * interface. Otherwise, use the webSearchUrl URL.
   * @member {object} [query.thumbnail] The URL to a thumbnail of a related
   * image.
   * @member {object} [query.thumbnail.thumbnail] The URL to a thumbnail of the
   * image
   * @member {string} [newsSearchUrl] The URL to the Bing News search results
   * for the search query term
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NewsTopic
   *
   * @returns {object} metadata of NewsTopic
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'News/Topic',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'NewsTopic',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
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
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          alternateName: {
            required: false,
            readOnly: true,
            serializedName: 'alternateName',
            type: {
              name: 'String'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          isBreakingNews: {
            required: false,
            readOnly: true,
            serializedName: 'isBreakingNews',
            type: {
              name: 'Boolean'
            }
          },
          query: {
            required: false,
            readOnly: true,
            serializedName: 'query',
            type: {
              name: 'Composite',
              className: 'Query'
            }
          },
          newsSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'newsSearchUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NewsTopic;