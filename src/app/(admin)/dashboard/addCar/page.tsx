"use client";
import CarDropDown from "@/components/addCar/CarDropDown";
import CarInput from "@/components/addCar/CarInput";
import AuthBtn from "@/components/button/AuthBtn";
import useAddCar from "@/hooks/useAddCar";

const AddCar = () => {
  const {
    carName,
    setCarName,
    model,
    setModel,
    mileage,
    setMileage,
    engineType,
    setEngineType,
    transmissionType,
    setTransmissionType,
    price,
    setPrice,
    carType,
    setCarType,
    description,
    setDescription,
    handleImageChange,
    submitHandler,
    loading,
  } = useAddCar();

  return (
    <div className="bg-white  p-7 rounded-md dark:bg-[#242731] transition-all duration-300">
      <div className="mb-6">
        <h1 className="text-[#242731] text-xl md:text-2xl font-bold mb-2 dark:text-white">
          Add Car
        </h1>
        <p className="text-[#7C7C8D] text-[16px] md:text-base">
          You can add a new car
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="max-w-[788px] flex flex-col gap-8 my-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CarInput
            type="text"
            placeholder="Enter car name"
            title="Car Name:"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          />
          <CarInput
            type="number"
            placeholder="Enter model year"
            title="Model Year:"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <CarInput
          type="text"
          placeholder="Enter mileage"
          title="Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CarDropDown
            value={engineType}
            onChange={(e) => setEngineType(e.target.value)}
            options={["Select Engine Type", "Petrol", "Diesel", "Electric"]}
            title="Engine Type"
          />
          <CarDropDown
            value={transmissionType} // ✅ Bind state
            onChange={(e) => setTransmissionType(e.target.value)} // ✅ Update state
            options={["Transmission Type", "Automatic", "Manual"]}
            title="Transmission Type"
          />
        </div>

        <CarInput
          type="number"
          placeholder="Enter price"
          title="Price:"
          value={price}
          onChange={(e) => setPrice(e.target.value as string)}
        />

        <CarDropDown
          value={carType} // ✅ Bind state
          onChange={(e) => setCarType(e.target.value)} // ✅ Update state
          options={[
            "Car Type",
            "LuxuryCar",
            "VintageCar",
            "FamiliyCar",
            "OffRoadCar",
          ]}
          title="Car Type"
        />

        <div>
          <label className="block text-[#7C7C8D] mb-2 font-[500] dark:text-[#E0E4E7]">
            Description:
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="Car Description"
            className="w-full px-[22px] py-[14px] font-[500] text-[#5F6165] border outline-none focus:outline-[#A162F7] dark:bg-[#1F2128] dark:text-[#7C7C8D] dark:border-[#2C303D] rounded-[10px] transition-all duration-300"
            rows={3}
            required
          ></textarea>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="dark:bg-[#1F2128] text-[#7C7C8D] rounded-[10px] transition-all duration-300"
          required
        />

        <AuthBtn title="Submit" loading={loading} />
      </form>
    </div>
  );
};

export default AddCar;
