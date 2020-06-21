const editor = document.getElementById('editor');

const content = document.createElement('div');
content.contentEditable = 'true';
content.className = 'content';

const bold = document.createElement('button');
bold.innerHTML = '<b>b</b>';
bold.onclick = e => document.execCommand('bold');

editor.appendChild(bold);
editor.appendChild(content);
