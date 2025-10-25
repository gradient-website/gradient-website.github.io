'use client';

import { useRouter } from 'next/navigation';

import { HomePage } from '@/components/pages/HomePage';
import { pageToPath } from '@/lib/routes';

export default function Page() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    const targetPath = pageToPath[page] ?? '/';
    router.push(targetPath);
  };

  return <HomePage onNavigate={handleNavigate} />;
}
