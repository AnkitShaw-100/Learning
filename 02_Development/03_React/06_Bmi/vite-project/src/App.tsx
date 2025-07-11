import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  Height: number;
  Weight: number;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [bmi, setBmi] = useState<number | null>(null);

  const onSubmit = (data: FormValues) => {
    const heightInMeters = data.Height / 100;
    const calculatedBmi = data.Weight / (heightInMeters * heightInMeters);
    setBmi(Number(calculatedBmi.toFixed(2)));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-white"
              htmlFor="height"
            >
              Height (cm)
            </label>
            <input
              id="height"
              type="number"
              {...register("Height", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your height"
            />
            {errors.Height && (
              <p className="text-red-400 text-sm mt-1">Height is required.</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium " htmlFor="weight">
              Weight (kg)
            </label>
            <input
              id="weight"
              type="number"
              {...register("Weight", { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your weight"
            />
            {errors.Weight && (
              <p className="text-red-400 text-sm mt-1">Weight is required.</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-lg transition"
          >
            Calculate BMI
          </button>
        </form>
        <p className="mt-6 text-center text-white text-lg">
          {bmi !== null ? `Your BMI is: ${bmi}` : "Let's see your BMI"}
        </p>
      </div>
    </div>
  );
};

export default App;
