import SibApiV3Sdk from 'sib-api-v3-sdk';


const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API_KEY;


app.post('/api/testing', async (req, res) => {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const sender = {
      email: 'starcriptowars3@gmail.com',
      name: 'Alan'
    }
    const receivers = [
      {
        email: req.body.email,
      },
    ]
  
    try {
      const sendEmail = await apiInstance.sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Miau',
        textContent: 'We can miau if you want',
      })
      return res.send(sendEmail)
    } catch (error) {
      console.log(error)
      return res.status(400).send(error)
    }
  })