module.exports = () => {
 const db = require('../data/users')();
 const fs = require('fs');

 const controller = {};

 controller.getUsers = (req, res) => res.status(200).send(db);

 controller.postCustomerWallet = (req, res) => {
    getPromisedMessage(req.query).then((message) => {
    db.push(message)
    res.status(200).send(`Customer wallet ${JSON.stringify(message)} added`)
   })
 }

 return controller;
}

const getPromisedMessage = (message) => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
               resolve(message);
         }, 10000);
      }).catch(console.log);
}