var MMM = require('../models/mmm');

module.exports = function(app) {
  //var baseUrl = '/api/v_0_0_1/notes';

//every model (resource - notes, cars) should have:
//api routes file
//api model file (mongoose model)
//backbone model
//one or more backbone views
//a single backbone collection (maybe get to collections today) -- if it's a singleton you don't need a collection
//collection view if there's a backbone collection view
//and possibly a backbone router

  app.get(baseUrl, function(req, res){
    Note.find({}, function(err, notes) {
      if (err) return res.status(500).json(err);
      console.log(res);
      //return res.json(notes);
    });
  });

  app.post(baseUrl, function(req, res) {
    var note = new Note(req.body);
    note.save(function(err, resNote) {
      if (err) return res.status(500).json(err);
      return res.send(resNote);
    });
  });

  app.put(baseUrl + '/:id', function(req, res) {
    var note = req.body;
    delete note._id;
    Note.findOneAndUpdate({'_id': req.params.id}, note, function(err, resNote) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resNote);
    });
  });

};
