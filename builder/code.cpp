#include <iostream>
#include <string>
using namespace std;

// Product class
class Burger {
    string size;
    bool cheese;
    bool pepperoni;
    bool lettuce;

public:
    Burger(string size, bool cheese, bool pepperoni, bool lettuce)
        : size(size), cheese(cheese), pepperoni(pepperoni), lettuce(lettuce) {}

    void describe() {
        cout << "Burger Size: " << size
             << ", Cheese: " << (cheese ? "Yes" : "No")
             << ", Pepperoni: " << (pepperoni ? "Yes" : "No")
             << ", Lettuce: " << (lettuce ? "Yes" : "No") << endl;
    }
};

// Builder class
class BurgerBuilder {
    string size;
    bool cheese = false;
    bool pepperoni = false;
    bool lettuce = false;

public:
    BurgerBuilder(string size) : size(size) {}

    BurgerBuilder& addCheese() {
        cheese = true;
        return *this;
    }

    BurgerBuilder& addPepperoni() {
        pepperoni = true;
        return *this;
    }

    BurgerBuilder& addLettuce() {
        lettuce = true;
        return *this;
    }

    Burger build() {
        return Burger(size, cheese, pepperoni, lettuce);
    }
};

// Client code
int main() {
    Burger burger = BurgerBuilder("Large")
                        .addCheese()
                        .addPepperoni()
                        .build();
    burger.describe();
    return 0;
}
