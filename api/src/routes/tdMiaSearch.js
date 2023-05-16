const puppeteer = require("puppeteer");
const { Router } = require("express");
const router = Router();


router.get("/", async(req, res, next) => {
    let {product} = req.query;
    console.log(product)
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();

        await page.goto(
            process.env.TDMIAURL+`search?amzs=${product}`
        );

        let table = await page.evaluate(() => {
            const productName = 
            [...document.getElementsByClassName('item-name')
        ].map((nodo) => {
            return nodo.innerText
        });

            const productPrice = [
                ...document.getElementsByClassName("item-real-price"),
            ].map((nodo) => {
                return nodo.innerText;
            });

            const linkToProduct =  [
                ...document.getElementsByClassName('item button-border')
            ].map((nodo) => {
                return nodo.childNodes[1].href
            })

            const imgProduct = [
                ...document.getElementsByClassName('main-image')
            ].map((nodo) => {
                return nodo.src
            })

            return productName.map((product, i) => ({
                product: product,
                price: productPrice[i],
                link: linkToProduct[i],
                img: imgProduct[i],
            }));
        });

        res.status(200).send(table)
        await navigator.close();
    } catch (error) {
        next(error)
    }
})


module.exports= router;