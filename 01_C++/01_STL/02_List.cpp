#include <iostream>
#include <list>
using namespace std;

int main(){

    list<int> lst; // is implemented as a doubly linked list where as a vector is implemented as a dynamic array

    lst.push_back(11);
    lst.push_back(12);
    lst.push_back(13);
    lst.push_back(14);
    lst.emplace_back(5);
    lst.emplace_back(6);

    cout << lst.size() << endl; // 6
    
    for(int val : lst){
        cout << val << " ";
    }
    cout << endl;
    
    cout << lst.front() << endl; 
    cout << lst.back() << endl; 
    
    
    
    list<int> temp1 = {99, 98, 87, 96, 95};

    for(int val : temp1){
        cout << val << " ";
    }
    cout << endl;



    list<int> temp2(5,10); // (size,number)

    for(int val : temp2){
        cout << val << " ";
    }
    cout << endl;
    


    // erase, insert, -> costly function
    // clear, empty
    // begin, end -> iterators begin arr[0] ko point krta hai and end arr[end]+1 ko
    


    // iterator
    list<int> lst1 = {1,2,3,4,5};
    list<int>::iterator it;

    for(it = lst1.begin(); it != lst1.end(); it++){
        cout << *(it) << " ";
    }
     
    cout << endl;
    


    // auto keyword
    for(auto it = lst1.begin(); it != lst1.end(); it++){
        cout << *(it) << " ";
    }
    return 0;
}