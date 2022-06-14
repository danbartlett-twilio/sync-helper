
exports.handler = function(context, event, callback) {
  
    const client = context.getTwilioClient();
  
    console.log('event => ', event);
    console.log('event.uniqueName => ', event.uniqueName);
  
    try {
  
      client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
        .syncLists
        .create({uniqueName: event.uniqueName})
        .then(sync_list => callback(null,sync_list));
    
    } catch (e) {
      
      console.log("Error creating new List Item => ", e);
  
    }
  };