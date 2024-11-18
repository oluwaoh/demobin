# demo-extension

This is a basic example of a GitHub Copilot Extension. This repository should serve as an example of the building blocks of a Copilot Extension.

> [!NOTE]
> Copilot Extensions are in public beta and may be subject to change.
> 
> All enrolled users with a GitHub Copilot Individual subscription can use Copilot Extensions.
> For organizations and enterprises with a Copilot Business or Copilot Enterprise subscription, organization owners and enterprise administrators can grant access to Copilot Extensions for use within their company.

## Development

Install dependencies:

```bash
npm install
```

To run:

```bash
npm start
```

Start up ngrok with the port provided:

```
ngrok http http://localhost:3000
```

## Accessing the Agent in Chat:

1. In the `Copilot` tab of your Application settings (`https://github.com/settings/apps/<app_name>/agent`)
- Set the URL that was set for your FQDN above with the endpoint `/agent` (e.g. `https://6de513480979.ngrok.app/agent`)
- Set the Pre-Authorization URL with the endpoint `/auth/authorization` (e.g. `https://6de513480979.ngrok.app/auth/authorization`)
2. In the `General` tab of your application settings (`https://github.com/settings/apps/<app_name>`)
- Set the `Callback URL` with the `/auth/callback` endpoint (e.g. `https://6de513480979.ngrok.app/auth/callback`)
- Set the `Homepage URL` with the base ngrok endpoint (e.g. `https://6de513480979.ngrok.app/auth/callback`)
3. Ensure your permissions are enabled in `Permissions & events` > 
- `Repository Permissions` > `Issues` > `Access: Read and Write`
- `Account Permissions` > `Copilot Chat` > `Access: Read Only`
4. Ensure you install your application at (`https://github.com/apps/<app_name>`)
5. Now if you go to `https://github.com/copilot` you can `@` your agent using the name of your application.

## Documentation
- [Using Copilot Extensions](https://docs.github.com/en/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat)
- [About building Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)
- [Set up process](https://docs.github.com/en/copilot/building-copilot-extensions/setting-up-copilot-extensions)
- [Communicating with the Copilot platform](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-the-copilot-platform)
- [Communicating with GitHub](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github)
