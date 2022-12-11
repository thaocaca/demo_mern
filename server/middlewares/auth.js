const passport = require('passport')
const httpStatus = require('http-status')
const ApiError = require('../untils/ApiError')
const {roleRights} = require('../config/roles')
const { required } = require('joi')

const verifyCallback = (req, resole, reject, requiredRights) => async (err, user, info) => {
    if (err || info || !user) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'please authenticate'))
    }
    req.user = user
    if (requiredRights.length) {
        const userRights = roleRights.get(user.role)
        const hasRequireRights = requiredRights.every((requiredRights)=> userRights.includes(requiredRights))
        if (!hasRequireRights && req.params.userId != user.id) {
            return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'))
        }
    }
    resole();
} 

const auth = (...requiredRights) => async(req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('jwt', {session: false}, verifyCallback(req, resolve, reject, requiredRights))(req, res, next);
    })
    .then(() => next())
    .catch((err) => next(err))
}

module.exports = auth