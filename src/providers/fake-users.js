import faker from 'faker';
import _ from 'lodash';

let users_data = [];
for (var i = 0; i < 100; i++) {
    let activities = [];
    for(var j = 0; j < Math.round(Math.random() * 20 + 10, 0); j++){
        let activity = {
            time: faker.date.between('06/01/2016', '12/01/2016'),
            status: "viewed",
            price: Math.round(Math.random() * 500 + 2000, 2)
        }
        activities.push(activity);
    }

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
            date: faker.date.between('01/01/2015', '01/12/2016'),
            price: Math.round(Math.random() * 500 + 2000, 2)
        },
        activities
    };
    users_data.push(user_data);
}

// Array.prototype.flatMap = function(lambda) { 
//     return Array.prototype.concat.apply([], this.map(lambda)); 
// };
// 
// let graph_data = users_data.map(
//     x => x.activities.map((y) => [y.time, y.status])
// ).flatMap(x => x);

let graph_data = users_data.reduce(
    (a,b) => b.activities.map(y => [y.time, y.status]).concat(a)
, []).sort((x,y) => x[0].getTime() - y[0].getTime());

console.log(graph_data)

export { users_data, graph_data };