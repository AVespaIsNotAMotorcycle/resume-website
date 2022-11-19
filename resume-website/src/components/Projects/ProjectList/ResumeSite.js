const RESUMESITE = {
  name: 'Resume Site',
  id: 'ResumeSite',
  desc: 'This website!',
  body: `
# Resume Site
[View the Github repo](https://github.com/AVespaIsNotAMotorcycle/resume-website)


A single-page static site built with React and served via Github Pages. During development I used Jest for unit testing to ensure that no changes caused errors or warnings. Pushes to Github were managed via a makefile which ran tests first, ensuring that all pushes consisted only of changes which passed all tests. Admittedly, given the simplicity of the site, this was a little overkill, but I wanted to show that I could.


One interesting interaction I observed was between Jest and two markdown parsers (react-markdown and remarkable), in that both cause warnings on unit tests involving markdown. My friend (@mthrndr on Github) had built an incomplete markdown parser for another project, so with his permission I borrowed and expanded it.
`,
};

export default RESUMESITE;
