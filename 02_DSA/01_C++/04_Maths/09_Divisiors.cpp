// Find all divisors of a given number.

#include <iostream>
using namespace std;

void findDivisors(int n) {
    cout << "Divisors of " << n << " are: ";
    for (int i = 1; i <= n; i++) {
        if (n % i == 0)
            cout << i << " ";
    }
    cout << endl;
}

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    findDivisors(num);
    return 0;
}
