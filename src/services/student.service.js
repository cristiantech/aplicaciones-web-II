const {faker} = require('@faker-js/faker');
class Student{

  constructor(){
    this.student = [];
    this.generate();
  }

  generate(){
    for (let i = 0; i < 100; i++) {
      this.student.push(
        {
          student_id: i + 1,
          firstName: faker.person.firstName(),
          Lastname: faker.person.lastName(),
          mail: faker.person.prefix()
        }
      );
    }
  }

  find(){
    return this.student;
  }

  findOne(id){
    return this.student.find(st => st.student_id == id);
  }

  created(data){

  }

  update(id, data){

  }

  deleted(id) {

  }


}


module.exports = Student;