const express = require("express");
const request = require("request-promise");

const app = express();
const PORT=5000;

const apiKey ='4d88992234afe22bed2836de463c0af1'
const baseUrl =`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());

app.get('/',(req,res)=> {
    res.send('Welcom to Amazon scrspet APT.');
});

//get product detailes 

app.get('/product/:productId', async (req,res)=> {
    const {productId}=req.params;
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${producId}`)
        res.json(response);
    } catch (error){
        res.json(error);

    }
});

app.listen(PORT,()=> console.log(`Sarver running on port${PORT}`));
