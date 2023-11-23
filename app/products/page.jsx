
const getData = async ()=>{
    const apiUrl = `http://localhost:3000/api/getData-lib`
    const response = await fetch(apiUrl)
    const res = await response.json()
    return res
  }
  
  const Page = async () => {
    const {products} = await getData()
  
    return (
      <div>
  
        <div>No from database: Nike Blazer Mid '77 Vintage</div>
        <div>
          <img src={''} />
        </div>
  
        {products.map(p=>(
          <div key={p.id}>
            <div>{p.productsname} </div>
            <div>
              <img src={''} />
            </div>
          </div>
        ))}
  
      </div>
    );
  }
  
  export default Page;
  