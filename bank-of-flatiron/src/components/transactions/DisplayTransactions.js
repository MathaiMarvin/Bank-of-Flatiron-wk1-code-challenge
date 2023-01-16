import GetTransactions from "./GetTransactions";
import React from "react";

function DisplayTransactions({transactions}){
    const listedTransactions=transactions.map((data)=>{

        return <GetTransactions key={data.id} 
        date={data.date}
        description= {data.description}
        category= {data.category}
        amount={data.amount}
        />
    })

    return(
        <table>
        <tbody>
            <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            </tr>
        
            {listedTransactions}
        </tbody>
    </table>
    )
}
export default DisplayTransactions;