// Calculate the sum of each row and each column in a matrix.

#include <iostream>
#include <vector>
using namespace std;

void rowWise(const vector<vector<int>> &arr, int n, int m)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            sum = sum + arr[i][j];
        }
    }
    cout << "The sum after row-wise addition  : " << sum << endl;
}

void colWise(const vector<vector<int>> &arr, int n, int m)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            sum = sum + arr[i][j];
        }
    }
    cout << "The sum after row-wise addition  : " << sum << endl;
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
    rowWise(arr, n, m);

    colWise(arr, n, m);

    return 0;
}
