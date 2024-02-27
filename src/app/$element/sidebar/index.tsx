'use client'
import { AnimatePresence, motion } from 'framer-motion'

interface SidebarProps {
    open: boolean;
    setSidebar: (e: boolean) => void;
    menu: string[]
}
const Sidebar: React.FC<SidebarProps> = ({ open, setSidebar, menu }) => {


    return (
        <>
            {
                open &&
                <>
                    <AnimatePresence>
                        <motion.div
                            className="fixed inset-0 bg-black z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            onClick={() => setSidebar(false)}
                        />
                    </AnimatePresence>
                    <motion.ul
                        id="sidebar"
                        animate={{ left: open ? 0 : '-100%' }}
                        className={
                            "fixed h-screen top-0 bottom-0 -left-full z-40 w-[300px] lg:static " +
                            "flex flex-col " +
                            "bg-white border-r "}
                    >
                        {
                            menu.map((item, index) => {
                                return (
                                    <p className="hover:bg-text-primary hover:text-white cursor-pointer font-semibold px-5 py-4 border-b text-text-primary font-pt-sans" key={index}>{item}</p>
                                )
                            })
                        }
                    </motion.ul>
                </>
            }
        </>
    )
}

export default Sidebar;