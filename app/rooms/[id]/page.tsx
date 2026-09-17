import RoomClient from "./RoomClient";

export const dynamic = 'force-static';

// This satisfies the static export requirement
export async function generateStaticParams() {
  return [{ id: 'default' }];
}

export default function RoomPage({ params }: { params: { id: string } }) {
  return <RoomClient params={params} />;
}
