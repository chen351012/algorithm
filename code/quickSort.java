import java.util.Arrays;

public class quickSort {

    private static int[] a = { 1, 3, 2, 4, 5, 57, 6, 46, 4, 6, 45 };

    // 分割方法
    public static int partition(int i, int j) {
        // 边界
        int l = i, r = j,
                // 划分标记
                k = i, flag = a[k];
        while (true) {
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
    public static void sort(int i, int j) {
        if (i < j) {
            int k = partition(i, j);
            sort(i, k - 1);
            sort(k + 1, j);
        }
    }

    public static void main(String[] args) {

        System.out.println("排序前：" + Arrays.toString(a));

        sort(0, a.length - 1);

        System.out.println("排序后：" + Arrays.toString(a));

    }

}