// Find the sum of digits of a number.

#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    cout << "Enter a number: ";
    cin >> num;

    while(num != 0) {
        sum += num % 10;  // add last digit
        num /= 10;        // remove last digit
    }

    cout << "Sum of digits: " << sum << endl;
    return 0;
}
