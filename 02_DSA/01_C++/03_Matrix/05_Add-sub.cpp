// Add and subtract two matrices.

#include <iostream>
#include <vector>
using namespace std;

void add(const vector<vector<int>> &a, const vector<vector<int>> &b, int n, int m)
{
    cout << "Addition of matrices:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << a[i][j] + b[i][j] << " ";
        }
        cout << endl;
    }
}

void sub(const vector<vector<int>> &a, const vector<vector<int>> &b, int n, int m)
{
    cout << "Subtraction of matrices:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << a[i][j] - b[i][j] << " ";
        }
        cout << endl;
    }
}

int main()
{
    int n, m;
    cout << "Enter number of rows: ";
    cin >> n;
    cout << "Enter number of columns: ";
    cin >> m;

    vector<vector<int>> arr1(n, vector<int>(m));
    vector<vector<int>> arr2(n, vector<int>(m));

    cout << "Enter values for first matrix:\n";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> arr1[i][j];

    cout << "Enter values for second matrix:\n";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> arr2[i][j];

    add(arr1, arr2, n, m);
    sub(arr1, arr2, n, m);

    return 0;
}
