const { Router } = require("express");
const puppeteer = require("puppeteer");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const meliSearch = require("./meliSearch");
const tdMiaSearch = require("./tdMiaSearch");
const ebayScrap = require("./ebaySearch");



router.use("/melisearch", meliSearch);
router.use("/tdmiasearch", tdMiaSearch);
router.use("/ebaysearch", ebayScrap);


module.exports = router;

// document.getElementsByClassName('ui-search-result__image shops__picturesStyles')[1].__reactProps$rgfmoej80if.children[0].props.href;