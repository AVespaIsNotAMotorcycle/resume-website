const PYCHESS = {
  name: 'PyChess',
  id: 'PyChess',
  desc: 'A CLI program for playing chess, either against another person or the computer.',
  body: `
# PyChess

[View the Github repo](https://github.com/AVespaIsNotAMotorcycle/python-chess)


PyChess is a simple command line interface for playing chess. You can play against another person, taking turns at the same keyboard, or against simple AIs. You can also pit AIs against each other and watch the results. At present, there is only one AI, which makes moves at random, but I intend to expand that list.`,
  image: `![Sreenshot of a game against the AI](${process.env.PUBLIC_URL}/assets/images/pychess-against-ai.png)`,
};

export default PYCHESS;
