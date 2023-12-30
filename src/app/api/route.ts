// pages/api/db.js
"use server"

import { db } from "../halper";
import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest, res: NextResponse) {
//     try {
//         if (db.state !== "connected") {
//             db.connect()
//         }
//         // await db.connect();
//         const queryResult = await new Promise((resolve, reject) => {
//             db.query("SELECT * FROM users",
//                 (error, results) => {
//                     if (error) {
//                         reject(error);
//                     } else {
//                         resolve(results);
//                     }
//                 });
//         });
//         console.log("queryResult", queryResult);

//         return NextResponse.json({
//             res: queryResult,
//         });
//     } catch (error) {
//         console.error('Database error:', error);
//         return NextResponse.json({
//             error: 'Database error',
//         }, { status: 500 });
//     }
// }

export async function insertBlog(req: NextRequest, res: NextResponse){

  try {
        if (db.state !== "connected") {
            db.connect()
        }

        const queryResult = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM users",
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(results);
                    }
                });
        });
        console.log("queryResult", queryResult);

        return NextResponse.json({
            res: queryResult,
        });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({
            error: 'Database error',
        }, { status: 500 });
    }
}


// export async function handler() {
//     try {
//         const results = db.query('SELECT * FROM users').OkPacket(console.log);
//         console.log("results", results);
//     } catch (error) {
//         console.log('Database error:', error);
//     }
// }
