import faker from 'faker';
import _ from 'lodash';

let users_data = [];
for (var i = 0; i < 100; i++) {
    let user_data = {
        username: faker.name.findName(),
        avatar: faker.image.avatar(),
        age: Math.round(Math.random() * 80 + 10, 0),
        gender: _.sample(['male', 'female']),
        location: [faker.address.latitude(), faker.address.longitude()],
        city: faker.address.city(),
        userid: faker.random.uuid(),
        last_activity: {
            status: _.sample(['bought', 'viewed', 'interested', 'commented']),
            date: faker.date.between('01/01/1989', '01/12/2016'),
            price: Math.round(Math.random() * 500 + 2000, 2)
        }
    };
    users_data.push(user_data);
}

export { users_data };