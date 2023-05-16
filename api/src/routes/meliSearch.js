const { Router } = require("express");
const router = Router();
const puppeteer = require("puppeteer");



router.get("/", async (req, res, next) => {
    let  {product}  = req.query;
    console.log(product)
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();

        await page.goto(
            process.env.MELIURL+`${product}#D[A:${product}]`
        );
        let table = await page.evaluate(() => {
            const productName = [
                ...document.getElementsByClassName(
                    "ui-search-item__title shops__item-title"
                ),
            ].map((nodo) => {
                return nodo.innerText;
            });

            const productPrice = [
                ...document.getElementsByClassName("price-tag-text-sr-only"),
            ].map((nodo) => {
                return nodo.innerText;
            });

            const linkToProduct = [
                ...document.getElementsByClassName(
                    "ui-search-item__group__element shops__items-group-details ui-search-link"
                ),
            ].map((nodo) => {
                return nodo.href;
            });

            const imgProduct = [
                ...document.getElementsByClassName('ui-search-result-image__element shops__image-element')
            ].map((nodo) => {
                return nodo.src
            })

            return productName.map((product, i) => ({
                product: product,
                price: productPrice[i],
                link: linkToProduct[i],
                img: imgProduct[i],
            }));
        })
       
        res.status(200).send(table)
        navigator.close();
    } catch (error) {
        next(error)
    }
})

module.exports = router;