exports.handler = function(context, event, callback) {
  
    const client = context.getTwilioClient();
    
    console.log("in get all lists", event);
  
    client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
        .syncLists      
        .list()
        .then(result => {
          console.log(result);
          callback(null, result.sort((a, b) => (a.uniqueName > b.uniqueName) ? 1 : -1))
      })
      .catch(err => {
        console.log(err.status);      
      });
      
  }