
import React from 'react';

const getData = async ()=>{
  const apiUrl = `http://localhost:3000/api/getData`
  const response = await fetch(apiUrl)
  const res = await response.json()
  // console.log(res)
  return res
}

const Page = async () => {
  const {products} = await getData()
  // console.log(products)

  return (
    <div>

      <div>No from database: Nike Blazer Mid '77 Vintage</div>
      <div>
        <img src={''} />
      </div>

      {products.map(p=>(
        <div>
          <div>{p.productsname}</div>
          <div>
            <img src={''} />
          </div>
        </div>
      ))}

    </div>
  );
}

export default Page;
