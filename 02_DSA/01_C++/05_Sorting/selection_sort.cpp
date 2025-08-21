#include <iostream>
using namespace std;

void sort(int arr[], int n){
    for(int i = 0; i < n; i++){
        int min_idx = i;
        for(int j = i + 1; j < n; j++){
            if(arr[j] < arr[min_idx])
                min_idx = j;
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    sort(arr, n);

    cout << "Sorted array: ";
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    return 0;
}
