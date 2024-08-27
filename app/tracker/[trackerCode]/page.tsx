import { Tracking } from "@/components/tracker/Tracking";

export default function TrackingPage({
  params,
}: {
  params: { trackerCode: string };
}) {
  console.log(params);
  return (
    <div>
      <Tracking trackerCode={params.trackerCode} />
    </div>
  );
}
