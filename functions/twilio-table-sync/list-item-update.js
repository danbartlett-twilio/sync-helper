
exports.handler = function(context, event, callback) {
  
  const client = context.getTwilioClient();

  console.log('event => ', event);
  console.log('event.payload => ', event.payload);

  client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
      .syncLists(event.targetList)      
      
            .syncListItems(parseInt(event.listItemIndex))
            .update({data: event.payload})
            .then(callback(null,event.listItemIndex));

};