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

export const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
};

export const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
};