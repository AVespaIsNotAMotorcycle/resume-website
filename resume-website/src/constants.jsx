// URLS
const BASE_URL = '';
const HOME_URL = `${BASE_URL}/`;
const PROJECTS_URL = BASE_URL.concat('/Projects');
const PROJECT_ID_URL = BASE_URL.concat('/Projects/:projectID');
const CONTACT_URL = BASE_URL.concat('/Contact/test');

const PAGES = [
  { link: HOME_URL, footerText: 'Projects', footerLink: PROJECTS_URL },
  { link: PROJECTS_URL, headerText: 'Home', headerLink: HOME_URL },
  // { link: CONTACT_URL, text: 'Contact' },
];

const screenWidth = document.documentElement.clientWidth || window.innerWidth;
const MOBILE_WIDTH = 767;
const MOBILE = screenWidth < MOBILE_WIDTH;

export {
  BASE_URL,
  HOME_URL,
  PROJECTS_URL,
  PROJECT_ID_URL,
  CONTACT_URL,
  PAGES,
  MOBILE,
};
