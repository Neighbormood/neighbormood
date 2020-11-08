export default {
  namespaced: true,
  state: {
    groups: [
      {
        name: "Close friends",
        value: 78
      },
      {
        name: "CS 101",
        value: 60
      },
      {
        name: "Ultimate frisbee",
        value: 65
      }
    ],
    moods: [
      {
        moodScore: 6,
        moodShortDesc: "Coding with friends",
        moodDescription: "It was awesome to code in Junction!"
      },
      {
        moodScore: 5,
        moodShortDesc: "Great team",
        moodDescription: "Feels great to have inspired and motivated friends to code with"
      }
    ],
    moodHistory: [{
      historyData: {}
    }]
  }
};
