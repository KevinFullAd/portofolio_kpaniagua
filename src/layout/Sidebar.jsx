import { useState } from 'react'
import {
    ChevronDown,
    AtSign,
    Linkedin,
    Github,
    MapPin

} from 'lucide-react'
import {
    SiWhatsapp
} from "@icons-pack/react-simple-icons"
import FlashIcon from '../components/ui/FlashIcon'
import avatar from '../assets/images/my-avatar.png'
export default function Sidebar() {
    const [open, setOpen] = useState(false)

    return (
        <aside className="w-full lg:w-85 p-4 lg:p-6">
            <div className="relative bg-linear-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center gap-4 p-5 relative">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center">
                        <img
                            src={avatar}
                            alt="Kevin Paniagua"
                            className="w-16 h-16 rounded-xl object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold text-white leading-tight">
                            Kevin Paniagua
                        </h1>

                        <span className="inline-block mt-1 px-3 py-1 text-xs rounded-sm bg-zinc-800 text-zinc-200">
                            Desarrollador web
                        </span>
                    </div>

                    {/* Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle contacts"
                        className="
                            ml-auto absolute -right-1 top-0
                            p-2 rounded-bl-2xl w-10 h-10
                            overflow-hidden
                            bg-linear-to-br from-yellow-300/30 to-60% to-transparent
                            focus:outline-none focus-visible:outline-none
                        "
                    >
                        {/* Borde interno top+left con gradiente */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-bl-2xl"
                            style={{
                                // Dibuja 2 “líneas” internas: arriba y izquierda, ambas con gradiente a transparente.
                                background: `
                                    linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0) 65%) top / 100% 1px no-repeat,
                                    linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0) 65%) left / 1px 100% no-repeat
                                `
                            }}
                        />
                        <ChevronDown color='#ffc462' className={` transition-transform duration-300 ${open ? "rotate-180" : "0"}`} />
                    </button>



                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mx-5" />

                {/* Contacts */}
                <div
                    className={`
                    transition-all duration-300 overflow-hidden
                    ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                `}
                >
                    <div className="p-5 space-y-5 text-sm">

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-yellow-400">
                                <AtSign />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-xs">EMAIL</p>
                                <a
                                    href="mailto:richard@example.com"
                                    className="text-white hover:underline"
                                >
                                    kevin.paniagua@gmail.com
                                </a>
                            </div>
                        </div>



                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-yellow-400">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-xs uppercase">Direccion</p>
                                <p className="text-white">
                                    Buenos Aires, Argentina.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mx-5" />

                    {/* Social */}
                    <div className="p-5 flex gap-4 text-zinc-400">
                        <FlashIcon flashColor="#0270AD">
                            <Linkedin />
                        </FlashIcon>

                        <FlashIcon flashColor="#5A63C4">
                            <Github />
                        </FlashIcon>

                        <FlashIcon flashColor="#1DAA61">
                            <SiWhatsapp />
                        </FlashIcon>
                    </div>
                </div>
            </div>
        </aside>
    )
}
