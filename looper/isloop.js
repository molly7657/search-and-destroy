"use strict";

//Complete this algo
const isLoop = linkedlist => {
  const isLoop = linkedlist => {
    let holder = {};
    let head = linkedlist.head;
    while (head) {
      console.log(head);
      // console.log(head.next, 'next');
      if (holder[head]) {
        console.log("here");
        console.log(holder, "holder");
        return true;
      } else {
        holder[head] = true;
      }
      head = head.next;
    }
    console.log(holder, "holder");
    return false;
  };
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
