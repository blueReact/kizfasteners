module.exports = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // start blocking after 5 requests
  message: "Too many API hits this IP, please try again after an hour"
};