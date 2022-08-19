// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

const mergeSortedLinkedList = (l1, l2) => {
  let curr = new ListNode();
  let dummy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return dummy.next;
};
