const {
    lookupZip,
    // distanceBetweenZips,
  } = require ('zipcode-detail-lookup');


  const zip = 19019;
  input = zip.toString();
  console.log(lookupZip(zip.toString()));