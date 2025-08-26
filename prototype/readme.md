🌀 Prototype Pattern in TypeScript

This project demonstrates the Prototype Design Pattern using TypeScript with a real-world inspired example — an Employee Onboarding System where new employees are created by cloning a base template.

📌 Concept

The Prototype Pattern is a creational design pattern that allows you to clone existing objects instead of creating them from scratch.
This is especially useful when object creation is costly or repetitive.

This pattern is widely used in:

Game development (cloning characters, enemies, items)

UI components (copying buttons, forms, cards)

Database records (cloning template entries)

Employee onboarding systems

🚀 Use Case

A company has a base Software Engineer profile with predefined department and salary.
When new employees are hired, instead of creating a new profile from scratch, the company clones the template and just changes the name (and maybe salary).

🧱 Structure

Prototype interface defines a clone method.

Employee implements Prototype and provides cloning logic.

The system uses clone() to generate new employees with small modifications.

📄 Example Output
Name: Template, Role: Software Engineer, Dept: IT, Salary: 60000
Name: Abhinav, Role: Software Engineer, Dept: IT, Salary: 60000
Name: Rohan, Role: Software Engineer, Dept: IT, Salary: 65000


Here:

Template = Base object

Abhinav & Rohan = Cloned employees with small modifications