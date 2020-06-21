/*
TODO:
1. Make basic layout for the web page
2. add features in this order:
    -bold
    -italics
    -underline
    -strikethrough
    -image
    -ordered list
    -unordered list
    -heading1 - heading6
 */

// Class names of global elements in the text editor. For styling purposes.
const CLASSNAMES = {
    contentBox: 'contentBox',
    actionBar: 'actionBar'
};
// All available executable commands under document.execCommand()
const COMMANDS = {
    bold: 'bold'
};
// All available features to the text editor's action bar
const ACTIONS = {
    bold: {
        placeholder: '<b>b</b>',
        className: 'buttonBold',
        handler: e => document.execCommand(COMMANDS.bold)
    }
};

function init(entryElement) {
    // content box to show edited text
    const contentBox = document.createElement('div');
    contentBox.contentEditable = 'true';
    contentBox.className = CLASSNAMES.contentBox;

    // create action bar
    const actionBar = document.createElement('div');
    actionBar.className = CLASSNAMES.actionBar;
    for (let key in ACTIONS) {
        const feature = ACTIONS[key];

        const btn = document.createElement('button');
        btn.className = feature.className;
        btn.innerHTML = feature.placeholder;
        btn.onclick = feature.handler;

        actionBar.appendChild(btn);
    }

    entryElement.appendChild(actionBar);
    entryElement.appendChild(contentBox);
}

init(document.getElementById('editor'));
