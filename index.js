// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
    const userFirstNames = [];
    for (let user of arr) 
    const { firstName } = user;
    userFirstNames.push(firstName);
  };
  
  getFirstNames(usersArray);
  // expected output:
  // [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]
  
  // ***************************************************************************
  // Iteration 2 - `for...of` loop and ES6 string literals `${}`
  // ***************************************************************************
  
  const getFullNames = arr => {
    const userFullName = [];
    for (let user of arr) {
        const { firstName, lastName } = user;
        const fullName = `${firstName} ${lastName}`;
        userFullName.push(fullName);
    }
    return userFullName;
  };
  
  getFullNames(usersArray);
  // expected output:
  // [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
  //   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]
  
  // ***************************************************************************
  // Iteration 3 - ES6 destructuring , for of loop, object literal
  // ***************************************************************************
  
  const getUsersCreditDetails = arr => {
    userCreditDetails = [];
    for (let user of arr) {
        const {firstName, lastName, balance } = user;
        const userDetails = { firstName, lastName, balance };
        userCreditDetails.push(userDetails);
    }
    return userCreditDetails;
  };
  
  getUsersCreditDetails(usersArray);
  // expected output:
  // [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
  // { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
  // { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
  // { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
  // { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
  // { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
  // { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]
  
  // ***************************************************************************
  // Iteration 4 - practice `.filter()` method and how to return two elements
  // ***************************************************************************
  
  const genderView = users => {
    const maleUsers = [];
    const femaleUsers = [];
    const { firstName, lastName, gender } = user;

    users.filter(user => {
        if(gender === 'male') {
            maleUsers.push(`${firstName} ${lastName}`)
        } else {
            femaleUsers.push(`${firstName} ${lastName}`)
        }
    }); return maleUsers, femaleUsers;
  };
  
  genderView(usersArray);
  // expected output:
  // {
  //    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
  //    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
  // }
  
  // ***************************************************************************
  // Bonus - Iteration 5
  // ***************************************************************************
  
  const data = genderView(usersArray);
  
  const genderCount = data => {
    return `male: ${data.maleUsers.length}; female: ${data.femaleUsers.length}`;
  };
  
  genderCount(data);
  // expected output:
  // Female: 4
  // Male: 3
  
  // ***************************************************************************
  // Bonus - Iteration 6
  // ***************************************************************************
  
  const promo20 = (users) => {
    return users
      .filter((user) => {
        const { balance } = user;
        const cleaned = +balance.substring(1).replace(",", "");
        // parseInt or Number() ===> turns string to a number type
  
        if (cleaned > 20000) return user;
      })
      .map((user) => {
        const { firstName, balance } = user;
        console.log(
          `Dear ${firstName} since your balance is ${balance}, you are eligible to apply for this awesome credit card.`
        );
      });
  };
  
  // expected output:
  // Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
  // Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.
  
  // ***************************************************************************
  // Bonus - Iteration 7
  // ***************************************************************************
  
  const addActive = (array) => {
    return array.map((user) => {
      return {
        ...user,
        isActive: true
      };
    });
  };
  
  addActive(usersArray);
  // expected output:
  // [
  //    { firstName: 'Kirby',
  //      lastName: 'Doyle',
  //      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
  //      isActive: true,
  //      balance: '$3,570.06',
  //      gender: 'male'
  //    },
  //    {
  //      // ...
  //    }
  // ]