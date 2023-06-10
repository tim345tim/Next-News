import Link from 'next/link';

function NavBar() {
    return (
       <nav className="px-2 py-1 text-sm bg-slate-300">
            <ul className="flex gap-4">

                <li className="text-lg font-extrabold flex-1">
                    <Link href="/">News!</Link>
                </li>
                <li className="text-lg font-extrabold flex-1">
                <Link href="/business">Business</Link>
                </li>
                <li className="text-lg font-extrabold flex-1">
                <Link href="/entertainment">Entertainment</Link>
                    </li>
                    <li className="text-lg font-extrabold flex-1">
                    <Link href="/health">Health</Link>
                    </li>
                    <li className="text-lg font-extrabold flex-1">
                    <Link href="/science">Science</Link>
                    </li>
                    <li className="text-lg font-extrabold flex-1">
                    <Link href="/sports">Sports</Link>
                    </li>
                    <li className="text-lg font-extrabold flex-1">
                    <Link href="/technology">Technology</Link>
                    </li>
            </ul>

       </nav> 
    );
}

export default NavBar;

