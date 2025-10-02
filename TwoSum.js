class Solution {
  /**
   * @param {number[]} nums Array of integers
   * @param {number} target Target sum to find
   * @return {number[]} Indices of the two numbers that add up to target
   */
  twoSum(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
      const firstItem = nums[i];
      for (let j = 0; j < nums.length - 1; j++) {
        const secondItem = nums[j];
        const value = firstItem + secondItem;
        if (value === target) {
          indices.push(j);
          indices.push(i);
        }
      }
    }
    return indices;
  }
}
