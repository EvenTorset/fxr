# About this page
This page is for those that are not already familiar with Node.js and want to run scripts using the library locally. It goes over the basics, so that you can better understand how it works, and to get you started.

If you run into any problems or get confused about something, check out [the troubleshooting section](#troubleshooting) at the bottom, it might be able to help you.

# Node.js
Node.js is a program that lets you run JavaScript files locally. You can download it from the official website here: https://nodejs.org/

This library has only been tested using version 21 of Node, so any version after that is recommended, but it should work fine on v20 and possibly older versions as well.

When installing it, it will ask if you want to also install various tools for native modules (Python 2, VS Build Tools, Boxstarter, Chocolatey). If you don't know whether you should tick the checkbox or not: It depends on what you want to do with Node. This library does not require any of this, so feel free to leave it unticked if that's all you want to use it for. If you want to use it for other things, it might be a good idea to tick it just in case you'll need a package that requires it at some point.

## npm
Node Package Manager (npm) is a separate program that is installed along with Node. It lets you easily install and manage dependencies for your project.

# Project folder
To use the library with Node, you'll want to make a new empty folder to keep everything related contained somewhere. Next, there is a command that you need to run to install the library. It must be run from inside the new folder, otherwise it will be installed somewhere else on your computer. To make sure that it's run from the correct folder, (on Windows) open the command prompt in that folder by entering `cmd` in the address bar and pressing enter. You can also open the Windows Terminal in the folder by right-clicking in there and selecting "Open in Terminal" if you have that option, or you can open the folder in VS Code and run commands from the termnial in that.

This is the command you must run in that folder to install the library:
```
npm install @cccode/fxr --omit=dev
```
This is using npm to install the library (`@cccode/fxr`) without including the dev-dependencies (`--omit=dev`) of it, which are not needed to use the library, only for transpiling it and generating the documentation site.

If everything worked correctly, a new folder called `node_modules` and two new files called `package.json` and `package-lock.json` should have shown up in the folder. Those three should so far be the only things in the folder.

# Modules
Node can run JS code as either CommonJS scripts or ECMAScript modules (ESM). CommonJS is an old, outdated module system that should only be used if it's required by dependencies or for backwards compatiblity. ESM is newer and it is actually part of the JS language specification, unlike CommonJS. This library uses ESM and can not be used from CommonJS (without weird workarounds).

Node runs JS code as CommonJS scripts by default, so you must tell it that your code is a module. To do that, you have two options (actually more options, but two easy ones that should be preferred):
1. You can make a single file act as a module by using the `.mjs` file extension instead of `.js`. For example, if you put your code in a file called `example.mjs`, it will always be run as a module.
2. You can make the entire project a module by editing the `package.json` file. This means that you can still use the `.js` extension for any file in the folder and it will be run as a module. To do this, open `package.json` in a text editor and set "type" to "module". Your file should look something like this once you're done:
```json
{
  "type": "module",
  "dependencies": {
    "@cccode/fxr": "^10.0.0"
  }
}
```
I would recommend using the second option, but it really doesn't matter, the choice is up to you. For the rest of this guide, I'll assume that you went with the second option, so if you chose the first one just replace any `.js` file extensions with `.mjs`.

# Testing the setup
To test that you have done everything correctly, let's try to make a very simple example FXR file.

Save this code in a file called `example.js` inside the project folder:
```js
import { FXR, BasicNode, BillboardEx, Game } from '@cccode/fxr'

const fxr = new FXR(300)

fxr.root.nodes = [
  new BasicNode([
    new BillboardEx({
      color1: [1, 0, 0, 1]
    })
  ])
]

await fxr.saveAs('example.fxr', Game.EldenRing)
```
This creates a new FXR file with the ID 300 and sets up a single red square as the effect. It then uses the Node file system module to write the file to the folder as `example.fxr`.

To run the example script, use this command:
```
node example.js
```
If everything worked, this should have added a new file named `example.fxr` to the project folder.

# Usage
Just like in the example test above, you can run any script from the project folder using the same command:
```
node file_name.js
```
Just replace the file name with whatever you name your JS files.

If you don't want to run a command from the terminal every time, you can either make a simple Batch file do it, or you can run it directly from your text editor if it has support for that.

To use a Batch file to run the command, just save this to a file called `run.bat` in the project folder:
```bat
node example.js
pause
```
That will run a specific JS file when you double click the `run.bat` file. To make it more generic, you can modify it a bit:
```bat
node "%~1"
pause
```
That will run whatever JS file you drag onto the `run.bat` file. Slightly less convenient than just double clicking it, but it works for files with different names without having to edit the Batch file.

To run your code directly from your text editor, you can set up a task, launch configuration, build system, or whatever your editor calls it. In VS Code, you can use a launch config like this one:
```json
{
  "name": "Node.js - Run Script",
  "type": "node",
  "request": "launch",
  "cwd": "${workspaceFolder}/${relativeFileDirname}",
  "program": "${file}"
}
```
You can then run the code by just pressing a hotkey when you have the file open.

# Updating
If a new version of the library has been released and you want to update, you can just run the install command again, but with `@latest` to tell npm to grab the latest release specifically:
```text
npm i @cccode/fxr@latest --omit=dev
```
Note that this will even update to new major releases, so there might be breaking changes. It might be a good idea to write down what your current version is before trying to update if you have some scripts that you want to keep using without updating them to work with the new version. To find out what version of the library you currently have installed, you can use this command:
```text
npm ls @cccode/fxr
```
If an update has broken your scripts or if you just want to go back to an older version of the library, you can install any specific version by putting the version number after `@` at the end of the package name in the install command. For example, this is how you would install version 3.0.0:
```text
npm i @cccode/fxr@3.0.0 --omit=dev
```

<br>

___

<br>

# Troubleshooting
Below are some common problems you might run into and how to deal with them:

### "Warning: To load an ES module, set "type": "module" in the package.json ..."
If you get this warning when trying to run a JS file, you're running it as a CommonJS script instead of an ES module. To fix that, check out [the section about modules](#modules) above.

### "SyntaxError: Cannot use import statement outside a module"
If you get this error when trying to run a JS file, you're running it as a CommonJS script instead of an ES module. To fix that, check out [the section about modules](#modules) above.

### Tools for Native Modules / Python 2 / VS Build Tools / Boxstarter / Chocolatey
If you see a page in the Node installer mentioning this stuff and you don't know whether to tick the checkbox or not, it depends on what you are going to do with Node. If you are only going to use this library and nothing else, feel free to leave the checkbox unticked, the library doesn't require anything from it. If you plan to use other packages from NPM, it might be a good idea to tick it, since some of them might require it for compiling during installation.

### I have Node.js installed already, but I don't know what version it is
To find out what version of Node.js you have installed, run this command:
```
node -v
```
Versions older than v20 are not guaranteed to work with the library.

To update from an older version, just grab the installer from the version you want and run it. It should take care of everything on its own.

### "'npm' is not recognized as an internal or external command, ..."
If you get this error when trying to install the library, you either don't have Node.js installed, or you chose not to install npm when installing Node, or you chose not to add it to the PATH environment variable. To fix it, run the Node.js installer again and make sure npm is set to install and that the "Add to PATH" option is enabled.

Another possible option for why this happens is that you opened the terminal before installing Node and npm, causing it to not know where npm is installed. To fix that, simply close and reopen the terminal.

### "'node' is not recognized as an internal or external command, ..."
If you get this error when trying to run a JS file, you either don't have Node.js installed, or you chose not to add it to the PATH environment variable when installing it. To fix it, install Node and make sure that the "Add to PATH" option is enabled in the installer.

Another possible option for why this happens is that you opened the terminal before installing Node, causing it to not know where Node is installed. To fix that, simply close and reopen the terminal.

### "Invalid package config ..."
If you get this error when trying to install the library or run a JS file, your package.json file has an error in it. It might be missing a comma somewhere, maybe it has a comma where it shouldn't, or maybe it has the wrong kind of quote character or it's missing a quote character or two. To find the issue and fix it, you can use a JSON linter, like https://jsonlint.com/, which should point out where the error is, and maybe tell you exactly what it is.

### I don't know what code to write
If you don't know JS, there are plenty of free online courses out there to learn the basics, but you can also learn enough to use this library from [the examples in this repo](/examples/) and [the documentation site](https://fxr-docs.pages.dev/).

### I ran the command to install the library, but node_modules didn't appear
If the node_modules folder and the two package JSON files didn't show up when running the command, it either errored or it was run from a different folder.

To check if it errored, just check the terminal where you ran the command. The error will have more information if it's there.

If it didn't error, the command was probably run from a different folder. In the terminal, you can see what folder it's running from in front of where you enter commands. For example, it might say something like
```
C:\Projects\FXR_Test> {your command goes here}
```
If the path there doesn't match the path to your folder, the command will be run from a different folder, and it would have installed the library there instead. To fix this, you can go to the folder at that path and remove the node_modules folder, package.json file, and package-lock.json file if the folder isn't part of a different Node package. You can then go back to the folder where you wanted to install the library and follow [the section about the project folder](#project-folder) again carefully.
