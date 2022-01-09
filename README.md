# Simple Accordion Library
Tiny accordion Javascript Library

## Features
- Simple and tiny
- Pure TypeScript
- Customize identifier

## Installation
Run `npm run build:first` commands. Then the compiled and minified code is deployed to the `dist` folder.
And for incremental build prepared:
```
npm run watch
```

## Usage
As default, the `control-id` is the identifier attribute which you would like to expand or fold, and the `control-visible` attribute which is boolean type is for the state identifier.

Noted that the element which `control-visible` sets must be the block element. Therefore you should set the `display: block;` style if you need to use inline elements.

The following is the example:
```html
<script src="./accordion.min.js"></script>
<script>
    accordion.Activate();
</script>
<div>
    <div control-id="target-id-name">Toggle Element</div>
    <div id="target-id-name">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
```

## License
Under MIT License
