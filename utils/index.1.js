const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
  // code here
  let result = null;
  result = store;
  let newSubject;
  //let studentName = name;

  //let studentSubject = Object.keys(scores);
  result.map((store) => {
    let storeSubject = store.subject;
    let list = [];
    let subjectList = []
    for (var i = 0; i < result.length; i++) {
      //list.push(store.students[i].name)
      if(subjectList.includes(storeSubject)){
        
      }else{
        subjectList.push(result[i].subject)
      }
    }

    //console.log(scores[storeSubject])
    if (isNumber(scores[storeSubject])) {
      for (var i = 0; i < store.students.length; i++) {
        list.push(store.students[i].name)
      }

      let tempScore = scores[storeSubject];
      if (list.includes(name)) {
        console.log('update S')
        for (var i = 0; i < store.students.length; i++) {
          if (store.students[i].name == name) {
            store.students[i].score = tempScore;
          }
        }
      } else {
        console.log('new S')
        let newStudent = { name, score: tempScore }
        store.students.push(newStudent)
        console.log(store.students)
      }

    } else {
      console.log('newSubject', name, scores)
      let key = Object.keys(scores);
      newSubject = { subject: String(key), students: [{ name, score: scores[String(key)] }] };
      //console.log(subjectList,String(key))
      if(subjectList.includes(String(key))){
        console.log(subjectList)
      }else{
        subjectList.push(String(key));
        result.push(newSubject);
      }
      
      
      
      /*
      let subjectList = [];
      for (var i = 0; i < result.length; i++) {
        subjectList.push(result[i].subject)
        console.log(result[i].subject)
      }
      console.log(subjectList)
      console.log(String(key))
      if (subjectList.includes(String(key))) {
        console.log('idle')
      } else {
        console.log('first')
        result.push(newSubject)
      }
      */

    }
  })


  let ss = [
    {
      subject: 'math',
      students: [
        { name: 'luffy', score: 10 },
        { name: 'zoro', score: 15 },
        { name: 'sanji', score: 22 }
      ]
    },
    {
      subject: 'science',
      students: [
        { name: 'luffy', score: 15 },
        { name: 'zoro', score: 25 },
        { name: 'sanji', score: 33 }
      ]
    }
  ];
  //console.log(ss)
  console.log(result)

  console.log('====================')
  return result

};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
  // code here

};

/**
 * @params {Object} store
 */
exports.transformData = store => {
  // code here

};

function isNumber(n){
  return !isNaN(parseFloat(n) && isFinite(n))
}