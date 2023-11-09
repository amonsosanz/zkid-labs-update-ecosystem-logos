# zkid-labs-update-ecosystem-logos

A node script to update the logos from the ecosystem partners

# logo manipulation

All the logos are stored in the GIMP file `all-logos-gimp-project.xcf`. Add new logos as required and use the plugin [Export Layers](https://kamilburda.github.io/gimp-export-layers/) to exporting them in a batch.

Some notes:

 * The name of the layer in GIMP must match the name of the organization in `logo_ids.json` but **removing all the dots (.)**.
 * When exporting, make sure the option "Use layer size" is **NOT selected** in the plugin, so all exported PNGs are 400x400.

# script usage

 * Copy `.env.sample` as `.env` and set the values for `SERVER_URL` and `TOKEN`
 * Copy the organizations response from the API. Using Chrome dev tools, you can right click the "Preview" of the response and select "Store object as global variable"
 * Using Chrome dev tools console, you can execute this command to sort, transform and copy the result to the clipboard:
   * `copy(temp1.map(({name, id}) => ({name, id})).sort((a, b) => a.name.localeCompare(b.name)));`
 * Paste the content in the clipboard into `logo_ids.json`
 * Run the script to update the logos with `node push-logos.js`
