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

  singleCustomer(id){
    const customer = this.customers.find((e)=> e.id==id);
    return customer
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

  boughtNewItem(id,item){
    this.customers.map((e)=>{
      if(e.id == id){
        e.products.push(item.name)
      }
    })
    return true;
  }
}

export default new CustomersService();
