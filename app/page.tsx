'use client';
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null;

  useEffect(() => {
    if (!user && !userSession) {
      router.push('/sign-up');
    }
  }, [user, userSession, router]);

  const handleSignOut = () => {
    signOut(auth);
    sessionStorage.removeItem('user');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleSignOut} className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
        Log out
      </button>
      

      

    </main>
  );
}
