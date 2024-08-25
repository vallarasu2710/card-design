import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck ,faXmark  } from '@fortawesome/free-solid-svg-icons';


export default function Card() {
    const data = {
name:["$0/month","$9/month","$49/month"],
details1:[" ✔️ Single User"," ✔️ Limitted Access"," ✔️ Ultimaited Public Projects"," ✔️ Community Access","  ✖ Unlimited Private Project","  ✖ Dedicated Phone Support","  ✖ Free Subdimain","  ✖ Monthly Status Report"],
details2:[" ✔️ 5 User","✔️ 50GB Storage" ," ✔️ Ultimaited Public Projects"," ✔️ Community Access"," ✔️ Unlimited Private Project"," ✔️ Dedicated Phone Support"," ✔️ Free Subdimain"," ✖ Monthly Status Report"],
details3:[" ✔️ Unlimited User"," ✔️ Limitted Access"," ✔️ 50GB Access"," ✔️ Ultimaited Public Projects"," ✔️ Community Access"," ✔️ Unlimited Private Project"," ✔️ Dedicated Phone Support"," ✔️ Free Subdimain"," ✔️ Monthly Status Report"]

};

  return (

   

    <div className='card-body'>

<div className='card'>
    <div className='span'>
    <span>FREE</span>
    </div>
    <h1>$0/month</h1>

<p>{data.details1[0]}</p>
<p>{data.details1[1]}</p>
<p>{data.details1[2]}</p>
<p>{data.details1[3]}</p>
<p className='hidden'>{data.details1[4]}</p>
<p className='hidden'>{data.details1[5]}</p>
<p className='hidden'>{data.details1[6]}</p>
<p className='hidden'>{data.details1[7]}</p>
    <button>Button</button>
</div>
<div className='card'>
<div className='span'>
    <span>PLUS</span>
    </div>
    <h1>$9/month</h1>
    <p>{data.details2[0]}</p>
<p>{data.details2[1]}</p>
<p>{data.details2[2]}</p>
<p>{data.details2[3]}</p>
<p>{data.details2[4]}</p>
<p>{data.details2[5]}</p>
<p>{data.details2[6]}</p>
<p className='hidden'>{data.details2[7]}</p>

    <button>Button</button>
</div>
<div className='card'>
<div className='span'>
    <span>FREE</span>
    </div>
    <h1>$49/month</h1>
    
    <p>{data.details3[0]}</p>
<p>{data.details3[1]}</p>
<p>{data.details3[2]}</p>
<p>{data.details3[3]}</p>
<p>{data.details3[4]}</p>
<p>{data.details3[5]}</p>
<p>{data.details3[6]}</p>
<p>{data.details3[7]}</p>
    <button>Button</button>
</div>








    </div>
  )
}
