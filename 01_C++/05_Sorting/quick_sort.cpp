#include <iostream>
using namespace std;

int findPartition(int arr[], int begin, int end){
    int pivot = arr[end];
    int i = begin - 1;

    for(int j = begin; j < end; j++){
        if(arr[j] < pivot){
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[end]);
    return i + 1;
}

void quicksort(int arr[], int begin, int end){
    if(begin < end){
        int partition = findPartition(arr, begin, end);

        quicksort(arr, begin, partition - 1);
        quicksort(arr, partition + 1, end);
    }
}

int main(){
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr)/sizeof(arr[0]);

    quicksort(arr, 0, n - 1);

    cout << "Sorted array: ";
    for(int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
