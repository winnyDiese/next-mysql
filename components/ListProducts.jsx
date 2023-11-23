
const getData = async ()=>{
    const apiUrl = `http://localhost:3000/api/getData-lib`
    const response = await fetch(apiUrl)
    const res = await response.json()
    return res
}

const ListProducts = async ({id}) => {
    const {products} = await getData()
    console.log(id)

    return (
        <div>
            {products.map(p=>(
                <div key={p.id}>
                    <div>{p.productsname} {id}</div>
                    <div>
                        <img src={''} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListProducts;
