const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Navigate to localhost
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });

  // Evaluate layout metrics
  const layoutData = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h4'));
    const s3_h4 = headings.find(h => h.textContent.includes('Marchés Privés'));
    if (!s3_h4) return "H4 Privés not found";
    
    const s3_grid = s3_h4.nextElementSibling;
    
    const s4_h4 = headings.find(h => h.textContent.includes('Monitoring'));
    const s4_container = s4_h4?.closest('.mb-32');

    return {
      s3_grid: {
        node: s3_grid.tagName,
        className: s3_grid.className,
        offsetHeight: s3_grid.offsetHeight,
        computedDisplay: window.getComputedStyle(s3_grid).display,
        children: Array.from(s3_grid.children).map((c, i) => {
          const innerChild = c.querySelector('div.relative.bg-\\[\\#161616\\]\\/40') || c.firstElementChild;
          return {
            index: i,
            className: c.className,
            offsetHeight: c.offsetHeight,
            computedHeight: window.getComputedStyle(c).height,
            flexGrow: window.getComputedStyle(c).flexGrow,
            innerClass: innerChild?.className,
            innerHeight: innerChild?.offsetHeight
          };
        })
      },
      s4_container_top: s4_container?.getBoundingClientRect().top
    };
  });

  console.log(JSON.stringify(layoutData, null, 2));
  await browser.close();
  process.exit(0);
})();
