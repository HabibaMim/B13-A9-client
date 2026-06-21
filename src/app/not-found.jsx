import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center px-6">
            <div className="text-center max-w-md">

                <div className="text-8xl mb-4">📚</div>

                <h1 className="text-6xl font-bold text-amber-900 mb-2">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-amber-800 mb-3">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-8">
                    
                </p>

                <Link
                    href="/"
                    className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-xl font-semibold transition"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
}