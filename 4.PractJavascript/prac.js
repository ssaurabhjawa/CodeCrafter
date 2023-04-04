function makeADoctor(fullName='hello Singh'){
    const person = {
        first: '',
        last:'',
        age: 0,
        makeADoctorMethod:`Dr. ${fullName.split(' ')[0]} ${fullName.split(' ')[1]}`
    }
    return person.makeADoctorMethod;
}

const makeADoctor = function(fullName='hello Singh') {
    const person = {
      first: '',
      last: '',
      age: 0,
      makeADoctorMethod: `Dr. ${fullName.split(' ')[0]} ${fullName.split(' ')[1]}`
    };
    return person.makeADoctorMethod;
  };
  
  // Example usage
  console.log(makeADoctor()); // Outputs "Dr. hello Singh"

const names = ['John Smith', 'Jane Doe', 'Alice Johnson'];

names.forEach(function(name) {
  const doctorName = makeADoctor(name);
  console.log(doctorName);
});


