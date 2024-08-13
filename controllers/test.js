const {
    lookupZip,
    // distanceBetweenZips,
  } = require ('zipcode-detail-lookup');


  const zip = 98105
  input = zip.toString();
  console.log(lookupZip(input.toString()));