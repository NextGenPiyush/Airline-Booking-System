const cron = require('node-cron');

const {BookingService} = require('../../services');
const { response } = require('express');

function scheduleCrons() {
    cron.schedule('*/10 * * * *', async () => {   // every 10 mins
        await BookingService.cancelOldBookings();
    });
}

module.exports = scheduleCrons;
