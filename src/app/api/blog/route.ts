import { db } from "@/app/halper";
import { NextResponse } from "next/server";


export async function GET() {

    try {
        if (db.state !== "connected") {
            db.connect()
        }

        const queryResult = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM blogs",
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

export async function POST() {
    
    const sql = `INSERT INTO blogs (tags, posted_on, blog_html) VALUES ('Web Development', '2023-01-01', '<p>This is a sample blog post.</p>')`
    try {
        if (db.state !== "connected") {
            db.connect()
        }

        const queryResult = await new Promise((resolve, reject) => {
            db.query(sql,
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
            status: true
        });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({
            error: 'Database error',
        }, { status: 500 });
    }
}