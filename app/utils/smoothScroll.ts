import { animate } from "framer-motion";

export const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);

    if(element) {
        const offsetTop = element.offsetTop;
        animate(window.scrollY, offsetTop, {
            duration: 0.8,
            onUpdate: (latest) => window.scrollTo(0, latest),
        })
    }
} 