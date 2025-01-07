const puppeteer = require('puppeteer');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = 'https://now.calpoly.edu/organizations';
    await page.goto(url, { waitUntil: 'networkidle2' });

    let loadMoreButtonSelector = 'div.outlinedButton > button'; // Updated selector for the button
    let hasMore = true;

    while (hasMore) {
        try {
            await page.waitForSelector(loadMoreButtonSelector, { timeout: 5000 });

            await page.click(loadMoreButtonSelector);

            await page.waitForTimeout(2000); // Adjust based on the website's speed
        } catch (e) {
            hasMore = false;
        }
    }

    const organizations = await page.evaluate(() => {
        const orgElements = document.querySelectorAll('a[href^="/organization/"]');
        const data = [];

        orgElements.forEach(org => {
            const nameElement = org.querySelector('div[style*="font-size: 1.125rem"]');
            const name = nameElement?.innerText.trim() || 'No name available';

            const descriptionElement = org.querySelector('.DescriptionExcerpt');
            const description = descriptionElement?.innerText.trim() || 'No description available';

            data.push({ name, description });
        });

        return data;
    });

    await browser.close();

    const csvWriter = createCsvWriter({
        path: 'organizations.csv',
        header: [
            { id: 'name', title: 'Name' },
            { id: 'description', title: 'Description' }
        ]
    });

    await csvWriter.writeRecords(organizations);

    console.log('Data exported to organizations.csv');
})();
