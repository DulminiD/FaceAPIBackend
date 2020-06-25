'use strict';
const express = require('express');
const request = require('request');
const router = express.Router();
const data = require('../Details/data');
const params = {
   'returnFaceId': 'true',
   'returnFaceLandmarks': 'false',
   'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
       'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

router.get('/', (req, res)=>{
   
   res.send('API OK');
});

router.post('/url', (req, res)=>{
    const options = {
      uri: data.uriBase,
      qs: params,
      body: '{"url": ' + '"' + req.body.url + '"}',
      headers: {
         'Content-Type': 'application/json',
         'Ocp-Apim-Subscription-Key' : data.subscriptionKey
      }
   };
   request.post(options, (error, response, body) => {
      if (error) {
         console.log('Error: ', error);
         return;
      }
     let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
       console.log("done");
       return res.json(jsonResponse);
   });

});



module.exports = router;
