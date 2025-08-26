// Prototype interface
interface Prototype {
  clone(): Prototype;
}

// Employee class
class Employee implements Prototype {
  name: string;
  role: string;
  department: string;
  salary: number;

  constructor(name: string, role: string, department: string, salary: number) {
    this.name = name;
    this.role = role;
    this.department = department;
    this.salary = salary;
  }

  clone(): Employee {
    return new Employee(this.name, this.role, this.department, this.salary);
  }

  describe() {
    console.log(
      `Name: ${this.name}, Role: ${this.role}, Dept: ${this.department}, Salary: ${this.salary}`
    );
  }
}

// Example usage
const baseDev = new Employee("Template", "Software Engineer", "IT", 60000);

// Hiring new employees by cloning
const emp1 = baseDev.clone();
emp1.name = "Abhinav";

const emp2 = baseDev.clone();
emp2.name = "Rohan";
emp2.salary = 65000; // salary tweak

baseDev.describe(); // Name: Template, Role: Software Engineer, Dept: IT, Salary: 60000
emp1.describe();    // Name: Abhinav, Role: Software Engineer, Dept: IT, Salary: 60000
emp2.describe();    // Name: Rohan, Role: Software Engineer, Dept: IT, Salary: 65000
