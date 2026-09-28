import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export const POST = async (req) => {
  await connectDB();

  let body = await req.formData();
  body = Object.fromEntries(body);

  // Check if Razorpay's order ID is present in the database
  let p = await Payment.findOne({
    oid: body.razorpay_order_id,
  });

  if (!p) {
    return NextResponse.json({
      success: false,
      message: "Order id not found",
    });
  }

  // Get Razorpay secret from environment variable
  const secret = process.env.KEY_SECRET;

  // Verify the payment
  const isValid = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    secret
  );

  if (isValid) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: "true" },
      { new: true }
    );

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  }

  return NextResponse.json({
    success: false,
    message: "Payment Verification Failed",
  });
};