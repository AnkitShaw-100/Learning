#include <iostream>
using namespace std;

void insertAtPosition(int arr[], int &n, int x, int value) {
    if (x < 0 || x > n) {
        cout << "Invalid position" << endl;
        return;
    }

    // Shift elements to the right
    for (int i = n; i > x; i--) {
        arr[i] = arr[i - 1];
    }

    arr[x] = value;
    n++; // Increase size
}

int main() {
    int arr[100] = {10, 20, 30, 40, 50}; // Extra space reserved
    int n = 5;
    int x = 2;     // Insert at index 2 (3rd position)
    int value = 100;

    insertAtPosition(arr, n, x, value);

    cout << "Array after insertion: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
