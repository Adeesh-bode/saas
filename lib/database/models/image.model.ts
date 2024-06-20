import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document  { // extends docu (ment willa auto. give it fields like _id 
    // here Document represents type (ts) of document ( i.e database -> collection k anadar ka doc // each entity is unique doc ) 
    title: string;
    publicId: string;
    transformationType: string;
    transformationUrl?: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    aspectRatio?: number;
    prompt?: string;
    color?: string;
    author: {
        _id: string;
        email: string;
        name: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    publicId: { type: String, required: true },
    transformationType : { type: String, required: true },
    transformationUrl : { type: URL },
    secureUrl: { type: String, required: true },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
    config : { type: Object }, //alse mean required false
    aspectRatio : { type: Number },
    prompt: { type: String },
    color: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Image = models?.Image || // if model named Image already exists in mongoose , use it
    model('Image', ImageSchema);

export default Image;