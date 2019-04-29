console.log("Start using async await");
console.log("Try some of the examples");
setTimeout(function() {
  console.log("Finish");
}, 3000); // will appear after 2 seconds

const favoriteClub = callback => {
  const club = "Liverpool FC";
  callback(club);
};

favoriteClub(club => {
  console.log(`My favorite football club is ${club}`);
});

const userName = name => {
  console.log(`Username: ${name}`);
};

const inputName = callback => {
  const name = "Yevgeny";
  callback(name);
};
inputName(userName);

const studentName = student => console.log(`Student name: ${student}`);
const alertStudentName = student => alert(`Student name: ${student}`);

const insertName = (student, callback) => callback(student);

insertName("Rohmad", studentName);
insertName("Yevgeny", alertStudentName);
insertName("Darlyn", studentName);

const tryPromise = new Promise((resolve, reject) => {
  resolve("Fulfilled");
  reject("Rejected");
});

tryPromise
  .then(firstResult => {
    return firstResult + "!";
  })
  .then(secondResult => {
    console.log(secondResult + "?");
  })
  .catch(error => {
    console.error(error);
  });

const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Fulfilled! your access is granted");
  } else {
    reject(new Error("Rejected! Access rejected"));
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

const situation = false;

const promise = new Promise((resolve, reject) => {
  if (situation) {
    resolve("Fulfilled! Your access is granted");
  } else {
    reject(new Error("Rejected! Access rejected"));
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

const myAsyncFunction = async () => {
  return "Granted";
};
myAsyncFunction().then(result => console.log(result));

const asyncFunction = async () => {
  throw "Rejected";
};
asyncFunction().catch(error => console.error(error));
