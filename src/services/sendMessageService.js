import axios from "axios";

async function sendMessageService(recipientTelephone) {
  try {
    const sms = await axios({
      baseURL: "https://api.zenvia.com/v2/channels/sms/messages",
      method: "post",
      headers: {
        "X-API-TOKEN": process.env.TOTALVOICE_API_KEY,
      },
      data: {
        from: process.env.SENDER_TELEPHONE,
        to: String(recipientTelephone),
        contents: [
          {
            type: "text",
            text: "Redefinir senha: seu novo código de acesso é 865479",
          },
        ],
      },
      json: true,
    });

    return sms.data;
  } catch (error) {
    console.log(error);
  }
}

export default sendMessageService;
