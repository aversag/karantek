const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://127.0.0.1:5174/', { waitUntil: 'domcontentloaded' }).catch(e => console.log("Goto timeout, but continuing:", e.message));
  
  // Wait for the elements to load
  await page.waitForSelector('.services-section');
  
  const results = await page.evaluate(() => {
    const divs = Array.from(document.querySelectorAll('.fade-in.relative'));
    return divs.map((div, i) => {
      const rect = div.getBoundingClientRect();
      const style = window.getComputedStyle(div);
      const innerGrids = Array.from(div.querySelectorAll('.grid'));
      return {
        index: i,
        top: rect.top,
        height: rect.height,
        className: div.className,
        computedHeight: style.height,
        position: style.position,
        innerGrids: innerGrids.map(g => {
          const grect = g.getBoundingClientRect();
          const gstyle = window.getComputedStyle(g);
          return {
            className: g.className,
            height: grect.height,
            computedHeight: gstyle.height,
            gridTemplateRows: gstyle.gridTemplateRows,
            gridAutoRows: gstyle.gridAutoRows
          };
        })
      };
    });
  });
  
  console.log(JSON.stringify(results, null, 2));
  
  await browser.close();
})();
