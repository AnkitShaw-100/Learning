// Print a matrix row-wise and column-wise.

#include <iostream>
#include <vector>
using namespace std;

void rowWise(const vector<vector<int>> &arr, int n, int m)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << arr[i][j] << " ";
        }
    }
    cout << endl;
}

void colWise(const vector<vector<int>> &arr, int n, int m)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cout << arr[j][i] << " ";
        }
    }
    cout << endl;
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

    cout << "The values in the matrix row-wise are: " << endl;
    rowWise(arr, n, m);

    cout << "The values in the matrix col-wise are: " << endl;
    colWise(arr, n, m);

    return 0;
}
