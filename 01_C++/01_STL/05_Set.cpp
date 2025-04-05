#include <iostream>
#include <set>
#include <algorithm> 
#include <vector>
using namespace std;

int main()
{
    set<int> s;
    s.insert(1);
    s.insert(2);
    s.insert(3);
    s.insert(4);
    s.insert(5);

    s.insert(3);
    s.insert(4);
    s.insert(5);
    
    cout << "The size of the set is : " << s.size() << endl;
    for (auto val : s)
    {
        cout << val << " " << endl;
    }
    
    // ordered set 
    // unordered set
    // important functions -> lower bound, upper bound 
    
    cout << "Lower bound : " << *(s.lower_bound(7)) << endl;
    cout << "Upper bound : " << *(s.upper_bound(1)) << endl;
    

    //multiSet & unordered set -> lower bound upper bound kaam nhi krta kyun ki woh sorted nhi hota hai  
    
    //Sort
    int arr[6] = {3, 4, 1, -10, 889, 99}; 
    sort(arr, arr + 6); 
    cout << "Sorted array: ";
    for (int i = 0; i < 6; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // sort(arr, arr+n, greater<int>()) -> sorts in desecnding order 
    // sort(v.begin(), v.end())

    // reverse to reverse a vector -> reverse(v.begin(), v.end())
    // next permutation to find the next permutation of a string -> next_permutation(v.begin(), v.end())
    string str = "abcd";
    next_permutation(str.begin(), str.end());
    cout << str << endl;
    next_permutation(str.begin(), str.end());
    cout << str << endl;
    next_permutation(str.begin(), str.end());
    cout << str << endl;
    next_permutation(str.begin(), str.end());
    cout << str << endl;
    next_permutation(str.begin(), str.end());
    cout << str << endl;

    // swap to swap the value of given indexes
    // max to find the maximum element in a vector  
    // min to find the minimum element in a vector
    vector<int> vec = {1,3,4,5,6,7,8};
    cout << *(max_element(vec.begin(), vec.end())) << endl;
    cout << *(min_element(vec.begin(), vec.end())) << endl;
    cout << binary_search(vec.begin(), vec.end(), 40) << endl; // returns 1 for true and 0 for false 

    return 0;
}