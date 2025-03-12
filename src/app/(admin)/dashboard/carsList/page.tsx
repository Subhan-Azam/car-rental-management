import CarsListCard from "@/components/carsList/CarsListCard";

export default function CarList() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Car List</h1>
      <div className="space-y-4">
        <CarsListCard />
      </div>
    </div>
  );
}
