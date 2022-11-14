import React from 'react';

export default function markdownParser(text) {
  const newText = text;
  const toHTML = newText
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>') // h6 tag
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>') // h5 tag
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>') // h4 tag
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
    .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
    .replace(/^- (.*$)/gim, `<li key=${'test'}>$1</li>`) // unordered list item
    .trim();
  const toComponent = <p dangerouslySetInnerHTML={{ __html: toHTML }} />; // eslint-disable-line
  return toComponent;
}
