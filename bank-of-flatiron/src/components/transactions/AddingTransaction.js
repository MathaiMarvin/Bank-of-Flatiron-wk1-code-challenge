import React, {useState} from "react"
import GetTransactions from "./GetTransactions"

function AddingTransaction(){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function submission (e){
        fetch("https://mathaimarvin.github.io/server-flatiron/db.json/transactions", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }, 
            body:JSON.stringify({
                date: date,
                description: description,
                category:category,
                amount: amount,
            }),


        });
        alert('added successfully')
    }
    

        return(
            <div>
                <form onSubmit={submission}>
                    <div>
                        <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" name="date"/>
                        <input value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" name="description" placeholder="description"/>
                        <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" name="category" placeholder="category"/>
                        <input value={amount} onChange={(e)=>{setAmount(e.target.value)}} type="text" name="amount" placeholder="amount" step="0.01"/>
                    </div>
                    <button type="submit">Add Transaction</button>
                </form>
            </div>
        )
    
}
export default AddingTransaction