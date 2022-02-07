# Classroom Captioner

Provide live captions to your students by leaving a tab open in the background. Students can get cpations on their own devices.

## Quick Setup

1. Sign up for a [free Deepgram account](https://console.deepgram.com/signup?utm_source=DEVREL&utm_medium=github&utm_content=classroom-captioner).
2. Create a new Deepgram API Key. Make sure your API Key has either an admin or owner role.
3. Take note of your Deepgram API Key and Deepgram Project ID.
4. Click on any of these buttons below to deploy this project on your hosting provider of choice.

<a href="https://render.com/deploy?repo=https://github.com/deepgram-devs/classroom-captioner">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render">
</a>

<!-- Remix on Glitch -->

## Local Setup

```
git clone https://github.com/deepgram-devs/classroom-captioner
cd classroom-captioner
npm install
```

Rename `.env.example` to `.env` and populate the values. `LECTURE_KEY` is a value provided like a password to give transcription and broadcasting permissions - it should not be shared with students.

Run a development server with `npm run dev`, and a production server with `npm start`.

## Development and contributing

Interested in contributing? We ❤️ pull requests!

To make sure our community is safe for all, be sure to review and agree to our
[Code of Conduct](./.github/CODE_OF_CONDUCT.md). Then see the
[Contribution](./.github/CONTRIBUTING.md) guidelines for more information.

## Getting help

We love to hear from you, so if you have questions, comments, or find a bug in the
project, let us know! You can either:

- [Open an issue](https://github.com/deepgram-devs/classroom-captioner/issues/new) in this
repository
- Tweet at us! We're [@DeepgramDevs on Twitter](https://twitter.com/DeepgramDevs)

## Further reading

Check out the Developer Documentation at [https://developers.deepgram.com/](https://developers.deepgram.com/).
