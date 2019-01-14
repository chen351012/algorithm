a = [1, 3, 2, 4, 5, 57, 6, 46, 4, 6, 45]

print("排序前：" + str(a))

# 分割方法


def partition(i, j):
    # 左边和右边边界
    l = i
    r = j
    # 划分标记
    k = i
    flag = a[k]
    while True:
        while a[l] <= flag and l < r:
            l += 1
        while a[r] >= flag and r > l:
            r -= 1
        if l >= r:
            break
        temp = a[l]
        a[l] = a[r]
        a[r] = temp
    if a[l] > flag:
        l -= 1
    a[k] = a[l]
    a[l] = flag
    return l

# 快速排序


def quickSort(i, j):
    if i < j:
        k = partition(i, j)
        quickSort(i, k - 1)
        quickSort(k + 1, j)


quickSort(0, len(a) - 1)

print("排序后：" + str(a))
