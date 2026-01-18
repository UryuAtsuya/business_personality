import { chromium } from 'playwright';

const base = 'http://127.0.0.1:3000';
const shots = [
  { path: '/', file: 'home.png' },
  { path: '/diagnosis', file: 'diagnosis.png' },
  { path: '/result/rhms', file: 'result-rhms.png' },
];

const executablePath = process.env.CHROME_PATH;
const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.setDefaultTimeout(60000);

for (const shot of shots) {
  await page.goto(`${base}${shot.path}`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `.tmp/${shot.file}`, fullPage: true });
}

await browser.close();
