#include <iostream>
#include <string>
using namespace std;

// Prototype interface
class Prototype {
public:
    virtual Prototype* clone() = 0;
    virtual void describe() = 0;
    virtual ~Prototype() {}
};

// Employee class
class Employee : public Prototype {
    string name;
    string role;
    string department;
    int salary;

public:
    Employee(string name, string role, string department, int salary)
        : name(name), role(role), department(department), salary(salary) {}

    Prototype* clone() override {
        return new Employee(*this);
    }

    void setName(string newName) { name = newName; }
    void setSalary(int newSalary) { salary = newSalary; }

    void describe() override {
        cout << "Name: " << name << ", Role: " << role
             << ", Dept: " << department << ", Salary: " << salary << endl;
    }
};

// Client code
int main() {
    // Base template employee
    Employee* baseDev = new Employee("Template", "Software Engineer", "IT", 60000);

    // Hiring new employees by cloning
    Employee* emp1 = dynamic_cast<Employee*>(baseDev->clone());
    emp1->setName("Abhinav");

    Employee* emp2 = dynamic_cast<Employee*>(baseDev->clone());
    emp2->setName("Rohan");
    emp2->setSalary(65000);

    baseDev->describe();
    emp1->describe();
    emp2->describe();

    delete baseDev;
    delete emp1;
    delete emp2;
    return 0;
}
