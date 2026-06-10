import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register – Vellix Academy",
  description:
    "Apply to Vellix Academy. Fill in the application form and our admissions team will contact you within 24 hours.",
};

export default function RegisterPage() {
  return (
    <section className="flex min-h-[80vh] items-center bg-gradient-to-b from-sky-50/70 to-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-navy-950/5 sm:p-11">
          <div className="mb-9 text-center">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy-950">
              Apply to Vellix Academy
            </h1>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              Fill in the form below and our admissions team will contact you
              within 24 hours.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
