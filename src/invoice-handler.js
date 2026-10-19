'use strict';

const { checkInvoice } = require('../schema/invoiceCheck');

function handleInvoice(invoice) {
  if (!checkInvoice(invoice)) {
    throw new TypeError('Invalid invoice');
  }

  return {
    status: 'accepted',
    invoiceId: invoice.id,
    amount: invoice.amount,
    currency: invoice.currency,
  };
}

module.exports = { handleInvoice };
