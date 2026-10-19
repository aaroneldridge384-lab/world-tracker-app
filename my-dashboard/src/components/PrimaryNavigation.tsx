'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { href: '/', label: 'Party Roster', icon: '♟' },
    { href: '/create', label: 'Character Creator', icon: '✦' },
    { href: '/maps', label: 'Map Studio', icon: '⌖' },
    { href: '/story', label: 'Story & Quests', icon: '❖' },
    { href: '/locations', label: 'World Directory', icon: '⌂' },
];

export default function PrimaryNavigation() {
    const pathname = usePathname();

    return (
        <nav aria-label="Main navigation" className="flex w-full gap-1 overflow-x-auto pb-1 text-sm sm:w-auto sm:pb-0">
            {navigation.map((item) => {
                const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 font-sans text-xs font-semibold transition sm:text-sm ${active ? 'border-[#dfbd73]/60 bg-[#b8860b]/25 text-[#ffe5a7] shadow-[inset_0_1px_rgba(255,255,255,0.08)]' : 'border-transparent text-[#eadcc2] hover:border-white/10 hover:bg-white/10 hover:text-white'}`}
                    >
                        <span aria-hidden="true" className="text-[#e0bd69]">{item.icon}</span>{item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
