#include <iostream>
#include <vector>
using namespace std;

int main(){

    vector<int> vec;

    vec.push_back(11);
    vec.push_back(12);
    vec.push_back(13);
    vec.push_back(14);
    vec.emplace_back(5);
    vec.emplace_back(6);

    cout << vec.size() << endl; // 10
    cout << vec.capacity() << endl; // 16
    
    for(int val : vec){
        cout << val << " ";
    }
    cout << endl;
    
    cout << vec.front() << endl; 
    cout << vec.back() << endl; 
    
    
    
    vector<int> temp1 = {99, 98, 87, 96, 95};

    for(int val : temp1){
        cout << val << " ";
    }
    cout << endl;



    vector<int> temp2(5,10); // (size,number)

    for(int val : temp2){
        cout << val << " ";
    }
    cout << endl;
    


    // erase, insert, -> costly function
    // clear, empty
    // begin, end -> iterators begin arr[0] ko point krta hai and end arr[end]+1 ko
    


    // iterator
    vector<int> vec1 = {1,2,3,4,5};
    vector<int>::iterator it;

    for(it = vec1.begin(); it != vec1.end(); it++){
        cout << *(it) << " ";
    }
     
    cout << endl;
    


    // auto keyword
    for(auto it = vec1.begin(); it != vec1.end(); it++){
        cout << *(it) << " ";
    }
    return 0;
}