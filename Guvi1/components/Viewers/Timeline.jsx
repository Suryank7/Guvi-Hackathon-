import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function Timeline({ scenes, currentScene, onSceneChange }) {
  const canGoPrevious = currentScene > 0;
  const canGoNext = currentScene < scenes.length - 1;

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case "generating":
        return <Clock className="w-3 h-3 text-amber-500 animate-pulse" />;
      case "error":
        return <AlertCircle className="w-3 h-3 text-red-500" />;
      default:
        return <Clock className="w-3 h-3 text-gray-400" />;
    }
  };

  return (
    <div className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onSceneChange(currentScene - 1)}
            disabled={!canGoPrevious}
            className="shrink-0 text-slate-300 border-slate-700 hover:bg-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex-1 overflow-x-auto">
            <div className="flex gap-2 min-w-max px-2">
              {scenes.map((scene, index) => (
                <motion.button
                  key={scene.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSceneChange(index)}
                  className={`relative flex-shrink-0 p-3 rounded-xl border-2 transition-all duration-300 ${
                    index === currentScene
                      ? "border-fuchsia-500 bg-gradient-to-br from-fuchsia-900/60 to-purple-900/60"
                      : "border-slate-800 hover:border-fuchsia-700 hover:bg-fuchsia-950/30"
                  }`}
                >
                  <div className="text-center min-w-[80px]">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {getStatusIcon(scene.status)}
                      <span className="text-xs font-medium text-slate-300">
                        Scene {index + 1}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-100 line-clamp-1">
                      {scene.title || `Scene ${index + 1}`}
                    </div>

                    {scene.image_url && (
                      <div className="w-12 h-8 mx-auto mt-2 rounded overflow-hidden bg-slate-700">
                        <img
                          src={scene.image_url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {index === currentScene && (
                    <motion.div
                      layoutId="activeSceneIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-fuchsia-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onSceneChange(currentScene + 1)}
            disabled={!canGoNext}
            className="shrink-0 text-slate-300 border-slate-700 hover:bg-slate-800"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-3">
          <Badge variant="outline" className="text-slate-300 border-slate-700">
            {currentScene + 1} of {scenes.length} scenes
          </Badge>
        </div>
      </div>
    </div>
  );
}
