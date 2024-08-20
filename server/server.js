const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.waitForSelector('.top-card-layout__title', { timeout: 30000 });

    const data = await page.evaluate(() => {
      const nameElement = document.querySelector('.top-card-layout__title');
      const photoElement = document.querySelectorAll('img'); 

      const experience = Array.from(document.querySelectorAll('.experience-item')).map(item => item.innerText);

      const skills = Array.from(document.querySelectorAll('.skill-item')).map(item => item.innerText);

      const education = Array.from(document.querySelectorAll('.education-item')).map(item => item.innerText);

      const certifications = Array.from(document.querySelectorAll('.certifications .profile-section-card')).map(item => item.innerText);

      const descriptionElement = document.querySelector('.core-section-container__content');

      const name = nameElement ? nameElement.innerText : 'Name not found';
      const photo = photoElement ? [...photoElement].map(item => item.src)[0] : 'Photo not found';
      const description = descriptionElement ? descriptionElement.innerText : 'Description not found';

      return {
        name,
        photo,
        description,
        experience,
        skills,
        education,
        certifications,
      };
    });

    await browser.close();
    res.json(data);
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Error scraping data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

