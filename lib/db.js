import { NextResponse } from "next/server";
import mysql from "mysql2/promise"

export async function  query(query,values=[]){

    const dbConnection = await mysql.createConnection({
        host:"localhost",
        database:"test-next-mysql",
        port:3306,
        user:"root",
        password:"root"
        // socketPath:"/Application/MAMP/tmp/mysql/mysql.sock"
    })

    console.log('Connect database')
    try {
       
        const [result] = await dbConnection.execute(query,values)
        dbConnection.end()
    
        return NextResponse.json({products:data},{status:200})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }

}