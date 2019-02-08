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
        console.log('run');


        MongoClient.connect(process.env.MONGOCONNECTSTRING, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
          
            const db = client.db(dbName);
            const collection = db.collection('songs');
            // Find some documents
            collection.find().toArray((err, docs) => {
              assert.equal(err, null);
              
              res.json(docs)
            });
            
          });
        
    });
})
module.exports = router