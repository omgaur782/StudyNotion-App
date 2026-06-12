const Razorpay = require("razorpay");

exports.getRazorpayInstance = () => {
	if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
		throw new Error("Missing Razorpay credentials");
	}

	return new Razorpay({
		key_id: process.env.RAZORPAY_KEY,
		key_secret: process.env.RAZORPAY_SECRET,
	});
};
