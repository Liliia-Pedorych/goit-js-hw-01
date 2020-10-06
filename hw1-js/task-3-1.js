let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
// Write code under this line
// console.log(keys);
for (const key of keys) {
  //   console.log(key);
  message += `${key}: ${user[key]}\n`;
}

// const entries = Object.entries(user);
// console.log(entries);

// for (const entry of entries) {
//   //   console.log(value);

//   const key = entry[0];
//   const value = entry[1];
//   message += `${key}: ${value}\n`;
// }
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
