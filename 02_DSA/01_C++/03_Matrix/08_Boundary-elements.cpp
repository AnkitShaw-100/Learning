// Print the boundary elements of a matrix.

#include <iostream>
#include <vector>
using namespace std;

void printBoundary(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Boundary Elements:\n";

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (i == 0 || i == n - 1 || j == 0 || j == m - 1)
                cout << arr[i][j] << " ";
            else
                cout << "  ";
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

    vector<vector<int>> arr(n, vector<int>(m));
    cout << "Enter matrix elements:\n";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> arr[i][j];

    printBoundary(arr, n, m);

    return 0;
}
