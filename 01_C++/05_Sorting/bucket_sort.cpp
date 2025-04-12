#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

void bucketSort(int arr[], int n) {
    if (n <= 0) return;

    int globalMin = arr[0], globalMax = arr[0];
    for (int i = 1; i < n; i++) {
        globalMin = min(globalMin, arr[i]);
        globalMax = max(globalMax, arr[i]);
    }

    int bucketCount = n;
    int range = globalMax - globalMin + 1;
    int bucketRange = ceil((double)range / bucketCount);

    vector<vector<int>> buckets(bucketCount);

    // Put elements into buckets
    for (int i = 0; i < n; i++) {
        int idx = (arr[i] - globalMin) / bucketRange;
        buckets[idx].push_back(arr[i]);
    }

    // Sort each bucket and combine
    int index = 0;
    for (int i = 0; i < bucketCount; i++) {
        sort(buckets[i].begin(), buckets[i].end());
        for (int val : buckets[i]) {
            arr[index++] = val;
        }
    }
}

int main() {
    int arr[] = {29, 25, 3, 49, 9, 37, 21, 43};
    int n = sizeof(arr) / sizeof(arr[0]);

    bucketSort(arr, n);

    cout << "Sorted array: ";
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
