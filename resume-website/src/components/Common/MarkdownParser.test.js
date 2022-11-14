import React from 'react';
import markdownParser from './MarkdownParser';

test("returns empty html on empty string", () => {
  const text = '';
  const result = markdownParser(text);
  const innerHTML = { __html: '' };
  const html = <p dangerouslySetInnerHTML={innerHTML} />
  expect(result).toStrictEqual(html);
});
