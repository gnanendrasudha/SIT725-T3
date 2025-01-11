const puppeteer = require('puppeteer');
const { exec } = require('child_process');

// Function to wait for the server to be ready
const waitForServer = async (page, url, retries = 5, delay = 2000) => {
    for (let i = 0; i < retries; i++) {
        try {
            console.log(`Attempting connection to ${url} (Try ${i + 1}/${retries})`);
            await page.goto(url, { waitUntil: 'load', timeout: 5000 });
            console.log(`Successfully connected to ${url}`);
            return; // Exit the loop if successful
        } catch (error) {
            console.log(`Retrying (${i + 1}/${retries})...`);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
    throw new Error(`Unable to connect to ${url} after ${retries} retries`);
};

let browser;
let serverProcess;

// Start the server before running the tests
beforeAll(async () => {
    serverProcess = exec('node server.js'); // Start the server
    browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // Ensure compatibility
    });
});

// Cleanup after tests
afterAll(async () => {
    if (browser) await browser.close();
    if (serverProcess) serverProcess.kill(); // Stop the server
});

test('Should send and receive messages via WebSocket', async () => {
    const page = await browser.newPage();

    // Wait for the server to be ready
    await waitForServer(page, 'http://localhost:3500');

    const consoleMessages = [];
    page.on('console', (msg) => consoleMessages.push(msg.text()));

    // Trigger button click to send a WebSocket message
    await page.click('.card-action a');

    // Wait for WebSocket response
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Verify the WebSocket message was logged in the console
    expect(consoleMessages).toContain('Message received: Hello from the client!');
}, 20000); // Extended timeout
