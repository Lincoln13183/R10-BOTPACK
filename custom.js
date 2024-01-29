const logger = require('./utils/log');
const cron = require('node-cron');
const axios = require("axios");
const fs = require('fs-extra');
const path = require("path");
const request = require('request');
const PREFIX = true;

module.exports = async ({ api }) => {
  const minInterval = 5 * 60 * 1000; // Minimum interval in milliseconds
  let lastMessageTime = 0;
  let messagedThreads = new Set();

  const configCustom = {
    autoRestart: {
      status: true,
      time: 40, // 40 minutes
      note: 'To avoid problems, enable periodic bot restarts'
    },
    acceptPending: {
      status: true,
      time: 1, // 1 minute
      note: 'Approve waiting messages after a certain time'
    }
  };

  function autoRestart(config) {
    if (config.status) {
      setInterval(() => {
        logger('Start rebooting the system!', "[ Auto Restart ]");
        process.exit(1);
      }, config.time * 60 * 1000);
    }
  }

  function acceptPending(config) {
    if (config.status) {
      setInterval(async () => {
        try {
          const list = [
            ...(await api.getThreadList(1, null, ['PENDING'])),
            ...(await api.getThreadList(1, null, ['OTHER']))
          ];
          if (list.length > 0) {
            list.forEach(async (thread) => {
              await api.sendMessage('You have been approved for the queue. (This is an automated message)', thread.threadID);
            });
          }
        } catch (err) {
          console.error("Error with accept pending:", err);
        }
      }, config.time * 60 * 1000);
    }
  }

  autoRestart(configCustom.autoRestart);
  acceptPending(configCustom.acceptPending);

  // made by hiroshikim big credit for boss yan
  cron.schedule('*/60 * * * *', async () => {
    const currentTime = Date.now();
    if (currentTime - lastMessageTime < minInterval) {
      console.log("Skipping message due to rate limit");
      return;
    }

    // Update last message time to current time after processing
    lastMessageTime = currentTime;

    try {
      let response = await axios.post('https://your-shoti-api.vercel.app/api/v1/get', { apikey: "$shoti-1hg4gifgnlfdmeslom8" });
      const filePath = path.join(__dirname, "cache", "shoti.mp4");

      var file = fs.createWriteStream(filePath);
      var rqs = request(encodeURI(response.data.data.url));
      rqs.pipe(file);

      file.on('finish', async () => {
        try {
          const data = await api.getThreadList(25, null, ['INBOX']);
          let i = 0;
          let j = 0;

          while (j < 20 && i < data.length) {
            const thread = data[i];
            if (thread.isGroup && thread.name !== thread.threadID && !messagedThreads.has(thread.threadID)) {
              api.sendMessage({
                body: `AUTO RND TIKTOK VID EVERY 60 MINUTES\n\nUser: @${response.data.data.user.username}`,
                attachment: fs.createReadStream(filePath)
              }, thread.threadID, (err) => {
                if (err) {
                  console.error("Error sending message:", err);
                } else {
                  messagedThreads.add(thread.threadID);
                  // Clear the thread from the messagedThreads set after an hour
                  setTimeout(() => {
                    messagedThreads.delete(thread.threadID);
                  }, 60 * 60 * 1000);
                }
              });
              j++;
            }
            i++;
          }
        } catch (err) {
          console.error("Error [Thread List Cron]:", err);
        }
      });

      file.on('error', (err) => {
        console.error("Error downloading video:", err);
      });
    } catch (error) {
      console.error("Error retrieving Shoti video:", error);
    }
  }, {
    scheduled: false,
    timezone: "Asia/Manila"
  });

  // AUTOGREET EVERY 8 hours
  cron.schedule('*/120 * * * *', () => {
    const currentTime = Date.now();
    if (currentTime - lastMessageTime < minInterval) {
      console.log("Skipping message due to rate limit");
      return;
    }

    const randomQuotes = [
"Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
  "Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
  "The world's oldest known recipe is for beer.",
  "Bananas are berries, but strawberries are not.",
  "Cows have best friends and can become stressed when they are separated.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896; Zanzibar surrendered after 38 minutes.",
  "The average person walks the equivalent of three times around the world in a lifetime.",
  "Polar bears are left-handed.",
  "The unicorn is Scotland's national animal.",
  "A group of flamingos is called a 'flamboyance'.",
  "There are more possible iterations of a game of chess than there are atoms in the known universe.",
  "The smell of freshly-cut grass is actually a plant distress call.",
  "A day on Venus is longer than its year.",
  "Honeybees can recognize human faces.",
  "Wombat poop is cube-shaped.",
  "The first oranges weren't orange.",
  "The longest time between two twins being born is 87 days.",
  "A bolt of lightning is six times hotter than the sun.",
  "A baby puffin is called a puffling.",
  "A jiffy is an actual unit of time: 1/100th of a second.",
  "The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'.",
  "There's a species of jellyfish that is biologically immortal.",
  "The Eiffel Tower can be 6 inches taller during the summer due to the expansion of the iron.",
  "The Earth is not a perfect sphere; it's slightly flattened at the poles and bulging at the equator.",
  "A hummingbird weighs less than a penny.",
  "Koalas have fingerprints that are nearly identical to humans'.",
  "There's a town in Norway where the sun doesn't rise for several weeks in the winter, and it doesn't set for several weeks in the summer.",
  "A group of owls is called a parliament.",
  "The fingerprints of a koala are so indistinguishable from humans' that they have on occasion been confused at a crime scene.",
  "The Hawaiian alphabet has only 13 letters.",
  "The average person spends six months of their life waiting for red lights to turn green.",
  "A newborn kangaroo is about 1 inch long.",
  "The oldest known living tree is over 5,000 years old.",
  "Coca-Cola would be green if coloring wasn't added to it.",
  "A day on Mars is about 24.6 hours long.",
  "The Great Wall of China is not visible from space without aid.",
  "A group of crows is called a murder.",
  "There's a place in France where you can witness an optical illusion that makes you appear to grow and shrink as you walk down a hill.",
  "The world's largest desert is Antarctica, not the Sahara.",
  "A blue whale's heart is so big that a human could swim through its arteries.",
  "The longest word in the English language without a vowel is 'rhythms'.",
  "Polar bears' fur is not white; it's actually transparent.",
  "The electric chair was invented by a dentist.",
  "An ostrich's eye is bigger than its brain.",
  "Wombat poop is cube-shaped."
];

    const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];

    api.getThreadList(25, null, ['INBOX'], async (err, data) => {
      if (err) return console.error("Error [Thread List Cron]: " + err);
      let i = 0;
      let j = 0;

      async function message(thread) {
        try {
          api.sendMessage({
            body: `❯ 𝖳𝗁𝖺𝗇𝗄𝗌 𝖿𝗈𝗋 𝗎𝗌𝗂𝗇𝗀 𝖡𝗈𝗍𝗉𝖺𝖼𝗄!\n\n❯ 𝖥𝗈𝗋𝗄 𝖧𝖾𝗋: https://replit.com/@Cliffbotbeluga/BP-for-fun\n\n❯ 𝖥𝗈𝗋 𝖸𝗈𝗎𝗋 𝖢𝗈𝗇𝖼𝖾𝗋𝗇𝗌 𝖠𝖻𝗈𝗎𝗍 𝗍𝗁𝖾 𝖱𝖾𝗉𝗅𝗂𝗍 𝗄𝗂𝗇𝖽𝗅𝗒 𝖺𝖽𝖽 𝖺𝗇𝖽 𝖿𝗈𝗅𝗅𝗈𝗐 𝗆𝖾 𝗈𝗇 𝖥𝖻: https://www.facebook.com/swordigo.swordslush\n\n𝖱𝖠𝖭𝖣𝖮𝖬 𝖥𝖠𝖢𝖳:${randomQuote}`
          }, thread.threadID, (err) => {
            if (err) return;
            messagedThreads.add(thread.threadID);

          });
        } catch (error) {
          console.error("Error sending a message:", error);
        }
      }

      while (j < 20 && i < data.length) {
        if (data[i].isGroup && data[i].name != data[i].threadID && !messagedThreads.has(data[i].threadID)) {
          await message(data[i]);
          j++;
          const CuD = data[i].threadID;
          setTimeout(() => {
            messagedThreads.delete(CuD);
          }, 1000);
        }
        i++;
      }
    });
  }, {
    scheduled: false,
    timezone: "Asia/Manila"
  });
};