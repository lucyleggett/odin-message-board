const formatDate = (date) => {
  const options = { month: "short", day: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

const formatTime = (date) => {
  return date.toLocaleTimeString("en-GB", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

module.exports = { formatDate, formatTime };
