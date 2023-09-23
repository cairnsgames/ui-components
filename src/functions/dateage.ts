const dateAge = (dateString: string, dateNow: string = Date()) => {
    const commentDate = new Date(dateString);
    const now = new Date(dateNow);
    const timeDiff = Math.abs(now.getTime() - commentDate.getTime());
    const minutes = Math.floor(timeDiff / 60000);
    const hours = Math.floor(timeDiff / 3600000);
    const days = Math.floor(timeDiff / 86400000);
    const months = Math.floor(timeDiff / (30 * 86400000));
    const years = Math.floor(timeDiff / (365 * 86400000));

    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (days < 30) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (months < 12) {
      return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
      return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
  };

export default dateAge;