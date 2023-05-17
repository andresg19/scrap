const puppeteer = require("puppeteer");
const { Router } = require("express");
const router = Router();


router.get("/", async(req, res, next) => {
    let { product } = req.query;
    console.log(product)
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();
        
        await page.goto(
            process.env.EBAYURL+`_from=R40&_trksid=p2380057.m570.l1313&_nkw=${product}&_sacat=0`
        );
        
        let table = await page.evaluate(() => {
            const imgProduct = [
                ...document.getElementsByClassName('s-item__image-wrapper image-treatment')
            ].map((nodo) => {
                return nodo.childNodes[0].src
            
            });
            const productName = 
            [...document.getElementsByClassName('s-item__title')
        ].map((nodo) => {
            return nodo.innerText
        });
           
            const productPrice = 
            [...document.getElementsByClassName('s-item__price')
        ].map((nodo) => {
            return nodo.innerText
        });
        
            const linkToProduct = 
            [ ...document.getElementsByClassName('s-item__image')
        ].map((nodo) => {
            return nodo.childNodes[0].href
        });
        
        
        return productName.map((product, i) => ({
            img: imgProduct[i],
            product: product,
            price: productPrice[i],
            link: linkToProduct[i],
        }));
        })
        res.status(200).send(table.slice(1, 16))
        await navigator.close();
        
    } catch (error) {
        next(error)
    }
});

        
   

module.exports= router;