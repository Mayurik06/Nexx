import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { unsubscribe } from "diagnostics_channel";
import { eq } from "drizzle-orm";


export async function createSubscription({
    stripeCustomerId,
}:{stripeCustomerId:string}) {
   await db.update(subscriptions).set({subscribed:true}).where(eq(subscriptions.stripeCustomerId,stripeCustomerId)); 
}

export async function cancleSubscription({stripeCustomerId}:{stripeCustomerId:string}){
    await db.update(subscriptions).set({
        subscribed:false,
    }).where(eq(subscriptions.stripeCustomerId,stripeCustomerId))
}

export async function getSubsription({userId}:{userId:string}){
const userSubscription=await db.query.subscriptions.findFirst({where:eq(subscriptions.userId,userId)});
return userSubscription?.subscribed;

}
