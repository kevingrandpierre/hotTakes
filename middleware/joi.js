const joi = require('joi');

const userSchema = joi.object({
                                  email: joi.string().trim().email({ minDomainSegments: 2 }).required(),
                                  password: joi.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).{8,}$")).required(),
                              });
exports.user = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: "joi: Invalid email or password" });
    } else {
        next();
    }
};