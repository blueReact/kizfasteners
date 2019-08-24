module.exports = {
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5, // start blocking after 5 requests
  message: "Too many API hits from this IP, please try again after an hour"
};