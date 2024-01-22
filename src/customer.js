var customerList = [];

const addCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  // Check if the customer with the given CustomerId already exists
  const existingCustomerIndex = customerList.findIndex(
    (c) => c[0] === CustomerId
  );

  if (existingCustomerIndex !== -1) {
    // If exists, update the customer details
    updateCustomer(
      CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category
    );
  } else {
    // If not, add the customer to the list
    const customer = [
      CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category,
    ];
    customerList.push(customer);
    console.log(`Customer with ID ${CustomerId} added successfully.`);
  }
};

const updateCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  const customer = [
    CustomerId,
    CustomerName,
    CustomerAge,
    CustomerAddress,
    CustomerContactNumber,
    Category,
  ];

  // Check if the customer with the given CustomerId exists
  const existingCustomerIndex = customerList.findIndex(
    (c) => c[0] === CustomerId
  );

  if (existingCustomerIndex !== -1) {
    // If exists, update the customer details
    customerList[existingCustomerIndex] = customer;
    console.log(`Customer with ID ${CustomerId} updated successfully.`);
  } else {
    throw new Error(`Customer with ID ${CustomerId} does not exist. Use addCustomer to add.`);
  }
}

const getAllCustomers = () => {
  return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };