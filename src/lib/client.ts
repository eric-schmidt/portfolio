import resolveResponse from "contentful-resolve-response";
import safeJsonStringify from "safe-json-stringify";

export const getEntriesByType = async ({
  preview = false,
  contentType,
  includeDepth = 0,
}: {
  preview?: boolean;
  contentType: string;
  includeDepth?: number;
}) => {
  // Determine whether to use the preview or delivery domain + API key.
  const domain = preview ? "preview.contentful.com" : "cdn.contentful.com";
  const apiKey = preview
    ? process.env.CONTENTFUL_PREVIEW_KEY
    : process.env.CONTENTFUL_DELIVERY_KEY;

  const res = await fetch(
    `https://${domain}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV_ID}/entries?content_type=${contentType}&include=${includeDepth}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();

  return resolveJsonData(jsonData);
};

export const getEntryBySlug = async ({
  preview = false,
  contentType,
  slug,
  includeDepth = 10,
}: {
  preview?: boolean;
  contentType: string;
  slug: string;
  includeDepth: number;
}) => {
  // Determine whether to use the preview or delivery domain + API key.
  const domain = preview ? "preview.contentful.com" : "cdn.contentful.com";
  const apiKey = preview
    ? process.env.CONTENTFUL_PREVIEW_KEY
    : process.env.CONTENTFUL_DELIVERY_KEY;

  const res = await fetch(
    `https://${domain}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENV_ID}/entries?content_type=${contentType}&fields.slug=${slug}&include=${includeDepth}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      // Add cache tags that we can later invalidate via Contentful webhook.
      next: { tags: [slug] },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();

  return resolveJsonData(jsonData);
};

const resolveJsonData = (jsonData: JSON) => {
  // Uses https://github.com/contentful/contentful-resolve-response to automatically resolve references.
  const resolvedJsonData = resolveResponse(jsonData);
  // Uses https://github.com/debitoor/safe-json-stringify to prevent circular reference errors.
  const safeJsonData = JSON.parse(safeJsonStringify(resolvedJsonData));
  return safeJsonData;
};
