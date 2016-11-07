module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'This is an old message',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'This is an older message',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 18, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
];