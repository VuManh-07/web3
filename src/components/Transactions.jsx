import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";


import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {
  

  return (
    // <div>
    //   <div className="flex flex-col items-center w-full mt-3">
    //     <div className="display-flex justify-start w-full mb-6 p-2">
    //       <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
    //         <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
    //       </a>
    //       <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
    //         <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
    //       </a>
    //       <p className="text-white text-base">Amount: {amount} ETH</p>
    //       {message && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Message: {message}</p>
    //         </>
    //       )}
    //     </div>
    //     <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
    //       <p className="text-[#37c7da] font-bold">{timestamp}</p>
    //     </div>
    //   </div>
    // </div>
    <tr className="text-white">
      <th>{shortenAddress(addressFrom)}</th>
      <th>{shortenAddress(addressTo)}</th>
      <th>{amount} ETH</th>
      <th>{message} </th>
      <th>{timestamp}</th>
    </tr>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 " style={{width: '90%', borderBottom:' solid 1px #ccc'}}>
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2" style={{marginBottom: '1.5rem'}}>
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}


<table class="">
  <thead >
    <tr className="text-white">
      <th>From</th>
      <th>To</th>
      <th>Amount</th>
      <th>Message</th>
      <th>Timestamp</th>
    </tr>
  </thead>
  <tbody>
       {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
  </tbody>
</table>
 <div style={{hight: '1px', width: '100%', backgroundColor: '#ccc'}}></div>
      </div>
    </div>
  );
};

export default Transactions;