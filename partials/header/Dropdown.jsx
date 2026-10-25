import { FaUser } from "react-icons/fa6"
import { IoMdSettings } from "react-icons/io"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Dropdown() {
  return (
    <motion.div className="absolute right-0 top-14 z-20 min-w-52 overflow-hidden rounded-2xl border-2 border-[#4844606e] bg-[#17151e]/90 px-2 pb-2 pt-4 text-[14px] backdrop-blur-2xl" style={{ transformOrigin: "top right" }} initial={{ scale: 0.6 }} animate={{ scale: 1 }}>
      <div className="px-2 pb-2 font-semibold text-white">Guest mode</div>
      <Link className="flex items-center gap-2 rounded-xl px-2 py-2 text-slate-200 hover:bg-[#262232]" href="/profile"><FaUser /><span>Profile</span></Link>
      <Link href="/settings" className="flex items-center gap-2 rounded-xl px-2 py-2 text-slate-200 hover:bg-[#231f2f]"><IoMdSettings /><span>Settings</span></Link>
    </motion.div>
  )
}
