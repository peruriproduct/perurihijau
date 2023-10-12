import { Poppins, Montserrat } from "next/font/google";

const pops = Poppins({ weight: ["200", "400", "500", "600","700", "800"], subsets: ["latin"] });
const mons = Montserrat({ weight: ["400", "500", "600","700", "800"], subsets: ["latin"] });

export {pops, mons};