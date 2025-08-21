// Check if a matrix is an identity matrix.

// 1  0  0
// 0  1  0
// 0  0  1

#include <iostream>
#include <vector>
using namespace std;

bool isIdentityMatrix(const vector<vector<int>> &arr, int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if ((i == j && arr[i][j] != 1) || (i != j && arr[i][j] != 0))
            {
                return false;
            }
        }
    }
    return true;
}

int main()
{
    int n;
    cout << "Enter size of square matrix (n x n): ";
    cin >> n;

    vector<vector<int>> arr(n, vector<int>(n));
    cout << "Enter matrix elements:\n";
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> arr[i][j];

    if (isIdentityMatrix(arr, n))
        cout << "It is an identity matrix.\n";
    else
        cout << "It is NOT an identity matrix.\n";

    return 0;
}
