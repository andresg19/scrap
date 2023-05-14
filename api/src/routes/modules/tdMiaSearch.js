const puppeteer = require("puppeteer");
require("dotenv").config();

const tdMiaScrap = async () => {
    try {
        const navigator = await puppeteer.launch();
        const page = await navigator.newPage();

        await page.goto(
            `${process.env.MELIURL}`+'search?amzs=remeras'
        );

        // let table = await page.evaluate(() => {
        //     const
        // })
    } catch (error) {
        console.log(error)
    }
}