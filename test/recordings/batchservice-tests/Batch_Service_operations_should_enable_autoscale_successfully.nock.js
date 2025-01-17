// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/enableautoscale?api-version=2019-06-01.9.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 06 Jun 2019 23:42:50 GMT',
  etag: '0x8D6EAD8AFFFC1D2',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c639772e-a75a-4734-a6dd-e7cca80583d8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test1.westus.batch.azure.com/pools/nodesdktestpool1/enableautoscale',
  date: 'Thu, 06 Jun 2019 23:42:50 GMT',
  connection: 'close' });
 return result; }]];