export function formatTimestamp(originalTimestamp: any) {
    const dateObject = new Date(originalTimestamp);
    const day = dateObject.getUTCDate();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = monthNames[dateObject.getUTCMonth()];
    const year = dateObject.getUTCFullYear();
  
    return `${day} ${month} ${year}`;
  }
  



  export function formatDateToReadable(dateString : any) {
    const date = new Date(dateString);
    
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" }); // Full month name
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  