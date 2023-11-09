require("dotenv").config();

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const { SERVER_URL, TOKEN } = process.env;
const LOGO_DIRECTORY = "./export";

const logoIds = require("./logo_ids.json");

fs.readdir(LOGO_DIRECTORY, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  for (const logoFilename of files) {
    const logoFilePath = path.join(LOGO_DIRECTORY, logoFilename);

    if (fs.statSync(logoFilePath).isFile()) {
      const logoName = logoFilename.split(".png")[0];
      const logoId = logoIds.find(
        ({ name }) => name.replace(/\./g, "") === logoName
      )?.id;

      if (logoId) {
        const base64EncodedLogo = `data:image/png;base64,${fs.readFileSync(
          logoFilePath,
          "base64"
        )}`;

        try {
          const response = await axios.patch(
            `${SERVER_URL}/organizations/${logoId}`,
            {
              logo: base64EncodedLogo,
            },
            {
              headers: {
                Authorization: `Bearer ${TOKEN}`,
              },
            }
          );

          console.log(`Logo ${logoName} updated. Response:`, response.data);
        } catch (error) {
          console.error(
            `Error updating logo ${logoName}:`,
            error.response.data
          );
        }
      } else {
        console.warn(`No logo ID found for ${logoName}. Skipping.`);
      }
    }
  }
});
