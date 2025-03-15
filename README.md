# Eyethena App Launch Test

A React Native application built with Expo that enables quick video calls. The app provides a simple interface to initiate FaceTime calls on iOS devices, with planned support for Android video calling.

## Features

- One-click video call initiation
- Platform-specific handling (iOS/Android)
- FaceTime integration for iOS devices
- Development environment configured with DevContainer

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```

## Running the App

- iOS: Scan the QR code with your iPhone camera
- Android: Scan the QR code with Expo Go app
- Use the tunnel option for remote development: `npx expo start --tunnel`

## Development Container

This project includes a DevContainer configuration for consistent development environments. To use it:

1. Install Docker and VS Code
2. Install the "Remote - Containers" extension in VS Code
3. Open the project in VS Code and click "Reopen in Container" when prompted

## License

MIT 