const fs = require("node:fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    const exchangeRates = JSON.parse(data);

    let maxRate = exchangeRates[0].rate;

    for (const currency of exchangeRates) {
      if (currency.rate > maxRate) {
        maxRate = currency.rate;
      }
    }

    const outputText = `Максимальний курс: ${maxRate}`;

    fs.writeFile("output.txt", outputText, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(outputText);
    });
  } catch (error) {
    console.error(error);
  }
});


