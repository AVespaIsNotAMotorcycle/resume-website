const LDA = {
  name: 'LDA',
  id: 'LDA',
  desc: 'A web app that provides insight into New York State and New York City legislative data.',
  body: `
# Legislative Data Analytics
[csci499lda.com](http://www.csci499lda.com)

[View the Github repo](https://github.com/AVespaIsNotAMotorcycle/LegislativeDataAnalytics)


LDA ("Legislative Data Analytics") was my capstone project for my Computer Science major at Hunter College. I worked with a team of other students to build a site which would provide information on US State and City politics. The frontend was built in React while the backend was built with NodeJS using the Express framework to handle routing. Our data was retrieved from the APIs for the New York State Senate and Assembly and the New York City Council, and stored in a PostgreSQL database hosted with AWS. Both the frontend and backend are hosted on a DigitalOcean droplet using nginx.


Users can learn about the structure of NYS and NYC government, find their local representatives based on a given address, and view graphs visualizing the bills put forward by various representatives and committees in each of the three bodies that we provide data on. Additionally, graphs depicting the activity over time of various city council representatives and the similarity in voting patterns between council representatives are available.

![Screenshot of the City Council voting activity graph](${process.env.PUBLIC_URL}/assets/images/lda-activeness.png),
  `,
};

export default LDA;
