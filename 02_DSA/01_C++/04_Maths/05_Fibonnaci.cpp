// Generate Fibonacci numbers up to a given limit.

#include <iostream>
using namespace std;

void generateFibonacci(int limit) {
    int a = 0, b = 1;
    cout << "Fibonacci series up to " << limit << ": ";
    while (a <= limit) {
        cout << a << " ";
        int next = a + b;
        a = b;
        b = next;
    }
    cout << endl;
}

int main() {
    int limit;
    cout << "Enter the limit: ";
    cin >> limit;
    generateFibonacci(limit);
    return 0;
}
