class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const map = new Map();
  
      for (let str of strs) {
        // frequency array for 26 lowercase letters
        const count = new Array(26).fill(0);
  
        // build the frequency key
        for (let char of str) {
          count[char.charCodeAt(0) - 97]++;
        }
  
        // make it a unique string key (like "1#0#0#2#...")
        const key = count.join('#');
  
        // group anagrams by the same frequency signature
        if (!map.has(key)) {
          map.set(key, []);
        }
        map.get(key).push(str);
      }
  
      return Array.from(map.values());
    }
  }
  