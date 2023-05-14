const puppeteer = require("puppeteer");
require("dotenv").config();

const meliScrap = async () => {
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();

        await page.goto(
            `${process.env.MELIURL}`+"pizarra-de-jueguete#D[A:pizarra%20de%20jueguete]"
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
        });

        console.log(table);
        await navigator.close();
    } catch (error) {
        console.log(error);
    }
};

module.exports = meliScrap;
