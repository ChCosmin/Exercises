import faker from 'faker';

function generateFakeCard() {  
  const month = faker.date.month().substring(0,3);
  const day = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
  const date = month + ' ' + day;
  const iconText = faker.internet.userName().toUpperCase().substring(0,3);
  
  const state = {    
      cardHeader: {      
        avatarImg: faker.image.avatar(),
        username: faker.internet.userName(),
        text: faker.company.catchPhrase(),
        date: date,
        author: faker.lorem.word(),
      },
      cardBanner: {
        bannerIconText: iconText,
        bannerIconTextColor: faker.internet.color(),
        bannerIconColor: faker.internet.color(),

        text: faker.lorem.sentence(),
        textColor: faker.internet.color(),
        backgroundColor: faker.internet.color(),

        author: faker.name.findName(),
        authorColor: faker.internet.color(),
        authorBackground: faker.internet.color(),
        authorImg: faker.internet.avatar(),

        title: faker.company.catchPhrase(),
        summary: faker.lorem.sentences(),
        link: faker.internet.url()
      },
      cardButtons: {
        comments: faker.random.number(),
        retweet: faker.random.number(),
        likes: faker.random.number(),

        commentsClicked: faker.random.boolean(),
        retweetClicked: faker.random.boolean(),
        likesClicked: faker.random.boolean()
      }
  }
  return state;
};

export { generateFakeCard }