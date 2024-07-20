export function timeAgo(inputTime: Date): string {
  const now = new Date();
  const deltaSeconds = Math.floor((now.getTime() - inputTime.getTime()) / 1000);

  if (deltaSeconds < 60) {
    return `now`;
    // return `${deltaSeconds} second${deltaSeconds !== 1 ? "s" : ""} ago`;
  } else if (deltaSeconds < 3600) {
    const minutes = Math.floor(deltaSeconds / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (deltaSeconds < 86400) {
    const hours = Math.floor(deltaSeconds / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (deltaSeconds < 2592000) {
    const days = Math.floor(deltaSeconds / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (deltaSeconds < 31536000) {
    const months = Math.floor(deltaSeconds / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(deltaSeconds / 31536000);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
}
