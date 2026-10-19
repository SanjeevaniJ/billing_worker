'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { checkInvoice } = require('../schema/checkInvoice');
const { handleInvoice } = require('../src/invoice-handler');

test('accepts a valid invoice', () => {
  const invoice = { id: 'inv_001', amount: 120, currency: 'USD' };

  assert.equal(checkInvoice(invoice), true);
  assert.deepEqual(handleInvoice(invoice), {
    status: 'accepted',
    invoiceId: 'inv_001',
    amount: 120,
    currency: 'USD',
  });
});

test('rejects invalid invoices', () => {
  const invalidInvoices = [
    null,
    {},
    { id: '', amount: 120, currency: 'USD' },
    { id: 'inv_001', amount: -1, currency: 'USD' },
    { id: 'inv_001', amount: 0, currency: 'USD' },
    { id: 'inv_001', amount: '120', currency: 'USD' },
    { id: 'inv_001', amount: NaN, currency: 'USD' },
    { id: 'inv_001', amount: Infinity, currency: 'USD' },
    { id: 'inv_001', amount: 120, currency: 'usd' },
  ];

  for (const invoice of invalidInvoices) {
    assert.equal(checkInvoice(invoice), false);
    assert.throws(() => handleInvoice(invoice), {
      name: 'TypeError',
      message: 'Invalid invoice',
    });
  }
});
