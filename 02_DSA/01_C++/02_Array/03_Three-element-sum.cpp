// Check if three elements exist with a sum equal to a target value.
#include <iostream>
using namespace std;
int check_sum(int arr[], int n, int target){
    for (int i = 0; i < n-2; i++){
        for(int j = i + 1; j < n-1; j++){
            for(int  k = j + 1; j < n; j++){
                if(arr[i] + arr[j] + arr[k]== target){
                    cout << "Triplet found: (" << arr[i] << ", " << arr[j] << ", " << arr[k] << ")" << endl;
                    return 1;
                }
            }
        }
    }
    return 0;
}

int main()
{
    int arr[] = {10, 20, 30, 40, 50, 60};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 120;  // Example: 10 + 50 + 60

    int result = check_sum(arr, n, target);
    if (result > 0) {
        cout << "Match found" << endl;
    } else {
        cout << "Match not found" << endl;
    }

    return 0;
}