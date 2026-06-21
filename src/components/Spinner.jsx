const Spinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-infinity loading-xl text-amber-900"></span>
                <p className="text-amber-900 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default Spinner;