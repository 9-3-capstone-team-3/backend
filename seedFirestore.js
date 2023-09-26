const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Sample data adapted to Firestore document format
const usersData = [
  {
    username: 'codefusionuser1',
    email: 'user1@gmail.com',
    firstname: 'John',
    lastname: 'Smith',
    password: 'password123',
    last_login: new Date(),
    total_points: 40
  },
  {
    username: 'codefusionuser2',
    email: 'user2@gmail.com',
    firstname: 'Jane',
    lastname: 'Smith',
    password: 'password456',
    last_login: new Date(),
    total_points: 50
  },
  {
    username: 'codefusionuser3',
    email: 'user3@gmail.com',
    firstname: 'Jimmy',
    lastname: 'Smith',
    password: 'password789',
    last_login: new Date(),
    total_points: 60
  },
];

// Add each user as a document in the "users" collection
usersData.forEach(async (userData) => {
  try {
    await db.collection('users').add(userData);
    console.log('User added successfully.');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
});
