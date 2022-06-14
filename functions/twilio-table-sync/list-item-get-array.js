exports.handler = function(context, event, callback) {
  
  const client = context.getTwilioClient();
  
  client.sync.services(context.TWILIO_SYNC_SERVICE_SID)
      .syncLists(event.targetList)
      .syncListItems
      .list({limit: 100})
      .then(result => {
        console.log(result);
        callback(null, 
          sortFilterResults(event, result)
        )
    })
    .catch(err => {
      console.log(err.status);      
    });

  };

  function sortFilterResults(event, list) {

    // boolean to sort the results by the field
    let doSort =  event.sortField ? true : false; 

    // Sort ascending or descending
    let sortDescending = Boolean(event.sortDescending) ? Boolean(event.sortDescending) : false;

    // boolean to filter the results by the field
    let doFilter =  event.filterField ? true : false; 

    if (doSort && doFilter) {

      if (!sortDescending) {     
        return list
          .sort((a, b) => (a.data[event.sortField] > b.data[event.sortField]) ? 1 : -1)
          .filter(obj => { return obj.data[event.filterField] === event.filterFieldValue; }); 
      } else {
        return list
          .sort((a, b) => (a.data[event.sortField] < b.data[event.sortField]) ? 1 : -1)
          .filter(obj => { return obj.data[event.filterField] === event.filterFieldValue; }); 
      }

    } else if (doSort) {

      if (!sortDescending) {     
        return list.sort((a, b) => (a.data[event.sortField] > b.data[event.sortField]) ? 1 : -1)
      } else {
        return list.sort((a, b) => (a.data[event.sortField] < b.data[event.sortField]) ? 1 : -1)          
      }        

    } else if (doFilter) {
      
      return list.filter(obj => { return obj.data[event.filterField] === event.filterFieldValue; }); 

    } else {

      return list
      
    }

    

  }