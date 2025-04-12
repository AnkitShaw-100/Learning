#include <iostream>
using namespace std;

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while(i < leftSize && j < rightSize) {
        if(left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while(i < leftSize)
        arr[k++] = left[i++];
    
    while(j < rightSize)
        arr[k++] = right[j++];
}

void mergeSort(int arr[], int n) {
    if(n < 2)
        return;

    int mid = n / 2;

    int* left = new int[mid];
    int* right = new int[n - mid];

    for(int i = 0; i < mid; i++)
        left[i] = arr[i];
    
    for(int i = mid; i < n; i++)
        right[i - mid] = arr[i];

    mergeSort(left, mid);
    mergeSort(right, n - mid);
    merge(arr, left, mid, right, n - mid);

    delete[] left;
    delete[] right;
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    mergeSort(arr, n);

    cout << "Sorted array: ";
    for(int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
