class CustomersService {
  constructor() {
    this.customers = [
      {
        id: "1",
        name: "John Doe",
        products: ["Item 1","Item 2"]
      },
      {
        id: "2",
        name: "Rambo",
        products: ["Item 1","Item 22"]
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
    this.customers = [...this.customers, customer]

    return customer
  }
}

export default new CustomersService();
