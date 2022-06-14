
exports.handler = function(context, event, callback) {
  
  const client = context.getTwilioClient();

  console.log('event => ', event);
  console.log('event.payload => ', event.payload);

  try {

    client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
      .syncLists(event.targetList)            
            .syncListItems
            .create({data: event.payload})
            .then( syncListItem => callback(null,syncListItem.index) );
  
  } catch (e) {
    
    console.log("Error creating new List Item => ", e);

  }
};