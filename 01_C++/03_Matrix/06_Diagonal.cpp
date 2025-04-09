// Print the left and right diagonals of a matrix.

#include <iostream>
#include <vector>
using namespace std;

void printLeftDiagonal(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Left Diagonal: ";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            if (i == j)
                cout << arr[i][j] << " ";
    cout << endl;
}

void printRightDiagonal(const vector<vector<int>> &arr, int n, int m)
{
    cout << "Right Diagonal: ";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            if (i + j == m - 1)
                cout << arr[i][j] << " ";
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

    printLeftDiagonal(arr, n, m);
    printRightDiagonal(arr, n, m);

    return 0;
}
