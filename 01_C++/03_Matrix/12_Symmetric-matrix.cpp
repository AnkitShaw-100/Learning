// Check if a matrix is symmetric.

// 1  2  3
// 2  4  5
// 3  5  6

#include <iostream>
#include <vector>
using namespace std;

bool isSymmetric(const vector<vector<int>> &mat, int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (mat[i][j] != mat[j][i])
                return false;
        }
    }
    return true;
}

int main()
{
    int n;
    cout << "Enter size of square matrix (n x n): ";
    cin >> n;

    vector<vector<int>> mat(n, vector<int>(n));
    cout << "Enter matrix elements:\n";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> mat[i][j];

    if (isSymmetric(mat, n))
        cout << "The matrix is symmetric.\n";
    else
        cout << "The matrix is not symmetric.\n";

    return 0;
}
