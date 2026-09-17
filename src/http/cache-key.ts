export function buildCacheKey(
  pathname: string,
  acceptVariant: string,
  rendererVersion: string,
  cacheScope = 'default',
): string {
  return `${pathname}::${acceptVariant}::${rendererVersion}::${encodeURIComponent(cacheScope)}`;
}
