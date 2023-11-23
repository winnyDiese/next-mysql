import { NextResponse } from "next/server";
import {query} from "@/lib/db"


export async function  GET(req,res){ 

    try {
        const querySql = "SELECT id, productsname, productdescription, productimage FROM products"
        const valuesParams = []
        const data = await query({query:querySql, values:valuesParams})
    
        return NextResponse.json({products:data},{status:200})

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }

}