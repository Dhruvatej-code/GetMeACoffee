import React from 'react'
import Paymentpage from '@/Components/Paymentpage'
import { notFound } from 'next/navigation'
import connectDB from '@/db/connectDB'
import User from '@/models/User'


const username = async ({ params }) => {
   await  connectDB()
   let u = await User.findOne({username : params.username})
   if (!u) {
    return notFound()
   }
  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}


export default username
 
export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - Get Me A Chai`,
  }
}