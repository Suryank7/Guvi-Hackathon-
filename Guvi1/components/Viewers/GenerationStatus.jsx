import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GenerationStatus({ status }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white p-4 text-center"
    >
      <div className="flex items-center justify-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
        <span className="font-medium">{status}</span>
      </div>
    </motion.div>
  );
}
