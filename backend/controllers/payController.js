// controllers/paymentController.js
const paymentService = require('../services/payService');

async function payment(req, res) {
  
  const {price, address, userName } = req.body;
  const host = req.get('origin');
  try {

    // Ensure that 'host' is defined before using it
    if (!host) {
      throw new Error('Host is not defined in the request');
    }

    const result = await paymentService.createPayment(price, address, userName, host);
    res.status(result.success ? 200 : 500).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

module.exports = {
    payment
};
