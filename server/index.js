import express from 'express'
import cors from 'cors'

import { MercadoPagoConfig, Preference} from 'mercadopago'
import { ACCESS_TOKEN } from './cred/cred.js';

//------------
//Manejo de pagos con mercadopago

const client = new MercadoPagoConfig({
    accessToken: ACCESS_TOKEN
});

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Server corriendo correctamente ;)")
})

app.post("/create_preference", async (req, res) => {
    try{
        console.log("Post Preference")
        console.log(req.body)
        const body = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success:"https://soundcloud.com/dist1/ysy-a-casi-un-g-de-techno-dist-edit",
                failure:"https://www.youtube.com/results?search_query=never+gonna+give+you+up",
                pending:"https://www.youtube.com/watch?v=-VD-l5BQsuE",
            },
            auto_return: "approved",
            notification_url: "https://44ee-191-84-243-140.ngrok-free.app/webhook" 
        };

        const preference = new Preference(client)
        const result = await preference.create({body})
        console.log("Llegamos al resultado")
        res.json({
            id: result.id
        });
    }catch(error){
        console.log(error)
        res.status(500).json({
            error: "Error al crear la preferencia"
        })
    }
})

app.post('/webhook', async function(req, res){
    const paymentId = req.query.id
    console.log(paymentId)
    try{
        const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${client.accessToken}`
            }
        })
        
        console.log(response.ok)

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            res.sendStatus(200)
        }

        res.sendStatus(404)

    } catch(error) {
        console.error('Error: ' ,error)
        res.sendStatus(500)
    }
})



app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto ", port)
})
