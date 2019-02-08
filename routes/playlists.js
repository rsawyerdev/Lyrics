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

        MongoClient.connect(process.env.MONGOCONNECTSTRING, (err, db) => {
            assert.equal(null, err)
            var songs = db.collection('playlists')
            songs.find().toArray((err, docs) => {
                res.json(docs)
            })
        })
    });
})
module.exports = router