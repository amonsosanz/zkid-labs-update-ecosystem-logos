# zkid-labs-update-ecosystem-logos

A node script to update the logos from the ecosystem partners

# script usage

 * Copy the organizations response from the API. Using Chrome dev tools, right click the "Preview" of the response and select "Store object as global variable"
 * Using Chrome dev tools console, execute this command: `copy(temp1.map(({name, id}) => ({name, id})).sort((a, b) => a.name.localeCompare(b.name)));`
 * Paste the content in the clipboard in `logo_ids.json`
 * Make sure you updated `SERVER_URL` and `TOKEN` constants in `push-logos.js` and run the script to update the logos with `node push-logos.js`

# logo manipulation

All the logos are stored in the GIMP file `all-logos-gimp-project.xcf`. Add new logos as required and use the plugin [Export Layers](https://kamilburda.github.io/gimp-export-layers/) to exporting them in a batch.

Some notes:

 * The name of the layer in GIMP must match the name of the organization in `logo_ids.json` but **removing all the dots (.)**.
 * When exporting, make sure the option "Use layer size" is selected in the plugin, so all exported PNGs are 400x400.
