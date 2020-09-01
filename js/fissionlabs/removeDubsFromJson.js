//Question 1:
let data = [
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "987267",
    quantity: 200,
  },
  {
    orderId: "756789",
    quantity: 150,
  },
  {
    orderId: "274598",
    quantity: 450,
  },
  {
    orderId: "987267",
    quantity: 450,
  },
];

// Expected Output
// [
//     { orderId: '756789', quantity: 2700 }
// { orderId: '987267', quantity: 5850 }
// { orderId: '274598', quantity: 4050 }
// ]

const getQuantity = (d, orderId) => {
  let sum = 0;
  d.filter((t) => t.orderId == orderId).forEach((r) => (sum += r.quantity));
  return sum;
};

const orders = [];
data.forEach((d) => {
  if (orders.indexOf(d.orderId) < 0) {
    orders.push(d.orderId);
  }
});
orders
  .map((order) => {
    return {
      orderId: order,
      quantity: getQuantity(data, order),
    };
  })
  .forEach((order) => console.log(order));
