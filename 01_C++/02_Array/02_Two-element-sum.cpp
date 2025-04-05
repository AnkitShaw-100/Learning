// Check if two elements exist with a sum equal to a target value.
#include <iostream>
using namespace std;
int check_sum(int arr[], int n, int target){
    for (int i = 0; i < n-1; i++){
        for(int j = i + 1; j < n; j++){
            if(arr[i] + arr[j] == target){
                cout << "Pair found : (" << arr[i] << ", " << arr[j] << ")" << endl;
                return 1;
            }
        }
    }
    return 0;
}

int main()
{
    int arr[] = {12, 3, 4, 8, 99, 1};
    int n = 6;
    int target = 100;
    int result = check_sum(arr, n, target);
    if(result > 0 && result != 0){
        cout << "Match found" << endl;
    }
    else{
        cout << "Match not found" << endl;
    }
}