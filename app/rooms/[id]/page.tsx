import RoomClient from "./RoomClient";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ id: 'default' }];
}

// In Next.js 15, params must be typed as a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RoomPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <RoomClient params={resolvedParams} />;
}
