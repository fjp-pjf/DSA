def longestConsecutive(nums):
    if len(nums) == 0: 
        return 0
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:
            current_num = num
            length = 1
            while current_num + 1 in num_set:
                current_num += 1
                length += 1
            longest = max(longest, length)
    return longest


# class Solution {
#     /**
#      * @param {number[]} nums
#      * @return {number}
#      */
#     longestConsecutive(nums) {
#         if(nums.length === 0) return 0;

#         const numSet = new Set(nums);
#         let longest = 0;

#         for(const num of numSet){
#             if(!numSet.has(num-1)){
#                 let currNum = num;
#                 let length = 1;

#                 while (numSet.has(currNum+1)){
#                     currNum++;
#                     length++;
#                 }

#                 longest = Math.max(longest, length)
#             }
#         }
#         return longest;
#     }
# }
