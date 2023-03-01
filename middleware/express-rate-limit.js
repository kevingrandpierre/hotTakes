// Import des modules
const expressRateLimit = require('express-rate-limit');


// Configuration de la limite de débit/user
const maxRate = expressRateLimit({
                                     windowMs: 15 * 60 * 1000, // 15 minutes
                                     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
                                     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
                                     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
                                 })

// Export de la configuration
module.exports = {maxRate};