'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const pathname = usePathname();
    return <Link href={href} className={`text-dark hover:underline ${pathname === href ? 'active' : ''}`}>{children}</Link>;
}