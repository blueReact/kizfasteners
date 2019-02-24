module.exports = function(req, res, next) {
  
  if(req.session.admin === false || !req.session.admin) {

      // unauthorized status 401
      res.status(401).json({
          "message": "is not admin"
      });
  }
  else {
      next();
  }

}