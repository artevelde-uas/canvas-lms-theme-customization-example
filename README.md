# Canvas LMS Theme Customization Example

Example app for building your own Canvas LMS theme customizations.
Quickly add the plug-ins you want and compile with zero configuration needed!

This example app comes with the full stack of currently available plug-ins provided by Artevelde UAC pre-installed.

## Usage

### Step 1: Installing plug-ins in your project

Install the extra plug-ins you want using `Yarn`:

    yarn add @some-org/plugin @some/plugin-with-options

### Step 2: Import the plug-ins into your project's code

Just import your plug-ins in the `./src/index.js` file and add them to the app using `addPlugin()`. Some plug-ins accept an additional options object.

```javascript
import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';

import somePlugin from '@some-org/plugin';
import somePluginWithOptions from '@some/plugin-with-options';
import myPlugin from './plugins/my-plugin';

addPlugin(somePlugin);
addPlugin(somePluginWithOptions, {
    option1: 'foo',
    option2: true
});
addPlugin(myPlugin);

run();
```

### Step 3: Build your project

The Canvas LMS DEV tool provides a default build script to compile your code with zero configuration needed. Just add the plug-ins you need to your project and run the following command:

    yarn canvas-build

This will compile your code into a single Javascript and CSS file in the `./dist/` folder. Upload these files to your Canvas instance's theme and you're good to go!

### Removing plug-ins

Likewise, to remove a plug-in, just run this command:

    yarn remove @some-org/plugin

Then also remove it from your code and recompile.
