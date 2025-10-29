class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort array
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicate elements for i
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          // Skip duplicates for left
          while (left < right && nums[left] === nums[left + 1]) left++;
          // Skip duplicates for right
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }

    return triplets;
  }
}
