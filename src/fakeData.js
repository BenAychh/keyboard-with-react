import * as faker from 'faker';

function generateVideo() {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
  }
}

function generateVideoArray() {
  return [...Array(faker.random.number({ min: 5, max: 15 }))].map(generateVideo);
}

function generate2dVideoArray() {
  return [...Array(faker.random.number({ min: 2, max: 5 }))].map(generateVideoArray);
}

export default generate2dVideoArray();