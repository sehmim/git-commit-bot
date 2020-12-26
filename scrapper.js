const puppeteer = require('puppeteer');

const BASE_URL = "https://github.com/login"

const appenedDiv = '<div></div>'

const scrapper = {
    browser: null,
    page: null,

    initialize: async () => {
        scrapper.browser = await puppeteer.launch({ headless: (process.env.HEADLESS ? true : false) });
        scrapper.page = await scrapper.browser.newPage();

        await scrapper.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
    },

    login: async (username, password) => { 

        await scrapper.page.waitFor(500)

        await scrapper.page.type("input[name='login']", username, { delay: 100 })

        await scrapper.page.waitFor(500)

        await scrapper.page.type("input[name='password']", password, { delay: 100 })

        await scrapper.page.click("input[name='commit']", { delay: 250 })

        await scrapper.page.goto(process.env.REPO, { waitUntil: 'networkidle2' }, { delay: 200 });

    },

    commit: async (commitMessage, commitChange) => {

        await scrapper.page.click("a[class='Box-btn-octicon btn-octicon float-right']", { delay: 500 })
        
        await scrapper.page.waitForSelector("div[class='CodeMirror-scroll']");

        await scrapper.page.click("div[class='CodeMirror-scroll']", { delay: 500 })

        await scrapper.page.waitForSelector("pre[class=' CodeMirror-line ']");

        await scrapper.page.type("pre[class=' CodeMirror-line ']", commitChange ,{ delay: 500 })
        
        // type int commit input 
        await scrapper.page.type("input[class='form-control input-block input-contrast js-new-blob-commit-summary']", commitMessage ,{ delay: 500 })

        // press commit btn
        await scrapper.page.click("button[id='submit-file']",{ delay: 500 })
    },
}

module.exports = scrapper;


