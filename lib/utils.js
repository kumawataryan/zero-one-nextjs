import classNames from 'classnames';

export function cn(...args) {
    return classNames(...args);
}

export function formatDate(dateString) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;
  
    return formattedDate;
  }