require("dotenv").config();
import mongoose, {Document, Model, Schema} from "mongoose";

export interface IOrder extends Document{
    courseId:string,
    userId: string,
    payment_info: any
}

const orderSchema = new Schema<IOrder>({
    courseId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    payment_info:{
        type: Object,
        // required: true
    }
},{timestamps:true})

const orderModel: Model<IOrder> = mongoose.model("Order", orderSchema)

export default orderModel