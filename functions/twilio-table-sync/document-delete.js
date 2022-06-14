
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {

    const client = context.getTwilioClient();
  
    client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
      .documents(event.documentSid)
      .remove()
      .then( callback(null, event.documentSid) )          
      .catch(err => {
        console.log(err.status);      
      });
  
  }
  