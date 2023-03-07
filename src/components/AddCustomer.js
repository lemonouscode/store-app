
const AddCustomer = ({handleCustomerName,handleAddCustomer})=>{


    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="cust">Customer Name</label>
        <input
          name="cust"
          onChange={(e) => handleCustomerName(e.target.value)}
          type="text"
        />
        <button onClick={handleAddCustomer}>Add</button>
      </form>
    )
}

export default AddCustomer;