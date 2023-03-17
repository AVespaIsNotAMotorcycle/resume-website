const GROOVY = {
  name: 'Groovy',
  id: 'Groovy',
  desc: 'A web app that recommends lesser-known Spotify artists based on listening history.',
  body: `
# Groovy
[groovy.samuelmebersole.com](http://groovy.samuelmebersole.com)

[View the Github repo](https://github.com/AVespaIsNotAMotorcycle/winter-2021-codefest-submissions-groovy)


Groovy is a web app that recommends lesser-known Spotify artists based on listening history. It was built as part of Hunter CodeFest 2021, a month-long hackathon hosted at Hunter, and is built around the Spotify API. The app was written in NodeJS using Express and AJAX for networking, and is hosted on a DigitalOcean droplet.


Upon reaching the site, the user is prompted is prompted with a button to login via their Spotify account. Once they login, a playlist is generated for them. The playlist is both saved to their Spotify account and embeded in the website, so they can easily listen in the moment or later. The app ensures that it doesn't clutter the user's Spotify library by checking whether they already have a playlist named Groovy and if so, replacing it rather than creating a new one.`,
  image: `![Screenshot of Groovy post-login](${process.env.PUBLIC_URL}/assets/images/groovy-playlist.png)`,
  tags: [
    'Node.js',
    'Express.js',
    'Spotify API',
    'OAuth',
    'DigitalOcean',
  ],
};

export default GROOVY;
