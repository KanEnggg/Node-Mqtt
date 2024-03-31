import express from 'express';
import * as schema from "./db/schema.js";

const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    let devices;
    if (req.query.id) {
        devices = await schema.Device.findOne(
            {
                where: {
                    id: req.query.id
                }
            }
        );
    } else {
        devices = await schema.Device.findAll();
    }
    res.json(devices)
})


app.post('/', async (req, res) => {
    let devices;
    let response;
    try {
        if (req.query.id) {
            devices = await schema.Device.findOne(
                {
                    where: {
                        id: req.query.id
                    }
                }
            );
            await devices.update(req.body)
            await devices.save()
        } else {
            devices = await schema.Device.create(req.body);
        }
        response = devices
    } catch (error) {
        response = error
    }
    res.json(response)
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})