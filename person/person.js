class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setAge(newAge) {
      this.age = newAge;
    }
  
    setEmail(newEmail) {
      this.email = newEmail;
    }
  

  }
  
  
  let person1 = new Person("Sreeram", "K", 23, "sreeramuidesigner.com");
  console.log(person1.getFullName());
  console.log(person1.getAge()); 
  console.log(person1.getEmail());
  
  person1.setAge(35);
  console.log(person1.getAge()); 
  
  person1.setEmail("johnsreeramuidesigner.com");
  console.log(person1.getEmail()); 
  