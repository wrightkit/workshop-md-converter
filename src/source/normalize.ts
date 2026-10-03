import type { NormalizedArticle, WorkshopArticleRaw, WorkshopListRaw } from '../core/types';
import { extractArticles, normalizeWorkshopArticle } from './workshop-adapter';

export function normalizeWorkshopList(raw: WorkshopListRaw | WorkshopArticleRaw[], publicBaseUrl: string, upstreamBaseUrl: string): NormalizedArticle[] {
  return extractArticles(raw).map((item) => normalizeWorkshopArticle(item, publicBaseUrl, upstreamBaseUrl));
}
