#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const parser = require("xml2json");
const questions = require("./questions");
const trexExample = require("./example");

const extPath = path.join(process.cwd(), "manifest.trex");
const existingConfig = fs.existsSync(extPath);

console.log(`This utility will walk you through creating a manifest.trex file. You need this trex file to create a Tableau Dashboard Extension. The manifest file contains metadata for the extension and is used for registration.

Open the manifest.trex file afterwards to add a Base64-Encoded ICON.

Press ^C at any time to quit.
`);

// make this function a promise
function changeConfig(answers) {
  const json = JSON.parse(parser.toJson(trexExample, { reversible: true }));
  const main = json.manifest["dashboard-extension"];

  const { name, version, description, author, email, organization, organizationURL, url, fulldata, config } = answers;

  const contexItem = `<configure-context-menu-item />`;
  const permissionItem = `<permission>full data</permission>`;

  const contextItemjson = JSON.parse(parser.toJson(contexItem, { reversible: true }));
  const permissionItemjson = JSON.parse(parser.toJson(permissionItem, { reversible: true }));

  main.name["$t"] = name;
  main["extension-version"] = version;
  json.manifest.resources.resource.text["$t"] = name;
  main.description["$t"] = description;
  main.author.name = author;
  main.author.email = email;
  main.author.organization = organization;
  main.author.website = organizationURL ? organizationURL : "https://www.example.com";
  main["source-location"].url["$t"] = url;
  main["context-menu"] = config ? contextItemjson : main["context-menu"];
  if (fulldata) {
    main["permissions"] = permissionItemjson;
  }

  // stringify new JSON
  const stringified = JSON.stringify(json);
  const xml = parser.toXml(stringified);

  fs.writeFileSync(extPath, xml);
}

if (existingConfig) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "overwrite",
        message: "🚫 manifest.trex already exists! Would you like to overwrite it? 🚫",
        default: false
      }
    ])
    .then(answers => {
      if (answers.overwrite) {
        // file is there but please overwrite
        inquirer.prompt(questions).then(answers => {
          // console.log(JSON.stringify(answers, null, "  "));
          changeConfig(answers);
          console.log(`Done! manifest.trex overwritten`);
          process.exit(0);
        });
      } else {
        // file is there and keep it, so exit
        console.log("Bye 👋");
      }
    });
} else {
  // file is not there and start CLI utility
  inquirer.prompt(questions).then(answers => {
    // console.log(JSON.stringify(answers, null, "  "));
    changeConfig(answers);
    console.log(`Done! manifest.trex created`);
    process.exit(0);
  });
}
