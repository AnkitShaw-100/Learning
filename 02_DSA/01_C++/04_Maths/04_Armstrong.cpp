// Check if a number is an Armstrong number.

#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int num, original, sum = 0, digits = 0;
    cout << "Enter a number: ";
    cin >> num;
    original = num;

    int temp = num;
    while (temp > 0) {
        digits++;
        temp /= 10;
    }

    temp = num;
    while (temp > 0) {
        int digit = temp % 10;
        sum += pow(digit, digits);
        temp /= 10;
    }

    if (sum == original)
        cout << "It's an Armstrong number." << endl;
    else
        cout << "Not an Armstrong number." << endl;

    return 0;
}
