# @dh-scripts/run

[Readme in Czech (Readme v Češtině)](https://github.com/hezky/dh-scripts-run/blob/master/doc/README-czech.md)

Devstack basic set of development tools.

## Detail

### script build
Compile the babel code into ecmascript above the directory "src/js/". The compiled code is moved to the directory "lib/js/".

### script clean
Delete the directories "div/", "lib/".

### script devel
Run the example.

### script eslint
Run static code analysis with eslint over the directories "src/js/", "test/".

### script help
Help for the application 'dh-run'.

### script prepublishOnly
Lifecycle script prepublishOnly. Runs only with the "npm publish" command. Executing the script before the "npm publish" itself is run The current script runs the "clean" and "build" scripts.

### script test
Run tests over the directory "src/js/".

### script version
The current version of the application 'dh-run'.

## Usage

In your project install the package **@dh-scripts/run**.
In the project directory, run the command:
``` javascript
$ npm install --save @dh-scripts/run
```

Add to the configuration file ** package.json **:
``` javascript
{
  ...
  "scripts": {
    "build": "dh-run build",
    "clean": "dh-run clean",
    "eslint": "dh-run eslint",
    "prepublishOnly": "dh-run prepublishOnly",
    "test": "dh-run test"
  },
  ...
}
```

Run with command **npm run [script]**.

## License
[MIT](https://choosealicense.com/licenses/mit/)
