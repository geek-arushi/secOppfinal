import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/919510104052" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "100px", // Adjusted size
                height: "100px", // Adjusted size
                zIndex: 1000, // Ensures it stays above other elements
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px", padding: "2px" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/img/photos/whatsapp.png`}
                    alt="WhatsApp"
                    width="50"
                    height="50"
                />
            </motion.div>
        </motion.a>
    );
}

export default FloatingWhatsApp;
