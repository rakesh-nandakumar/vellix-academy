import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login – Vellix Academy",
  description: "Sign in to access your Vellix Academy student portal.",
};

export default function LoginPage() {
  return (
    <section className="flex min-h-[80vh] items-center bg-gradient-to-b from-sky-50/70 to-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-navy-950/5 sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy-950">
              Student Login
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              Sign in to access your Vellix Academy student portal.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
