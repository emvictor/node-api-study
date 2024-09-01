module.exports = () => {
 const customersWalletsDB = require('../data/customers-wallets')();
 const fs = require('fs');

 const controller = {};

 controller.getCustomersWallets = (req, res) => res.status(200).send(customersWalletsDB);

 controller.postCustomerWallet = (req, res) => {
    const message = req.query
    customersWalletsDB.push(message);
    res.status(200).send(`Customer wallet ${JSON.stringify(message)} added`);
 }

 return controller;
}