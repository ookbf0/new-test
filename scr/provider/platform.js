// src/provider/platform.js
export const PLATFORM = {
  name: "tokenrhythm",
  baseURL: "https://tokenrhythm.studio/v1/chat/completions",
  apiKeyEnv: "NVIDIA_API_KEY",
  authHeaderName: "Authorization",
  authPrefix: "Bearer ",
  extraBody: {
    stream: true,
    stream_options: { include_usage: true }
  }
};
