/*
Declare an object cohort that has the following properties:

a string name (e.g 'May2022')
a number id (e.g 1234)
an array of student names
Declare a function that accepts that object as argument and print a message with the following structure:

<COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort
</NUMBER_OF_STUDENTS>
*/

const cohort = {
    name: "May2022",
    id: 1234,
    students: ['Christie', 'Mergim', 'Eoin']
  }
  
  const formatter = (cohort) => {
  
    console.log(`${cohort.name} - ${cohort.id} - ${cohort.students.join(", ")}`)
  }
  
  formatter(cohort)