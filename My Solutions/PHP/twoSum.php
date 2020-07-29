class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        for ($x = 0; $x < count($nums); $x++) {
            for ($j = $x+1; $j < count($nums); $j++) {
                if($nums[$x] + $nums[$j] === $target) {
                    return [$x, $j];
                }
            }
        }
    }
}