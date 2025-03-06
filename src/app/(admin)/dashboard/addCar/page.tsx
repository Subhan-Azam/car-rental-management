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
    description,
    setDescription,
    handleImageChange,
    submitHandler,
    loading,
    errorMessage,
  } = useAddCar();

  return (
    <div className="bg-white p-7 rounded-md">
      <div className="mb-6">
        <h1 className="text-[#242731] text-xl md:text-2xl font-bold mb-2">
          Profile
        </h1>
        <p className="text-[#5F6165] text-[16px] md:text-base">
          Update your photo and personal details here.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        className="max-w-[788px] flex flex-col gap-6 my-6"
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
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="Car Description"
          className="w-full p-2 border focus:outline-[#A162F7] rounded"
          rows={3}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <AuthBtn title="Submit" loading={loading} />
      </form>
    </div>
  );
};

export default AddCar;

{
  /* <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2"
        />
        <button
          type="button"
          onClick={uploadImage}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Upload Image
        </button> */
}

{
  /* Show Uploaded Images */
}
{
  /* {image && (
          <div className="mt-4">
            <p>Uploaded Image:</p>
            <Image
              src={image}
              alt="Uploaded Car"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        )} */
}
