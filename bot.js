const robot = require("robotjs");
const schedule = require("node-schedule");

//replace "first" if you want a different message to be sent
function typeFirst() {
  setTimeout(() => {
    robot.typeString("first");
    robot.keyTap("enter");
  }, 10000);
}

//replace __ with minutes and the second __ with hours (cron time)
schedule.scheduleJob("__ __ * * *", () => {
  typeFirst();
});
