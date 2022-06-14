
// This is your new function. To start, set the name and path on the left.

exports.handler = function(context, event, callback) {

  const client = context.getTwilioClient();

  client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
      .documents      
      .list()
      .then(syncDocs => {        
        syncDocs.forEach(syncDoc => {
          console.log("syncDoc => ", syncDoc);
          console.log("syncDoc.uniqueName => ", syncDoc.uniqueName);
          console.log("uniqueName => ", event.uniqueName);
          if (syncDoc.uniqueName === event.uniqueName) {
            callback(null, syncDoc)
          }
        });
    })
    .catch(err => {
      console.log(err.status);      
    });
}

