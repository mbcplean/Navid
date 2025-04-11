// Import required modules for our awesome bot! 😎📦💻✨🔥
// Node-telegram-bot-api for interfacing with Telegram API and fs for file operations 😃📁🛠️📝💡
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const readline = require('readline');

// Create a readline interface to input the Telegram bot token dynamically ⌨️📲💬✨🚀
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter the token and start the bot once provided 💥🔑🤩💬🌟
rl.question('Enter your Telegram Bot Token: ', (token) => {
  // Initialize the Telegram bot with polling enabled to listen for commands 😃📡🗣️🚀🔥
  const bot = new TelegramBot(token, { polling: true });
  console.log('Bot is active and ready to receive the /jjj command! 🥳📲💥✨😎');

  // Listen for the /jjj command and send the usernames.txt file to the user 🎉📤🚀🤖💡
  bot.onText(/\/jjj/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendDocument(chatId, 'usernames.txt')
      .then(() => {
        console.log('The file usernames.txt was sent successfully! 📁🎊💥🤩🚀');
      })
      .catch(err => {
        console.error('Error sending the file:', err);
      });
  });

  // Close the readline interface after receiving the token input 😊👏📝🚀💫
  rl.close();
});
