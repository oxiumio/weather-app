const router = require("express").Router();
const axios = require("axios");

router.post("/forecast", async (req, res) => {
    try {        
        const location = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GCP_API}&address=${req.body.location}`);    
        const { lat, lng } = location.data.results[0].geometry.location;
        console.log(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng}`);
        const forecast = await axios.get(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API}/${lat},${lng}`);        
        return res.status(200).send(forecast.data);

    } catch (err) {        
        res.status(500).send()
    }
})

module.exports = router;