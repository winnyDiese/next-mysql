import { NextResponse } from "next/server";
import mysql from "mysql2/promise"

export async function  GET(req,res){

    const dbConnection = await mysql.createConnection({
        host:"localhost",
        database:"test-next-mysql",
        port:3306,
        user:"root",
        password:"root"
        // socketPath:"/Application/MAMP/tmp/mysql/mysql.sock"
    })

    console.log('Connect succefulling')

    try {
        const query = "SELECT id, productsname, productdescription, productimage FROM products"
        const values = []
        const [data] = await dbConnection.execute(query,values)
    
        return NextResponse.json({products:data},{status:200})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }

}