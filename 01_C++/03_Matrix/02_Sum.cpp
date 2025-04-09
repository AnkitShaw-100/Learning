// Calculate the total sum of elements in a matrix.

#include <iostream>
#include <vector>
using namespace std;

int sum(const vector<vector<int>> &arr, int n, int m)
{

    int add = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            add = add + arr[i][j];
        }
    }
    return add;
}

int main()
{
    int n, m;
    cout << "Enter the row length for the matrix: ";
    cin >> n;
    cout << "Enter the col length for the matrix: ";
    cin >> m;

    vector<vector<int>> arr(n, vector<int>(m));

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << "Enter the value: ";
            cin >> arr[i][j];
        }
    }

    int result = sum(arr, n, m);
    cout << "Sum is : " << result;
}