function threeSum(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Update closestSum if sum is closer to target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move left or right pointer based on the sum
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Found exact sum, return it
        return sum;
      }
    }
  }

  return closestSum;
}




