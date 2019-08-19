# Tableau Extensions API - CLI Utility

Created: August 2019

**This is not created by Tableau and therefore not an official Tableau supported utility. Please contact me if you find bugs or need help**

This utility allows you to quickly scaffold a manifest file. The extension manifest file (.trex) contains metadata for the extension and is used for registration. You need it for every extension that you build. You can learn more about this trex file [here](https://tableau.github.io/extensions-api/docs/trex_manifest.html)

![animated-gif-cli](https://res.cloudinary.com/dmim37dbf/image/upload/v1566211570/tableau_extensions/manifestGIF.gif)

Install:

```
npm i tableau-extensions-api-cli -g
```

After installation, run the following command from anywhere on your machine:

```
tableau-extensions-api-cli
```

**For MacOS users:**
One of the dependencies of this package is the xml2json node package. I encountered a problem when I installed this package. You can fix this 'not ok code 0' error by installing the Xcode developer tools. Go to https://developer.apple.com/downloads, sign in with your developer Apple ID and search for "Command Line Tools", then download and install the appropriate file.

More info in [this stackoverflow post](https://stackoverflow.com/questions/21142121/npm-install-xml2json-fail-to-install)
