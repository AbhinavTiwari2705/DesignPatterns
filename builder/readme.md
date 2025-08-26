🏗️ Builder Pattern in TypeScript

This project demonstrates the Builder Design Pattern using TypeScript with a real-world inspired example — a Burger Builder System where customers can build burgers step by step with custom ingredients.

📌 Concept

The Builder Pattern is a creational design pattern that allows constructing complex objects step by step.
Instead of passing a long list of parameters to a constructor, the builder provides a fluent interface to add features incrementally.

This pattern is widely used in:

UI frameworks (building complex components with options)

Document generation (step by step construction)

Game dev (configuring characters/weapons)

Query builders in databases (e.g., Sequelize, Prisma)

🚀 Use Case

A Burger Shop allows customers to build burgers:

Choose a size (Small, Medium, Large)

Add optional ingredients like cheese, pepperoni, and lettuce

The builder ensures that the burger is constructed step by step in a readable and flexible way.

🧱 Structure

Burger is the Product with properties like size, cheese, pepperoni, lettuce.

BurgerBuilder is the Builder that allows adding ingredients with chainable methods.

The client code uses BurgerBuilder to construct burgers flexibly.

📄 Example Output
Burger Size: Large, Cheese: true, Pepperoni: true, Lettuce: false


Here:

A Large burger was built.

It contains cheese and pepperoni.

It does not contain lettuce.