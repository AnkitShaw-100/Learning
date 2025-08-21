// Reverse a given number.

#include <iostream>
using namespace std;

int main() {
    int num, rev = 0;
    cout << "Enter a number: ";
    cin >> num;

    while(num != 0) {
        rev = rev * 10 + num % 10;  // shift and add last digit
        num /= 10;                  // remove last digit
    }

    cout << "Reversed number: " << rev << endl;
    return 0;
}
