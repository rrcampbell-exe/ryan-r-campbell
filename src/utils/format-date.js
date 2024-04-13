const formatDate = (isoDate) => {
  // Parse the ISO date string
  const date = new Date(isoDate);
  
  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Extract month, date, and year from the parsed date
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  
  // Construct the formatted date string
  const formattedDate = `${month} ${day}, ${year}`
  
  return formattedDate
}

export default formatDate
