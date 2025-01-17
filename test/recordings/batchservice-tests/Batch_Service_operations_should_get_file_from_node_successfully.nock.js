// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes/tvm-1650185656_3-20190607t060354z/files/startup%2Fwd%2Fhello.txt?api-version=2019-06-01.9.0')
  .reply(200, "hello \r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'text/plain',
  'last-modified': 'Fri, 07 Jun 2019 07:53:55 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e51b0e42-3c2d-4402-8b55-9afd5fba6ffd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Fri, 07 Jun 2019 07:53:55 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url':
   'https%3A%2F%2Ftest1.westus.batch.azure.com%2Fpools%2Fnodesdktestpool1%2Fnodes%2Ftvm-1650185656_3-20190607t060354z%2Ffiles%2Fstartup%2Fwd%2Fhello.txt',
  date: 'Fri, 07 Jun 2019 08:05:07 GMT',
  connection: 'close' });
 return result; }]];