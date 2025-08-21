#include <iostream>
#include <map>
using namespace std;

// key feature -> key is always unique, map sorts the data in ascending order by itself only

int main()
{
    map<string, int> m;
    m["tv"] = 100;
    m["laptop"] = 100;
    m["headphone"] = 40;
    m["tablet"] = 80;
    m["watch"] = 40;

    m.emplace("camera", 35);

    for (auto p : m)
    {
        cout << p.first << " " << p.second << endl;
    }
    cout << "Count : " << m.count("laptop") << endl; // Count of the key
    cout << "Value of given key is : " << m["laptop"] << endl; // prints the int value of the key 
    
    if(m.find("camera") != m.end()){
        cout << "Found \n";
    }
    else{
        cout << "Not found \n";
    }
    
    
    // Multimap 
    multimap<string, int> m1;
    
    m1.emplace("tv", 100);
    m1.emplace("tv", 100);
    m1.emplace("tv", 100);
    m1.emplace("tv", 100);
    m1.erase("tv");
    
    for(auto p1:m1){
        cout << p1.first << " " << p1.second << endl; 
    }

    //unordered map -> same as map but time complexity of every operation is O(1) where as time complexity of map is O(n)

    return 0;
}
