// Find the maximum and minimum values in each row of a matrix.

#include <iostream>
#include <vector>
using namespace std;

void rowWise(const vector<vector<int>> &arr, int n, int m)
{
    for (int i = 0; i < n; i++)
    {
        int row_max = arr[i][0];
        int row_min = arr[i][0];
        for (int j = 1; j < m; j++)
        {
            row_max = max(row_max, arr[i][j]);
            row_min = min(row_min, arr[i][j]);
        }
        cout << "Row " << i + 1 << " -> Min: " << row_min << ", Max: " << row_max << endl;
    }
}

void colWise(const vector<vector<int>> &arr, int n, int m)
{
    for (int j = 0; j < m; j++)
    {
        int row_max = arr[0][j];
        int row_min = arr[0][j];
        for (int i = 1; i < n; i++)
        {
            row_max = max(row_max, arr[i][j]);
            row_min = min(row_min, arr[i][j]);
        }
        cout << "Col " << j + 1 << " -> Min: " << row_min << ", Max: " << row_max << endl;
    }
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

    // The matrix is :
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }

    rowWise(arr, n, m);

    colWise(arr, n, m);

    return 0;
}
