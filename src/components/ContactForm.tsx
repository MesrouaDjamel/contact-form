"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "../../lib/utils";
import Toast from "./Toast";

const ContactFormSchema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .min(1, { message: "Please enter a valid email address" })
    .email(),
  // queryType: z
  //   .string()
  //   .nullable()
  //   .refine((val) => val !== null && val.length > 0, {
  //     message: "Please select a query type",
  //   }),
  queryType: z.enum(["General Enquiry", "Support Request"], {
    errorMap: () => ({ message: "Please select a query type" }),
  }),
  message: z.string().min(1, { message: "This field is required" }),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "To submit this form, please consent to being contracted",
    }),
  }),
});

type TContactForm = z.infer<typeof ContactFormSchema>;
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitSuccessful },
    watch,
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = () => {
  };
  const term = watch("terms");
  const queryType = watch("queryType");
  console.log("Term:", term, "queryType:", queryType);

  return (
    <div className="bg-white rounded-lg  p-6 md:p-10 max-w-[400px] md:min-w-[730px]">
      <h1 className="text-[2rem] text-grey900 font-bold pb-10">ContactForm</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col"
      
      >
        {/* User Info */}
        <div className="gap-7 flex flex-col">
          <div className="flex flex-col  gap-7 md:flex-row">
            <div className="flex flex-col gap-3 md:flex-1">
              <div className="flex items-center justify-between">
                <label className="text-grey900" htmlFor="firstName">
                  First Name *
                </label>
                {errors.firstName && (
                  <p className="text-redError">{errors.firstName.message}</p>
                )}
              </div>
              <input
                {...register("firstName")}
                type="text"
                className={cn(
                  errors.firstName
                    ? "border-redError transition-all ease-in-out duration-200"
                    : "focus:border-focusInput"
                )}
                id="firstName"
              />
            </div>

            <div className="flex flex-col gap-3 md:flex-1">
              <div className="flex items-center justify-between">
                <label className="text-grey900" htmlFor="lastName">
                  Last Name *
                </label>
                {errors.lastName && (
                  <p className="text-redError">{errors.lastName.message}</p>
                )}
              </div>
              <input
                {...register("lastName")}
                type="text"
                className={cn(
                  errors.lastName
                    ? "border-redError transition-all ease-in-out duration-200"
                    : "focus:border-focusInput"
                )}
                id="lastName"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-grey900" htmlFor="email">
                Email Address *
              </label>
              {errors.email && (
                <p className="text-redError">{errors.email.message}</p>
              )}
            </div>

            <input
              {...register("email")}
              type="email"
              id="email"
              className={cn(
                errors.email
                  ? "border-redError transition-all ease-in-out duration-200"
                  : "focus:border-focusInput"
              )}
            />
          </div>
        </div>

        {/* Query Type */}
        <div className="flex items-center justify-between pt-6 pb-5">
          <label className="text-grey900 " htmlFor="queryType">
            Query Type *
          </label>
          {errors.queryType && (
            <p className="text-redError">{errors.queryType.message}</p>
          )}
        </div>
        <div className="gap-4 flex flex-col md:flex-row ">
          <div
            className={cn(
              `queryTypeItem flex items-center md:flex-1 pl-6 gap-4 `,
              queryType === "General Enquiry" &&
                "border-focusInput bg-[#E0F1E7]"
            )}
          >
            {queryType === "General Enquiry" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path
                  fill="#0C7D69"
                  d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"
                />
              </svg>
            ) : (
              <input
                {...register("queryType")}
                className="size-4 cursor-pointer"
                type="radio"
                value="General Enquiry"
                id="queryType"
              />
            )}

            <label className="text-grey900 text-[18px]" htmlFor="queryType">
              General Enquiry
            </label>
          </div>

          <div
            className={cn(
              `queryTypeItem flex items-center md:flex-1 pl-6 gap-4 `,
              queryType === "Support Request" &&
                "border-focusInput bg-[#E0F1E7]"
            )}
          >
            {queryType === "Support Request" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                fill="none"
                viewBox="0 0 20 21"
              >
                <path
                  fill="#0C7D69"
                  d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"
                />
              </svg>
            ) : (
              <input
                {...register("queryType")}
                className="size-4 cursor-pointer"
                type="radio"
                value="Support Request"
                id="queryType"
              />
            )}

            <label className="text-grey900 text-[18px]" htmlFor="queryType">
              Support Request
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col pt-7 gap-4">
          <div className="flex items-center justify-between">
            <label className="text-grey900" htmlFor="message">
              Message *
            </label>
            {errors.message && (
              <p className="text-redError">{errors.message.message}</p>
            )}
          </div>
          <textarea
            {...register("message")}
            className={cn(
              `p-4 h-40`,
              errors.message
                ? "border-redError transition-all ease-in-out duration-200"
                : "focus:border-focusInput"
            )}
            id="message"
          ></textarea>
        </div>

        {/* Terms and Conditions */}
        <div className="flex flex-col gap-2 py-11 ">
          <div className="flex items-center gap-7 ">
            <input
              {...register("terms")}
              className="size-4 cursor-pointer accent-[#0C7D69]"
              type="checkbox"
              id="terms"
            />

            <div className="flex flex-col flex-wrap">
              <label className="text-grey900 font-medium" htmlFor="terms">
                I consent to being contracted by the team
              </label>
              {errors.terms && (
                <p className="text-redError text-[1rem]">
                  {errors.terms.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          className="h-16 bg-green600 text-white font-bold  hover:bg-hoverBtn transition-all ease-in-out duration-200 rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>

      {isSubmitSuccessful && <Toast />}
    </div>
  );
};

export default ContactForm;
