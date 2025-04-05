// Count unique and duplicate elements in an array (1-100).
#include <iostream>
#include <vector>
using namespace std;

int unique_element(int arr[], int n) {
    int unique = 0;
    for (int i = 0; i < n; i++) {
        unique = unique ^ arr[i];  // XOR method (works if each duplicate appears exactly twice)
    }
    return unique;
}

void count_duplicates(int arr[], int n) {
    vector<int> freq(101, 0);  // Array size 101 to store count (1-100)

    for (int i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    cout << "Duplicate elements: ";
    bool found = false;
    for (int i = 1; i <= 100; i++) {
        if (freq[i] > 1) {
            cout << i << " (count: " << freq[i] << ") ";
            found = true;
        }
    }
    if (!found) {
        cout << "None";
    }
    cout << endl;
}

int main() {
    int n;
    cout << "Enter the size of the array: ";
    cin >> n;

    int arr[n];
    cout << "Enter the elements of the array (1-100): ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int result_1 = unique_element(arr, n);
    cout << "Unique element (if exactly one duplicate exists): " << result_1 << endl;

    count_duplicates(arr, n);

    return 0;
}
