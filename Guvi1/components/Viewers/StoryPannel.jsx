import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BookOpen, RefreshCw } from "lucide-react";

export default function StoryPanel({ scene, sceneNumber, totalScenes }) {
  if (!scene) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full bg-slate-900/70 backdrop-blur-sm border-slate-800 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-cyan-400 border-cyan-700">
              <BookOpen className="w-3 h-3 mr-1" />
              Scene {sceneNumber} of {totalScenes}
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
              {scene.status}
            </Badge>
          </div>

          <CardTitle className="text-2xl text-slate-100 leading-tight">
            {scene.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="prose prose-invert max-w-none">
            {scene.text.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-300 leading-relaxed mb-4 text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
