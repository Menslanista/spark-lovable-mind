# Native Mobile App Build Guide

This guide explains two alternative approaches to create iOS App Store and Google Play Store versions of your LovableAdvanced project.

## Method 1: Capacitor (Recommended)

Capacitor is the preferred approach for Lovable projects as it wraps your existing React web app into native mobile containers.

### Prerequisites
- Mac with Xcode (for iOS builds)
- Android Studio (for Android builds)
- Node.js and npm installed

### Setup Process

1. **Install Capacitor Dependencies**
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
   ```

2. **Initialize Capacitor**
   ```bash
   npx cap init
   ```
   - App ID: `app.lovable.a61529864778418b9e543937ca3971fa`
   - App Name: `spark-lovable-mind`

3. **Configure capacitor.config.ts**
   ```json
   {
     "appId": "app.lovable.a61529864778418b9e543937ca3971fa",
     "appName": "spark-lovable-mind",
     "webDir": "dist",
     "server": {
       "url": "https://a6152986-4778-418b-9e54-3937ca3971fa.lovableproject.com?forceHideBadge=true",
       "cleartext": true
     }
   }
   ```

4. **Export to GitHub and Clone Locally**
   - Use Lovable's "Export to GitHub" button
   - Clone the repository to your local machine
   - Run `npm install`

5. **Add Native Platforms**
   ```bash
   npx cap add ios
   npx cap add android
   ```

6. **Build and Sync**
   ```bash
   npm run build
   npx cap sync
   ```

7. **Open in Native IDEs**
   ```bash
   # For iOS (requires Mac)
   npx cap open ios
   
   # For Android
   npx cap open android
   ```

### Publishing Process

**iOS App Store:**
1. Open project in Xcode
2. Configure signing certificates and provisioning profiles
3. Build for release (Product → Archive)
4. Upload to App Store Connect via Xcode Organizer
5. Submit for review through App Store Connect

**Google Play Store:**
1. Open project in Android Studio
2. Generate signed APK/AAB (Build → Generate Signed Bundle)
3. Create developer account on Google Play Console
4. Upload AAB file and complete store listing
5. Submit for review

---

## Method 2: Progressive Web App (PWA) + App Store Deployment

This approach creates a PWA that can be submitted to app stores with additional native wrappers.

### Prerequisites
- PWA capabilities in your web app
- TWA (Trusted Web Activity) for Android
- WKWebView wrapper for iOS

### Setup Process

1. **Configure PWA Manifest**
   Create `public/manifest.json`:
   ```json
   {
     "name": "LovableAdvanced",
     "short_name": "LovableAI",
     "description": "Advanced AI Assistant",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#0f0f23",
     "theme_color": "#6366f1",
     "icons": [
       {
         "src": "/icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "/icon-512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```

2. **Add Service Worker**
   Create `public/sw.js` for offline functionality and caching.

3. **Android: Trusted Web Activity**
   - Use Android Studio to create TWA project
   - Configure `build.gradle` to point to your web app
   - Generate signed APK

4. **iOS: Native Wrapper**
   - Create iOS project with WKWebView
   - Load your web app URL in WebView
   - Configure App Transport Security
   - Build and archive for App Store

### Publishing Process

**Android (TWA):**
1. Build signed APK/AAB from Android Studio
2. Test TWA functionality thoroughly
3. Upload to Google Play Console
4. Complete store listing with screenshots
5. Submit for review

**iOS (WebView Wrapper):**
1. Create minimal iOS app with WKWebView
2. Configure proper permissions and capabilities
3. Build and archive in Xcode
4. Upload to App Store Connect
5. Ensure compliance with App Store guidelines for web-based apps

---

## Comparison

| Feature | Capacitor | PWA + Wrappers |
|---------|-----------|----------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Native Features** | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Performance** | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Maintenance** | ⭐⭐⭐⭐ | ⭐⭐ |
| **App Store Approval** | ⭐⭐⭐⭐ | ⭐⭐⭐ |

## Recommendation

**Use Method 1 (Capacitor)** for the best developer experience and native capabilities. It's specifically designed for projects like yours and provides seamless integration with Lovable's development workflow.

Method 2 is suitable if you prefer a more web-centric approach or have specific PWA requirements, but requires more manual configuration and maintenance.

## Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [iOS App Store Guidelines](https://developer.apple.com/app-store/guidelines/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer/)
- [Lovable Mobile Development Blog](https://lovable.dev/blogs/TODO)

## Support

For any issues with Method 1 (Capacitor), ensure you've followed the exact steps and run `npx cap sync` after any changes to your web code.