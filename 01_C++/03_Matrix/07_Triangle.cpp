// Print the upper triangle and lower triangle of a matrix.

#include <iostream>
#include <vector>
using namespace std;

void printUpperTriangle(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Upper Triangle:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (i <= j)
                cout << arr[i][j] << " ";
            else
                cout << "  ";
        }
        cout << endl;
    }
}

void printLowerTriangle(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Lower Triangle:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (i >= j)
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

    printUpperTriangle(arr, n, m);
    printLowerTriangle(arr, n, m);

    return 0;
}
