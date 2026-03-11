const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Navigate to localhost
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'load' });

  // Wait 3 seconds to let any animations or React hydration finish
  await new Promise(r => setTimeout(r, 3000));

  // Evaluate layout metrics
  const layoutData = await page.evaluate(() => {
    const blocks = Array.from(document.querySelectorAll('.mb-32'));
    return blocks.map((b, i) => {
      const rect = b.getBoundingClientRect();
      const h3 = b.querySelector('h3');
      const h4 = b.querySelector('h4');
      return {
        index: i,
        title: h4 ? h4.textContent : (h3 ? h3.textContent : 'No title'),
        top: rect.top,
        bottom: rect.bottom,
        height: rect.height,
        className: b.className
      };
    });
  });

  console.log(JSON.stringify(layoutData, null, 2));
  await browser.close();
  process.exit(0);
})();
