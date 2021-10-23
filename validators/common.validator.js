const Joi = require('joi');

const idParamSchmea = Joi.object().keys({
    id: Joi.string().length(24).required(),
});

module.exports = {
    idParamSchmea
};