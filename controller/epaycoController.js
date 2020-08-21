'use strict'
const request = require('request')

const getPayment = (req, res) => {
    const { ref_payco } = req.query;
    const url = `https://secure.epayco.co/validation/v1/reference/${ref_payco}`
    request(url, async function(error, response, body) {
        const bodyParsed = JSON.parse(body);	
        if (bodyParsed.success) {

            //Transaccion Aceptada  
            if (bodyParsed.data.x_cod_response == 1) {
                console.log(bodyParsed);
                return res.redirect(`http://localhost:8080/paymentsuccess`)
            } 

            //Transaccion Rechazada
            if (bodyParsed.data.x_cod_response == 2) {
               
            }

            //Transaccion Pendiente
            if (bodyParsed.data.x_cod_response == 3) {
                
            }

            //Transaccion Fallida
            if (bodyParsed.data.x_cod_response == 4) {
                
            }
        }
    });
}

module.exports = {
    getPayment
}