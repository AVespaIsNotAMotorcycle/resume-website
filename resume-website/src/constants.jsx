// URLS
const BASE_URL = '/resume-website';
const HOME_URL = BASE_URL;
const PROJECTS_URL = BASE_URL.concat('/Projects');
const PROJECT_ID_URL = BASE_URL.concat('/Projects/:projectID');
const CONTACT_URL = BASE_URL.concat('/Contact');

const PAGES = [
  { link: HOME_URL, text: 'Home' },
  { link: PROJECTS_URL, text: 'Projects' },
  { link: CONTACT_URL, text: 'Contact' },
];

export {
  BASE_URL,
  HOME_URL,
  PROJECTS_URL,
  PROJECT_ID_URL,
  CONTACT_URL,
  PAGES,
};
