const puppeteer = require("puppeteer");
require("dotenv").config();

const tdMiaScrap = async () => {
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();

        await page.goto(
            `${process.env.TDMIAURL}`+'search?amzs=remeras'
        );

        let table = await page.evaluate(() => {
            const productName = 
            [...document.getElementsByClassName('item-name')
        ].map((nodo) => {
            return nodo.innerText
        })

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
        console.log(table);
        await navigator.close();
    } catch (error) {
        console.log(error)
    }
}

module.exports= tdMiaScrap;