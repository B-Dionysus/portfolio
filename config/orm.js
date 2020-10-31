// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  mainPage: function(tabName, cb){
    const queryString = "SELECT * FROM projectCat";
    connection.query(queryString, [tabName], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  loadProject:function(projectId, responseObject, cb){
    const queryString="SELECT * FROM projectCat WHERE id=?";
    connection.query(queryString, [projectId], (err,data)=>{
      if(err) throw err;

      this.loadTabs(projectId, data, responseObject,cb);
    })
  },
  loadTabs:function(id, main, cb){
    connection.query("select tabName, id from projectcat where id!=? order by displayOrder;", [id],(err,data)=>{
        if(err) throw err;
        
        cb(main, data);
    })
  },





  findTab: function(tabName, cb){
  const queryString = "SELECT * FROM projectCat where tabName=?";
  connection.query(queryString, [tabName], function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
