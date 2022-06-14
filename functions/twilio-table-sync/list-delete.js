
exports.handler = function(context, event, callback) {
  
    const client = context.getTwilioClient();
  
    console.log('event => ', event);
    console.log('event.listSid => ', event.listSid);
  
    try {
  
      client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
        .syncLists(event.listSid)
        .remove()     
        .then(callback(null,"deleted"));
    
    } catch (e) {
      
      console.log("Error deleting list ", e);
  
    }
  };