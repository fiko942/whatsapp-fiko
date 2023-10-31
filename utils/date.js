const moment = require('moment-timezone')

const tz = 'Asia/Jakarta'

/**
 * The getCurrentMoment function returns the current moment in the specified time zone.
 */
const getCurrentMoment = () => moment().tz(tz)
/**
 * The getCurrentEpoch function returns the current epoch time in seconds.
 */
const getCurrentEpoch = () => moment().tz(tz).unix()


module.exports = {getCurrentMoment, getCurrentEpoch}