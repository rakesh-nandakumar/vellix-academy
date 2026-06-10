"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { inputCls, labelCls } from "@/components/formStyles";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div>
          <label htmlFor="login-email" className={labelCls}>Email Address *</label>
          <input
            id="login-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="login-password" className={labelCls}>Password *</label>
          <input
            id="login-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className={inputCls}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-slate-500">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 accent-sky-500"
          />
          Remember me
        </label>
        <a href="#" className="font-semibold text-sky-600 transition hover:text-sky-500">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="mt-6 w-full" size="lg">
        Login
        <Icon name="log-in" className="h-4 w-4" />
      </Button>

      <p className="mt-5 text-center text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-sky-600 transition hover:text-sky-500">
          Apply Now
        </Link>
      </p>
    </form>
  );
}
