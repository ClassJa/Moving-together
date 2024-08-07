const {
    lookupZip,
    // distanceBetweenZips,
  } = require ('zipcode-detail-lookup');


  const zip = 35212;
  input = zip.toString();
  console.log(lookupZip(zip.toString()));