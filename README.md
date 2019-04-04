[算法实现](https://github.com/yelloxing/algorithm) - Implementation of Common Algorithms in Programming
==================================================

[![chat](https://github.com/yelloxing/clay-core/blob/master/data/chat.svg)](https://github.com/yelloxing/algorithm/issues)

本项目主要内容：编程常用算法思想在不同语言下的实现。

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

基本的算法思想
------------------------

> 0.递归与分治策略

 把一个规模为n的问题分解为k个规模较小的子问题，这些子问题相互独立且与原问题相同，递归的解这些子问题，然后把各个子问题的解合并得到原问题的解。
 
 > 1.贪心算法
 
  算法思想很简单，和字面意思一样，每次都选择对自己最有利的，不过这是有条件的，只有在满足条件下每次选择最有利自己的才可以获取最优解。

  贪心选择性质和最优子结构性质是该思想最重要的性质：
    
  * 贪心选择性质：所求问题的整体最优解可以通过一系列局部最优的选择达到。
  * 最优子结构性质：当一个问题的最优解包含其子问题的最优解时，称此问题具有此性质。
  
> 2.备忘录算法

和动态规划的算法思想差不多，不同的是备忘录为每个解过的子问题建立备忘录以备需要的时候查看，避免了相同的问题计算多次。

一般来说，当一个问题的所有子问题都至少要解一次时，用动态规划比备忘录要好，因为不会有任务暂存且没有多余的计算；当子问题空间中部分问题不必解时，用备忘录比较好。

不过上面不是绝对的，这样说只是想区别一下二个思想的不同，具体的时候还是要根据业务场景来在保证可行的前提下选择更好的方法。

> 3.动态规划

和分治法基本思想有共同的地方，不同的是子问题往往不是独立的，有时母问题要借助子问题的解来判断，因此把已经计算好的问题记录在表格中，后续如果需要查询一下，可以避免重复计算，这是动态规划的基本思想。

不过动态规划具体实现起来多种多样，不过都具有相同的填表格式，通常按照下面步骤设计算法：

 * 找出最优解的性质，并刻画其结构特征；
 * 递归的定义最优值；
 * 以自底向上的方式计算出最优值；
 * 通过计算最优值时刻意记录的判断结果来构造最优解。

 可以使用该算法思想设计算法的问题一般会具有二个决定性的性质：
 
  * 最优子结构性质；
  * 子问题重叠性质。
  
> 4.回溯法

说的直白点就是深度优先方式系统搜索问题的算法。

> 5.分支限界

对比回溯法就很容易思考，用广度优先的办法，不断扩大当前节点的孩子为当前节点，主要是求解一个最优解，算法相比回溯法要简单些。
