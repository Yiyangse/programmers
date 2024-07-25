function solution(box, n) {
    // Extract box dimensions
    let width = box[0];
    let height = box[1];
    let depth = box[2];
    
    // Calculate number of cubes that can fit in each dimension
    let countWidth = Math.floor(width / n);
    let countHeight = Math.floor(height / n);
    let countDepth = Math.floor(depth / n);
    
    // Calculate total number of cubes that can fit
    let totalCubes = countWidth * countHeight * countDepth;
    
    return totalCubes;
}

// Test cases
console.log(solution([1, 1, 1], 1)); // Expected output: 1
console.log(solution([10, 8, 6], 3)); // Expected output: 12
