var express = require('express')
var router = express.Router()
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID
var d = require('domain').create()
var assert = require('assert')
var dbName = 'lyricsapp'

router.get('/', function (req, res, next) {
    d.on('error', function (err) {
        console.log('Oh no, something wrong with DB');
        res.json(0)
    });
    d.run(() => {
        MongoClient.connect(process.env.MONGOCONNECTSTRING, function(err, client) {
            assert.equal(null, err);
            
            const db = client.db(dbName);
            const collection = db.collection('playlists');

            collection.find().toArray((err, docs) => {
              assert.equal(err, null);
              
              res.json(docs)
            })
            
          })  
    })
})

router.get('/:id', function (req, res, next) {
  d.on('error', function (err) {
      console.log('Oh no, something wrong with DB');
      res.json(0)
  });
  d.run(() => {
      MongoClient.connect(process.env.MONGOCONNECTSTRING, function(err, client) {
          assert.equal(null, err);
          
          const db = client.db(dbName);
          const collection = db.collection('playlists');

          collection.findOne({_id: ObjectID(req.params.id)}, (err, response) => {
            assert.equal(err, null);
            
            res.json(response)
          })
        })  
  })
})

router.patch('/:id', function (req, res, next) {
  d.on('error', function (err) {
      console.log('Oh no, something wrong with DB');
      res.json(0)
  });
  d.run(() => {
      MongoClient.connect(process.env.MONGOCONNECTSTRING, function(err, client) {
          assert.equal(null, err);
          
          const db = client.db(dbName);
          const collection = db.collection('playlists');

          collection.findOneAndUpdate({_id: ObjectID(req.params.id)}, {$set: req.body}, (err, response) => {
            assert.equal(err, null);
            console.log()
            res.json(response.value)
          })
        })  
  })
})

router.delete('/:id', function (req, res, next) {
  d.on('error', function (err) {
      console.log('Oh no, something wrong with DB');
      res.json(0)
  });
  d.run(() => {
      MongoClient.connect(process.env.MONGOCONNECTSTRING, function(err, client) {
          assert.equal(null, err);
          
          const db = client.db(dbName);
          const collection = db.collection('playlists');

          collection.findOneAndDelete({_id: ObjectID(req.params.id)}, (err, response) => {
            assert.equal(err, null);
            
            res.json(response)
          })
        })  
  })
})

module.exports = router