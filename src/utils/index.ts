import { PRIVATE_PAGES } from '@/constants';

export function getFullName(obj?: { FirstName?: string | null; LastName?: string | null } | null) {
  return `${obj?.FirstName ?? ''} ${obj?.LastName ?? ''}`;
}

export function isPrivatePage(url: string) {
  const privatePathnameRegex = RegExp(
    `^(${PRIVATE_PAGES.flatMap((p) => (p === '/' ? ['', '/'] : p)).join('|')})/?$`,
    'i',
  );
  return privatePathnameRegex.test(url);
}
