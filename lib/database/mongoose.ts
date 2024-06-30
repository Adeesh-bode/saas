import mongoose , { Mongoose } from 'mongoose'; // Mongoose for types

const MONGODB_URL = process.env.MONGODB_URL ;

if(!MONGODB_URL) {
    throw new Error ("MONGODB_URL is missing");
}

interface MongooseConnection {
    conn: Mongoose |  null,
    promise: Promise<Mongoose> | null;
}


let cached : MongooseConnection = ( global as any).mongoose ; // as serveless and new connectn each time caching is a must 
//cached object to store connection and promise 

if (!cached) { // if not cached earlier
    cached = (global as any).mongoose = { 
        conn: null, promise: null 
    };
}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;
    if (!MONGODB_URL) throw new Error('MONGODB_URL is missing');

    cached.promise = cached.promise ||  mongoose.connect(MONGODB_URL, {
        dbName: 'imagehelp', // change from imagehelp -  name of project 
        bufferCommands:false,
    });

    cached.conn = await cached.promise;

    return cached.conn;
}

















