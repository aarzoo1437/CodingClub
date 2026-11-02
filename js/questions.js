// Change this file whenever you want to publish a new daily challenge.
export const dailyContent = {
  theme: "web", // Choose: "web", "green", "hearts", "taco", "purple", "berries"
  welcomePrompt: "☀️ before the brain workout",
  exercise: {
    title: "Unclench your shoulders",
    description: "Drop your shoulders, roll them backwards 5 times, stretch both arms overhead, and take 3 slow breaths."
  },
  question: {
    title: "Two Sum",
    difficulty: "EASY",
    topic: "ARRAYS",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice.",
    example: "Input: nums = [2,7,11,15], target = 9\\nOutput: [0,1]\\nExplanation: nums[0] + nums[1] == 9.",
    url: "https://leetcode.com/problems/two-sum/"
  },
  mcqs: [
    { question: "Which data structure is commonly used for an efficient Two Sum solution?", options: ["Stack", "HashMap", "Queue", "Tree"], answer: 1, explanation: "A HashMap lets us check whether the complement has already been seen in average O(1) time." },
    { question: "What is the average lookup time in a HashMap?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], answer: 0, explanation: "HashMap lookup is O(1) on average, assuming a good hash distribution." },
    { question: "For nums = [3, 2, 4] and target = 6, which indices are correct?", options: ["[0,1]", "[1,2]", "[0,2]", "[2,2]"], answer: 1, explanation: "nums[1] + nums[2] = 2 + 4 = 6." },
    { question: "What is the time complexity of the usual HashMap solution?", options: ["O(n²)", "O(log n)", "O(n)", "O(1)"], answer: 2, explanation: "We scan the array once and perform constant-time average map operations." },
    { question: "Why do we store the number's index in the map?", options: ["To sort the array", "To return the answer indices", "To remove duplicates", "To count numbers"], answer: 1, explanation: "The problem asks for the original positions, not just the values." }
  ],
  tomorrowTopics: ["Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "Any surprise"]
};
