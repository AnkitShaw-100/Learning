// Check if a number is a palindrome.

#include <iostream>
using namespace std;

int main() {
    int num, original, rev = 0;
    cout << "Enter a number: ";
    cin >> num;
    original = num;

    while(num != 0) {
        rev = rev * 10 + num % 10;
        num /= 10;
    }

    if (original == rev)
        cout << "It's a palindrome." << endl;
    else
        cout << "Not a palindrome." << endl;

    return 0;
}
