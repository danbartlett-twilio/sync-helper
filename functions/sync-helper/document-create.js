/*

  document-create.js

  Create a new sync document

*/

// ADD Helper file to consistently format response header
const rsp = require(Runtime.getFunctions()['sync-helper/system/format-response-headers'].path);

exports.handler = async function(context, event, callback) {

  const client = context.getTwilioClient();

  // Pull the response object from helper library
  const response =  await rsp.formatResponseHeader()  

  client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
    .documents
    .create({uniqueName: event.documentName})
    .then(document => 
      client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
        .documents(document.sid)
        .update( { data: event.payload })
        .then( document => {
          response.appendHeader('Content-Type', 'application/json');
          response.setBody(document);                  
          callback(null, response);
        })          
    )
    .catch(err => {
      console.log(err.status);      
      response.appendHeader('Content-Type', 'plain/text');
      response.setBody(err);
      response.setStatusCode(500);
      return callback(null, response);
    });

}
