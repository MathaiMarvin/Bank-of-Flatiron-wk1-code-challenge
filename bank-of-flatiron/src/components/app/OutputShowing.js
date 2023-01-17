import React, {useState, useEffect} from 'react';
import DisplayTransactions from '../transactions/DisplayTransactions';
import SearchTransaction from '../transactions/SearchTransaction';
import AddingTransaction from '../transactions/AddingTransaction';


function OutputShowing (){

    const transactionsUrl = "https://mathaimarvin.github.io/server-flatiron/db.json"

    const[transaction, setTransaction] = useState ([])
    const [query, setQuery] = useState ("")

    useEffect(()=>{

        fetch("https://mathaimarvin.github.io/server-flatiron/db.json" + query)
            .then((res)=>res.json())
            .then((transaction) => {
                console.log(transaction)})
            }, [query])
  

    function searchHandling(e){
        setQuery(e.target.value)
    }

    return(
        <div>
            <SearchTransaction searchHandling={searchHandling}/>
            <AddingTransaction/>
            <DisplayTransactions transactions={transaction}/>
        </div>
    )

}
export default OutputShowing