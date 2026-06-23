import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { careers } from "@/lib/data";

export const metadata = {
  title: "Apply Now – Vellix Academy",
  description:
    "Apply for open positions at Vellix Academy. Submit your CV and join our team of educators and industry professionals.",
};

export default function ApplyPage() {
  return (
    <>
      <PageBanner title="Apply Now" breadcrumbs={[{ label: "Careers", href: "/careers" }, { label: "Apply Now" }]} />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Apply for a Position"
            subtitle="Fill out the form below to apply for an open position at Vellix Academy. We'll review your application and get back to you."
          />

          <div className="mx-auto mt-12 max-w-2xl">
            <form className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-navy-950/5">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-navy-950">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-navy-950">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-950">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-950">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  placeholder="+94 XX XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-semibold text-navy-950">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={2}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <label htmlFor="position" className="mb-2 block text-sm font-semibold text-navy-950">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  name="position"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="">Select a position</option>
                  {careers.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title} ({job.type})
                    </option>
                  ))}
                  <option value="Future Lecturer Pool">Future Lecturer Pool Registration</option>
                </select>
              </div>

              <div>
                <label htmlFor="cv" className="mb-2 block text-sm font-semibold text-navy-950">
                  Upload CV *
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-600 hover:file:bg-sky-100"
                />
                <p className="mt-1 text-xs text-slate-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label htmlFor="coverLetter" className="mb-2 block text-sm font-semibold text-navy-950">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  placeholder="Tell us about yourself, your experience, and why you're interested in this position..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:ring-offset-2"
              >
                Submit Application
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting this form, you agree to our privacy policy and consent to being contacted regarding your application.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
