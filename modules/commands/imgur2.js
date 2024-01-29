const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

module.exports.config = {
  name: "imgur2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Dipto",//please don't change credit.Support me😊🫶
  usePrefix: false,
  description: "Convert video to Imgur link",
  commandCategory: "utility",
  dependencies: {
    "axios": "",
    "form-data": ""
  },
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;

  // Assuming the user sends the video as an attachment
  var videoUrl = event.messageReply?.attachments[0]?.url || args.join(" ");
  const videoName = `video-${Date.now()}.mp4`;

  if (!videoUrl) {
    return api.sendMessage('Please reply a video file.', threadID, messageID);
  }

  try {
    // Download the video from the message
    const videoResponse = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream'
    });

    // Save video to a file
    const videoStream = videoResponse.data;
    const videoPath = `${__dirname}/cache/${videoName}`;
    const videoWriter = fs.createWriteStream(videoPath);
    videoStream.pipe(videoWriter);

    await new Promise((resolve, reject) => {
      videoWriter.on('finish', resolve);
      videoWriter.on('error', (error) => {
        console.error('Error downloading video file:', error.message);
        reject(error);
      });
    });

    // Upload to Imgur
    const formData = new FormData();
    formData.append('video', fs.createReadStream(videoPath), videoName);

    const imgurResponse = await axios({
      method: 'post',
      url: 'https://api.imgur.com/3/upload',
      headers: {
        ...formData.getHeaders(),
        'Authorization': 'Dipto ee0b7ee0b7ee0b7ee0b7ee0b' // Replace with actual Imgur Client ID
      },
      data: formData
    });

    // Send the Imgur link as a response
    if (imgurResponse && imgurResponse.data.success) {
      api.sendMessage(`Here is your Imgur link:\n${imgurResponse.data.data.link}`, threadID, messageID);
    } else {
      api.sendMessage('Failed to upload video to Imgur.', threadID, messageID);
    }
  } catch (error) {
    api.sendMessage(`An error occurred while uploading the video to Imgur: ${error.message}`, threadID, messageID);
  } finally {
    // Cleaning up the downloaded video file, making sure we always clean up, even if there was an error
    const videoPathCleanup = `${__dirname}/cache/${videoName}`;
    if (fs.existsSync(videoPathCleanup)) {
      fs.unlinkSync(videoPathCleanup);
    }
  }
};