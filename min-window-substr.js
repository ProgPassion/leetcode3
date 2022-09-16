/*
Link: https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that
every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

var s = "ADOBECODEBANC";
var t = "ABC";

var str = s.split('');
var result = '';

for(var i = 0; i < str.length; i++) {
	var startWriting = false;
	var output = '';
	var subStr = t.split('');

	for(var j = i; j < str.length && subStr.length > 0; j++) {	
		var charIndex = subStr.indexOf(str[j]);
		
		if(charIndex !== -1) {
			startWriting = true;
			subStr.splice(charIndex, 1);
		}
		if(startWriting) {
			output += str[j];
		}
	}

	if(subStr.length === 0 && (result.length > output.length || result == '')){
		result = output;
	}
}

console.log(result);



