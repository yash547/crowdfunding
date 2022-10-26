import React from 'react'

export default function Form() {
  return (
    <div>

        <h1 className='headername'>Create a New Campaign</h1> 
    <div className='formheader'>
        <div className='innerdiv'>

        <label className='llabel'>Minimum Contribution Amount</label>
       <input type="text"  className="minimuminput"/>


       <label className='clabel'>Campaign Name</label>
       <input type="text"  className="cinput"/>


       <label className='dlabel'>Campaign Description</label>
       <textarea type="text"  className="dinput"/>
     
       <label className='ilabel'>Image URL</label>
       <input type="text"  className="iinput"/>


       <label className='tlabel'>Target Amount</label>
       <input type="text"  className="tinput"/>

       <button>Connect Wallet</button>
     </div>
    </div>
    </div>
  )
}
