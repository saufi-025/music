import { FaMusic, FaPodcast, FaPlus } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import Button from "./Elements/Button.js";
import "../index.css";
const Playlist = () => {
    return (
        <div className="h-full w-full bg-slate-900 p-4 text-white overflow-hidden">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Koleksi</h1>
                {/* Icon tambah */}
                <button className="bg-slate-300 text-slate-900 p-2 rounded-full shadow-md">
                    <FaPlus className="text-xl" />
                </button>
            </header>

            <div className="flex justify-start mb-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent hide-scroll-bar space-x-4">
                {["Playlist", "Lagu", "Albums", "Artist"].map((mood, index) => (
                    <Button key={index}>{mood}</Button>
                ))}
            </div>

            <section className="mb-96 py-4">
                <h2 className="text-lg font-bold mb-4">Aktivitas terbaru</h2>
                <div className="space-y-4">
                    <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                        <MdLibraryMusic className="text-3xl mr-5 text-blue-500" />
                        <div>
                            <h3 className="text-lg font-semibold mb-1">
                                Musik yang Disukai
                            </h3>
                            <p className="text-sm text-gray-400">
                                Playlist otomatis
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center bg-slate-800 p-4 rounded-lg">
                        <FaPodcast className="text-3xl mr-4 text-blue-500" />
                        <div>
                            <h3 className="text-lg font-semibold mb-1">
                                Episode untuk Nanti
                            </h3>
                            <p className="text-xs text-gray-400">
                                Episode yang Anda simpan untuk ditonton nanti
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Playlist;
