#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 AI Career Mentor - Deployment Script\n');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.log('📦 Building project...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!\n');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Build folder already exists\n');
}

// Display deployment options
console.log('🌐 Choose your deployment method:\n');
console.log('1. Netlify (Drag & Drop)');
console.log('   - Go to https://netlify.com');
console.log('   - Drag the "dist" folder to deploy\n');

console.log('2. Vercel');
console.log('   - Go to https://vercel.com');
console.log('   - Connect your GitHub repository\n');

console.log('3. Surge.sh (Quick)');
console.log('   - Run: npm install -g surge');
console.log('   - Run: surge dist/\n');

console.log('4. GitHub Pages');
console.log('   - Push to GitHub');
console.log('   - Enable GitHub Pages in repository settings\n');

console.log('5. Firebase Hosting');
console.log('   - Run: npm install -g firebase-tools');
console.log('   - Run: firebase init hosting');
console.log('   - Run: firebase deploy\n');

console.log('📁 Your built files are in the "dist" folder');
console.log('📖 For detailed instructions, see DEPLOYMENT.md');

// Check if surge is available for quick deploy
try {
  execSync('surge --version', { stdio: 'pipe' });
  console.log('\n⚡ Quick deploy with Surge available!');
  console.log('   Run: surge dist/');
} catch (error) {
  console.log('\n💡 Install Surge for quick deployment: npm install -g surge');
}
