import jwt from "jsonwebtoken";

const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h' })
}

const getTokenData = (token) => {
    return jwt.verify(token, 'SECRET', (err, decoded) => {
        if (err) {
            console.log('Error al obtener data del token')
            return err
        }
        return decoded
    })
}