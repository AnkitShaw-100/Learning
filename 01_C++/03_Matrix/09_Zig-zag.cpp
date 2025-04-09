// Print the matrix in a zig-zag pattern.

// Given Matrix:
// 1 2 3
// 4 5 6
// 7 8 9

// Zig zag pattern:
// 1 2 3
// 6 5 4
// 7 8 9

#include <iostream>
#include <vector>
using namespace std;

void printZigZag(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Zig-Zag Pattern:\n";
    for (int i = 0; i < n; i++)
    {
        if (i % 2 == 0)
        {
            // left to right
            for (int j = 0; j < m; j++)
                cout << arr[i][j] << " ";
        }
        else
        {
            // right to left
            for (int j = m - 1; j >= 0; j--)
                cout << arr[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
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

    printZigZag(arr, n, m);

    return 0;
}
