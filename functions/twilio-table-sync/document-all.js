exports.handler = function(context, event, callback) {
  
    const client = context.getTwilioClient();
    
    client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
        .documents
        .list({limit: 100})
        .then(result => {
          console.log(result);
          callback(null, result.sort((a, b) => (a.uniqueName > b.uniqueName) ? 1 : -1))
      })
      .catch(err => {
        console.log(err.status);      
      });
      
  }