import { NextResponse } from "next/server";
import mysql from "mysql2/promise"


export const query = async ({query,values=[]})=>{

    const dbConnection = await mysql.createConnection({
        host:"localhost",
        database:"test-next-mysql",
        port:3306,
        user:"root",
        password:"root"
        // socketPath:"/Application/MAMP/tmp/mysql/mysql.sock"
    })
    dbConnection.end()

    console.log('Connect database')
    try {
        const [results] = await dbConnection.execute(query,values)
        // dbConnection.end()
        
        return results

    } catch (error) {
        throw Error(error.message)
        return {error}
    }
}
