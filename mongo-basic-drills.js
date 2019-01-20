// get all
db.restaurants.find();

// limit and sort
db.restaurants.find().limit(5).sort({field: "value"});

// get by _id
var findId = db.restaurants.findOne({}, {_id:true})._id;
db.restaurants.findOne({_id: findId});

// get by value
db.restaurants.findOne({grade: "A"})

// count
db.restaurants.count();

// count by nested value
db.restaurants.find({grade: "A"}).count();

// delete by id
var deleteById = db.restaurants.findOne({}, {_id: true})._id
//db.restaurants.find({_id: deleteById}).count(); // => 1
//db.restaurants.removeOne({_id: deleteById});
//db.restaurants.find({_id: deleteById).count(); // => 0
db.restaurant.removeOne({_id: deleteById});

// update a single document
var updateOneDoc = db.restaurants.findOne({}, {_id: true})._id;
db.restaurants.updateOne(
    {_id: updateOneDoc},
    {$set: {name: "Foo Bar Bizz Bang"}}
  );

// update many documents
db.restaurants.updateMany(
    {"grade": "A"},
    {$set: {"grade": "D"}}
  );