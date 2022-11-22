import { addManyCustomerAction } from "../store/customerReduser"

export const fetchCustomers = () => {
    return function (dispath) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispath(addManyCustomerAction(json)))
    }
}