
  function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      const diff = Math.abs(currentSum - target);

      if (diff === 0) {
        // If the sum is exactly equal to the target, return it
        return currentSum;
      }

      if (diff < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

}

module.exports = threeSum;
