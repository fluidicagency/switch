# Switch

[![Travis build status](http://img.shields.io/travis/fluidicagency/switch.svg?style=flat)](https://travis-ci.org/fluidicagency/switch)
[![Code Climate](https://codeclimate.com/github/fluidicagency/switch/badges/gpa.svg)](https://codeclimate.com/github/fluidicagency/switch)
[![Test Coverage](https://codeclimate.com/github/fluidicagency/switch/badges/coverage.svg)](https://codeclimate.com/github/fluidicagency/switch)
[![Dependency Status](https://david-dm.org/fluidicagency/switch.svg)](https://david-dm.org/fluidicagency/switch)
[![devDependency Status](https://david-dm.org/fluidicagency/switch/dev-status.svg)](https://david-dm.org/fluidicagency/switch#info=devDependencies)

## Background
Welcome to the Switch project from [fluidic](https://fluidic.agency) which provides easy dynamic text insertion functionality to any webpage. Use this tiny javascript module to dynamically replace, show and switch text on html pages and change form values using URL location query strings. **Boom Shakalaka!**

We wanted to bring the functionality of dynamic keyword replacement which is available on page builder SAAS platforms like Unbounce to our own web dev projects. After finding no good solutions out there we built this tool in-house. At the agency we use it to develop landing pages that relate specifically to EDM or PPC ad segments, allowing us to deliver niche copy that precisely matches our client&rsquo;s taget audience.

But that&rsquo;s us&hellip; do with it what you will and give us a shout on Twitter [@fluidicagency](https://twitter.com/fluidicagency), or throw some stars like a ninja &ndash; we&rsquo;d love to know what you have created!

## Installation

~~You&rsquo;ll need all the usual dependencies installed first~~&hellip; hang on &ndash; actually you don&rsquo;t! There are zero dependencies, no jQuery, no nothing! Woop!!

Simply download switch.min.js from the dist folder and move in to your project, then add to your code:

~~~~
const fluidicSwitch = require('./switch.js');
~~~~

or

~~~~
import fluidicSwitch from './switch.js';
~~~~

Once that is one you can kick things off with:

~~~~
fluidicSwitch.init();
~~~~

Of course you&rsquo;ll need to ensure the path matches the location that you placed the js file.

You should also include switch.css in your project.

## Usage

The module offers the ability to replace short pieces of text, entire html elements or show/hide html elements. Form values may also be dynamically inserted using URL query strings.

### Switch Content

Use the class .switch-content and attribute 'data-switch-key' to specify the query string that will be used to provide the replacement. For example:

~~~~
<p class="switch-content" data-switch-key="company">Small Inc.</p>
~~~~

Appending the query string `index.html?company=Biggus%20Incorporated` will replace the contents of the p tag with "Biggus Incorporated". Sweet.

### Switch Audience

Useful for more sweeping and general changes based on an audience or grouping. Similar to the above but the text to alter is defined in the html elements data attribute, whilst the variable is defined in the query string. For example:

~~~~
<btn class="switch-audience" data-audience-consumer="CLAIM YOUR DISCOUNT">GET A FREE WIDGET</btn>
~~~~

In this example the text in the data attribute replaces that of the html element when the following query string is employed: `index.html?audience=consumer`

### Switch Show/Hide

Use this option if you have larger portions of text or html that you want to show or hide based on a audience or group.

~~~~
<p class="switch-show" data-audience-audience="professional">Take a vacation, you deserve it.</p>
~~~~

By now you can probably guess, a query string such as `index.html?audience=professional` will show the p element, otherwise it's hidden by default.

Applying the switch-hide class works in the same (but opposing) way.

Note that all elements with the switch-show and switch-hide class applied are initially hidden (via switch.css) and the code logic then decides whether to make the element visible based on the audience settings. This may seem unintuitive, but it actually avoids any temporary visibility of elements that should be hidden whilst the plugin loads.

### Form Fields

Quite simply, any query parameter with a name that matches the id of a form field will automaticlly be inserted into that field. This is super handy to make long forms faster for users to complete when they are arriving from a known destination (email for exmaple), where you can embed known data into the incoming link.

### Options

Currently there is only one option, passed in to init, which is the default audience. For example, in keeping with the examples above the following would set the default audience as professional (without having to define it in the query parameters):

~~~~
fluidicSwitch.init('professional');
~~~~

## Development

Switch has been build using the [generator-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate) which exposes the following npm scripts for use in development.

### npm Scripts

- `npm test` - Lint the library and tests, then run the unit tests
- `npm run lint` - Lint the source and unit tests
- `npm run watch` - Continuously run the unit tests as you make changes to the source
   and test files themselves
- `npm run test-browser` - Build the library for use with the browser spec runner.
  Changes to the source will cause the runner to automatically refresh.
- `npm run build` - Lint then build the library
- `npm run coverage` - Generate a coverage report

## Credits, Kudos &amp; Props
* The Usual Suspects &ndash; Google, Stack Overflow *et. al.*
* Built from the [generator-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate)
