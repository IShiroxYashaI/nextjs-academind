import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage() {
const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>My Home Page</h1>
    </div>
  );
}