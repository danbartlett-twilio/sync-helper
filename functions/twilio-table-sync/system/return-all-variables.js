/*

  return-all-variables.js

  Retrun all system varialbles

*/

// ADD twilio-service-helper
const tsh = require(Runtime.getFunctions()['twilio-table-sync/system/twilio-service-helper'].path);

exports.handler = async function(context, event, callback) {
    
  // The Twilio node Client library 
  const client = context.getTwilioClient();

  const environment = await tsh.getCurrentEnvironment(client, context.DOMAIN_NAME,);
  
  const variables = await tsh.getAllVariables(client, environment);
    
  return callback(null, variables.sort((a, b) => (a.key > b.key) ? 1 : -1));
  

};