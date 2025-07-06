// src/app/page.tsx (Next.js App Router + Tailwind)
'use client';
import Image from "next/image";
import { Boxes, Car, Hamburger, Wrench } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Selamat Datang</p>
        </div>
        <Link
          href="/login"
          className="bg-black hover:gray-800 text-white text-sm px-4 py-2 rounded-full transition"
        >
          Login
        </Link>
      </div>

      {/* Promo Banner */}
      <div className="rounded-xl overflow-hidden relative h-32">
        <Image
          width={40}
          height={40}
          src="/avatar.png"
          alt="User Avatar"
          className="rounded-full border"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-center p-2">
          <div>
            <p className="font-semibold">My Yakes</p>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-lg font-semibold">For you</h2>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="https://forms.gle/YSkFscL8DPJQtvup7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-xl flex flex-col items-center justify-center p-4 space-y-2 hover:bg-gray-200 transition"
        >
          <Car className="w-15 h-15" />
          <div className="text-sm font-medium">Mobil</div>
        </Link>
        <Link
          href="https://forms.gle/YSkFscL8DPJQtvup7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-xl flex flex-col items-center justify-center p-4 space-y-2 hover:bg-gray-200 transition"
        >
          <Boxes className="w-15 h-15" />
          <div className="text-sm font-medium">Ruang Meeting</div>
        </Link>
        <Link
          href="https://forms.gle/YSkFscL8DPJQtvup7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-xl flex flex-col items-center justify-center p-4 space-y-2 hover:bg-gray-200 transition"
        >
          <Hamburger className="w-10 h-10" />
          <div className="text-sm font-medium">Snack</div>
        </Link>
        <Link
          href="https://forms.gle/YSkFscL8DPJQtvup7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-xl flex flex-col items-center justify-center p-4 space-y-2 hover:bg-gray-200 transition"
        >
          <Wrench className="w-15 h-15" />
          <div className="text-sm font-medium">Service</div>
        </Link>
      </div>
    </div>
  );
}
