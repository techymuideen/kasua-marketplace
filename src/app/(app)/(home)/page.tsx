import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import type { CollectionSlug } from 'payload';

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories' as CollectionSlug,
  });

  return <div>{JSON.stringify(data)}</div>;
}
