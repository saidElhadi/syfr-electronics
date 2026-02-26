import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK (server-side only)
function initAdmin() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // Use service account from environment variables
  const serviceAccount: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // The private key comes as a string with escaped newlines from env
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  return initializeApp({
    credential: cert(serviceAccount),
  });
}

const app = initAdmin();
export const adminDb = getFirestore(app);
export const adminAuth = getAuth(app);
