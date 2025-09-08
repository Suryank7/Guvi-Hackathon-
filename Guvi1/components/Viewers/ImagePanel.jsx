import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Image, RefreshCw, Palette } from "lucide-react";

export default function ImagePanel({ scene, story }) {
  if (!scene) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full bg-slate-900/70 backdrop-blur-sm border-slate-800 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant="outline"
              className="text-fuchsia-400 border-fuchsia-700"
            >
              <Palette className="w-3 h-3 mr-1" />
              {story.art_style?.replace("_", " ")} Style
            </Badge>
            <Badge
              className={
                scene.status === "completed"
                  ? "bg-green-900/50 text-green-300"
                  : scene.status === "generating"
                  ? "bg-amber-900/50 text-amber-300"
                  : "bg-red-900/50 text-red-300"
              }
            >
              {scene.status === "generating" && (
                <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
              )}
              Image {scene.status}
            </Badge>
          </div>

          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            {scene.image_url ? (
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={scene.image_url}
                alt={scene.title}
                className="w-full h-full object-cover"
              />
            ) : scene.status === "generating" ? (
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-fuchsia-500 border-t-transparent rounded-full mx-auto mb-4"
                />
                <p className="text-slate-300 font-medium">
                  Generating image...
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  This may take a few moments
                </p>
              </div>
            ) : (
              <div className="text-center text-slate-500">
                <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="font-medium">Image not available</p>
              </div>
            )}
          </div>

          {scene.image_prompt && (
            <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">
                Image Description
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {scene.image_prompt}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
