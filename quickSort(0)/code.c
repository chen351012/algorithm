#include <stdio.h>

int a[] = {1, 3, 2, 4, 5, 57, 6, 46, 4, 6, 45};

void printArray(char pre[])
{
    printf("%s", pre);
    for (int i = 0; i < sizeof(a) / sizeof(int); i++)
    {
        printf("%d ", a[i]);
    }
    printf("\n");
}

// 分割方法
int partition(int i, int j)
{
    // 左边和右边边界
    int l = i, r = j,
        // 划分标记
        k = i, flag = a[k];
    while (1)
    {
        while (a[l] <= flag && l < r)
            l++;
        while (a[r] >= flag && r > l)
            r--;
        if (l >= r)
            break;
        int temp = a[l];
        a[l] = a[r];
        a[r] = temp;
    }
    if (a[l] > flag)
        l--;
    a[k] = a[l];
    a[l] = flag;
    return l;
}

// 快速排序
void quickSort(i, j)
{
    if (i < j)
    {
        int k = partition(i, j);
        quickSort(i, k - 1);
        quickSort(k + 1, j);
    }
}

int main()
{

    printArray("排序前：");

    quickSort(0, sizeof(a) / sizeof(int) - 1);

    printArray("排序后：");
    
}