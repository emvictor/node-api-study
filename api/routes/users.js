module.exports = app => {
    const customersWallets = require('../controllers/users')();

    app.route('/api/v1/customers-wallets').get(customersWallets.getCustomersWallets);
    app.route('/api/v1/post-customer-wallet').post(customersWallets.postCustomerWallet);
}