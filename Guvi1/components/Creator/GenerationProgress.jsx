import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Image, Wand2 } from "lucide-react";

export default function GenerationProgress({ step }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-slate-900/80 backdrop-blur-sm border-slate-800 shadow-2xl shadow-purple-950/30">
        <CardContent className="p-12 text-center">
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-700/40"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>

            {/* Floating icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-12"
            >
              <BookOpen className="w-8 h-8 text-cyan-400 opacity-60" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-2 -right-12"
            >
              <Image className="w-8 h-8 text-fuchsia-400 opacity-60" />
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 left-0"
            >
              <Wand2 className="w-8 h-8 text-purple-500 opacity-60" />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Weaving Your Story...
          </h2>

          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Our AI is crafting your unique narrative with beautiful visuals
          </p>

          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-300 font-semibold text-lg"
          >
            {step}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
