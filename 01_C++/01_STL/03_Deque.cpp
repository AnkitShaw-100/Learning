#include <iostream>
#include <deque>
using namespace std;

int main(){

    deque<int> deq; // is implemented as a double-ended queue

    deq.push_back(11);
    deq.push_back(12);
    deq.push_back(13);
    deq.push_back(14);
    deq.emplace_back(5);
    deq.emplace_back(6);

    cout << deq.size() << endl; // 6
    
    for(int val : deq){
        cout << val << " ";
    }
    cout << endl;
    
    cout << deq.front() << endl; 
    cout << deq.back() << endl; 
    
    
    
    deque<int> temp1 = {99, 98, 87, 96, 95};

    for(int val : temp1){
        cout << val << " ";
    }
    cout << endl;



    deque<int> temp2(5,10); // (size,number)

    for(int val : temp2){
        cout << val << " ";
    }
    cout << endl;
    


    // erase, insert, -> costly function
    // clear, empty
    // begin, end -> iterators begin arr[0] ko point krta hai and end arr[end]+1 ko
    


    // iterator
    deque<int> deq1 = {1,2,3,4,5};
    deque<int>::iterator it;

    for(it = deq1.begin(); it != deq1.end(); it++){
        cout << *(it) << " ";
    }
     
    cout << endl;
    


    // auto keyword
    for(auto it = deq1.begin(); it != deq1.end(); it++){
        cout << *(it) << " ";
    }
    return 0;
}
