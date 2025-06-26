Steps:
  1. Download firstbot and set that as the working directory (cd /firstbot)
  2. Install robotjs (npm init -y, npm install -g robotjs)
  3. Open bot.js in VS Code (code bot.js) or directly (nano bot.js); Ctrl + O and enter to save, Ctrl + X to exit
  4. Customize the time and message as needed
  5. Download PM2 to automate the process (npm install -g pm2)
  6. Create a PM2 task for the process (pm2 start bot.js --name "first-bot")
  7. Save the PM2 task (pm2 save)
