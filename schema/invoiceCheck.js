'use strict';

function checkInvoice(invoice) {
  return invoice !== null
    && typeof invoice === 'object'
    && typeof invoice.id === 'string'
    && invoice.id.trim().length > 0
    && typeof invoice.amount === 'number'
    && Number.isFinite(invoice.amount)
    && invoice.amount > 0
    && typeof invoice.currency === 'string'
    && /^[A-Z]{3}$/.test(invoice.currency);
}

module.exports = { checkInvoice };
