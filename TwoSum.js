class Solution {
  /**
   * @param {number[]} nums Array of integers
   * @param {number} target Target sum to find
   * @return {number[]} Indices of the two numbers that add up to target
   */
  twoSum(nums, target) {
    const seen = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (seen.has(complement)) {
        return [seen.get(complement), i];
      }

      seen.set(nums[i], i);
    }

    return [];
  }
}
