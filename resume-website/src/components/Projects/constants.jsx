import GROOVY from './ProjectList/Groovy';
import LDA from './ProjectList/LDA';
import RESUMESITE from './ProjectList/ResumeSite';
import PYCHESS from './ProjectList/PyChess';

const PROJECT_LIST = {
  Groovy: { ...GROOVY },
  LDA: { ...LDA },
  ResumeSite: { ...RESUMESITE },
  PyChess: { ...PYCHESS },
};

export default PROJECT_LIST;
