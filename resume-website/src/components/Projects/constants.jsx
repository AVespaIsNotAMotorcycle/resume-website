import GROOVY from './ProjectList/Groovy';
import LDA from './ProjectList/LDA';
import RESUMESITE from './ProjectList/ResumeSite';
import PYCHESS from './ProjectList/PyChess';
import NOVIIMD from './ProjectList/NoviiMD';

const PROJECT_LIST = {
  Groovy: { ...GROOVY },
  LDA: { ...LDA },
  ResumeSite: { ...RESUMESITE },
  PyChess: { ...PYCHESS },
  NoviiMD: { ...NOVIIMD },
};

export default PROJECT_LIST;
