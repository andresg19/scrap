const { Router } = require("express");
const puppeteer = require("puppeteer");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// const pictureDay = require("./pictureDay");

const scrap = async () => {
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();
        
        await page.goto('https://listado.mercadolibre.com.ar/autos#D[A:autos]');
        
        let table = await page.evaluate(() => {
            const productName = [
                ...document.getElementsByClassName('ui-search-item__title shops__item-title')
            ].map((nodo) => { 
                return nodo.innerText
            });

            const productPrice = [
                ...document.getElementsByClassName('price-tag-text-sr-only')
            ].map((nodo) => { 
                return nodo.innerText
            });


            const linkToProduct = [
                ...document.getElementsByClassName('ui-search-item__group__element shops__items-group-details ui-search-link')
            ].map((nodo) => {
                return nodo.href
            })
                

            return productName.map((product, i, j) => ({product: product, price: productPrice[i], link: linkToProduct[i]}));
        });

        console.log(table);
        await navigator.close();

        
    } catch (error) {
        console.log(error)
    };
};


router.use("/pictureday", scrap);


module.exports = router;

// document.getElementsByClassName('ui-search-result__image shops__picturesStyles')[1].__reactProps$rgfmoej80if.children[0].props.href;