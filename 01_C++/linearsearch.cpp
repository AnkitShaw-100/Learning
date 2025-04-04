#include<iostream>
using namespace std;
int l_search(int arr[], int n){
    int key, count = 0;
    cout << "Enter the key : ";
    cin >> key;
    for(int i = 0; i < n; i++){
        if(arr[i] == key){
            count++;
        }
    }
    if(count>0){
        cout << "Element "<< key << " found "<< count <<" times" <<endl;
    }
    else{
        cout << "Element "<< key << " not found "<<endl;
    }
    return 0;
}
int main(){ 
    int n;
    cout << "Enter the size of array : ";
    cin >> n;
    int arr[n];

    for(int i=0; i<n; i++){
        cout << "Enter the elements of array : ";
        cin >> arr[i];
    }
    l_search(arr , n);
    
    return 0;
}