const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    // const imageParams = {
    //   Bucket: 'user-images-7d60049c-1817-445d-88a6-0a5cd155b06b',
    //   Key: `${uuidv4()}.${fileType}`,
    //   Body: fileName.buffer,
    // };

    const imageParams = {
      Bucket: 'user-images-7d60049c-1817-445d-88a6-0a5cd155b06b',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read' // allow read access to this file
    };
  
    return imageParams;
  };

module.exports = params;