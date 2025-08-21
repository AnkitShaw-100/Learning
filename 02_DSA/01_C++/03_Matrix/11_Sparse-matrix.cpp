// Check if a matrix is sparse (mostly zeroes).

// 0  0  0
// 0  5  0
// 0  0  0

#include <iostream>
#include <vector>
using namespace std;

// Function to check if a matrix is sparse
bool isSparseMatrix(const vector<vector<int>> &arr, int n, int m)
{
    int zeroCount = 0;
    int total = n * m;

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (arr[i][j] == 0)
                zeroCount++;
        }
    }

    return zeroCount > total / 2;
}

int main()
{
    int n, m;
    cout << "Enter rows and columns: ";
    cin >> n >> m;

    vector<vector<int>> mat(n, vector<int>(m));
    cout << "Enter matrix values:\n";
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            cin >> mat[i][j];
        }
    }

    if (isSparseMatrix(mat, n, m))
        cout << "The matrix is a sparse matrix.\n";
    else
        cout << "The matrix is not a sparse matrix.\n";

    return 0;
}
