import React, {useState} from "react"
import GetTransactions from "./GetTransactions"
function AddingTransaction(){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function submission (e){
        fetch("https://mathaimarvin.github.io/server-flatiron/db.json/transactions")
    }
}
export default AddingTransaction