const puppeteer = require("puppeteer");
const { Router } = require("express");
const router = Router();


router.get("/", async(req, res, next) => {
    try {

        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();
        
        await page.goto(
            `${process.env.EBAYURL}`+'_from=R40&_trksid=p2380057.m570.l1313&_nkw=adidas&_sacat=0'
        );
        
        let table = await page.evaluate(() => {
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
        
        const imgProduct = [
            ...document.getElementsByClassName('s-item__image-wrapper image-treatment')
        ].map((nodo) => {
            return nodo.childNodes[0].src
        
        });
        
        return productName.map((product, i) => ({
            product: product,
            price: productPrice[i],
            link: linkToProduct[i],
            img: imgProduct[i],
        }));
        })
        res.status(200).send(table)
        await navigator.close();
        
    } catch (error) {
        next(error)
    }
});

        
   

module.exports= router;