// Find the 2nd minimum element; if none, print -1.
#include <iostream>
#include <climits>
using namespace std;

int second_minimum(int arr[], int n){
    int min = INT_MAX;
    int s_min = INT_MAX;
    for(int i = 0; i < n; i++){
        if(arr[i] < min){
            s_min = min;
            min = arr[i];
        }
        else if (arr[i] > min && arr[i] < s_min) {
            s_min = arr[i];
        }
    }
    if (s_min == INT_MAX) return -1;
    return s_min;
}
int main(){
    int arr[] = {1,2,3,4,5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = second_minimum(arr, n);
    cout <<"The second largest element is : "<< result ;
}