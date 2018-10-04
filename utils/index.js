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

  result.map((store) => {
    let storeSubject = store.subject;
    let list = [];
    let subjectList = []

    if (isNumber(scores[storeSubject])) {
      for (var i = 0; i < store.students.length; i++) {
        list.push(store.students[i].name)
      }

      let tempScore = scores[storeSubject];
      if (list.includes(name)) {
        //console.log('update Student')
        for (var i = 0; i < store.students.length; i++) {
          if (store.students[i].name == name) {
            store.students[i].score = tempScore;
          }
        }
      } else {
        //console.log('new Student')
        let newStudent = { name, score: tempScore }
        store.students.push(newStudent)

      }
    } else {
      //console.log('newSubject', name, scores)
      let key = Object.keys(scores);
      newSubject = { subject: String(key), students: [{ name, score: scores[String(key)] }] };
      if (subjectList.includes(String(key))) {

      } else {
        subjectList.push(String(key));
        result.push(newSubject);
      }
    }
  })

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

function isNumber(n) {
  return !isNaN(parseFloat(n) && isFinite(n))
}