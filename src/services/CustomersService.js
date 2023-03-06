class CustomersService {
  constructor() {
    this.customers = [
      {
        id: "1",
        name: "John Doe",
      },
      {
        id: "2",
        name: "Rambo",
      },
    ];
  }

  getAll() {
    return this.customers;
  }

  delete(id) {
    const newList = this.customers.filter((e) => {
      return e.id !== id;
    });
    this.customers = newList;
    return true;
  }

  addNewCustomer(customer) {
    this.customers.concat(customer);
  }
}

export default new CustomersService();
