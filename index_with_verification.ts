import express from 'express';
import { createAckEvent, createDoneEvent, createTextEvent, getUserConfirmation, MessageRole, prompt, verifyAndParseRequest } from '@copilot-extensions/preview-sdk';

const app = express();

app.use(
  express.json({
    verify: (req: any, res, buf) => {
      req.rawBody = buf.toString('utf-8')
    }
  })
)

app.get('/', (_, res) => {
    res.send('ack');
});

app.post('/', async (req: any, res) => {
  // Ack chat message to show loading indicator.
  res.write(createAckEvent());

  const token = req.get('X-GitHub-Token') || ''
  const keyId = req.get('Github-Public-Key-Identifier') || ''
  const signature = req.get('Github-Public-Key-Signature') || ''

  var isValidRequest = false
  try {
    const verification = await verifyAndParseRequest(
      req.rawBody,
      signature,
      keyId,
      { token }
    )
    isValidRequest = verification.isValidRequest
  } catch {
    isValidRequest = false
  }

  const message = isValidRequest ? 'Valid request' : 'Invalid request'
  res.write(createTextEvent(message));

  // End chat response.
  res.write(createDoneEvent());
  res.end();
});

const port = Number(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});