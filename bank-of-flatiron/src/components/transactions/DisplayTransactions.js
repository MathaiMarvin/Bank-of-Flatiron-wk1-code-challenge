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
        <table className="border-separate border border-slate-400 ...">
        <tbody>
            <tr>
            <th className="border border-slate-300 ...">Date</th>
            <th className="border border-slate-300 ...">Description</th>
            <th className="border border-slate-300 ...">Category</th>
            <th className="border border-slate-300 ...">Amount</th>
            </tr>
        
            {listedTransactions}
        </tbody>
    </table>
    )
}
export default DisplayTransactions;