'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Navigation } from './Navigation';
import { pageToPath, pathToPage } from '@/lib/routes';

export function NavigationWithRouter() {
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = pathname ? pathToPage[pathname] ?? 'home' : 'home';

  const handleNavigate = (page: string) => {
    const targetPath = pageToPath[page] ?? '/';
    router.push(targetPath as any);
  };

  return <Navigation currentPage={currentPage} onNavigate={handleNavigate} />;
}
