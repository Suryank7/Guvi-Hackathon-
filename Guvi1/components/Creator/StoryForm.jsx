import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Sparkles, Wand2, Shuffle } from "lucide-react";

const genres = [
  { value: "fantasy", label: "Fantasy", emoji: "🐉" },
  { value: "adventure", label: "Adventure", emoji: "🗺️" },
  { value: "mystery", label: "Mystery", emoji: "🕵️" },
  { value: "romance", label: "Romance", emoji: "💕" },
  { value: "sci-fi", label: "Sci-Fi", emoji: "🚀" },
  { value: "horror", label: "Horror", emoji: "👻" },
  { value: "comedy", label: "Comedy", emoji: "😄" },
  { value: "drama", label: "Drama", emoji: "🎭" },
];

const tones = [
  {
    value: "lighthearted",
    label: "Lighthearted",
    color: "bg-yellow-200 text-yellow-900",
  },
  { value: "serious", label: "Serious", color: "bg-gray-300 text-gray-900" },
  {
    value: "whimsical",
    label: "Whimsical",
    color: "bg-purple-300 text-purple-900",
  },
  { value: "dark", label: "Dark", color: "bg-slate-400 text-slate-900" },
  {
    value: "inspiring",
    label: "Inspiring",
    color: "bg-blue-300 text-blue-900",
  },
  {
    value: "humorous",
    label: "Humorous",
    color: "bg-green-300 text-green-900",
  },
];

const audiences = [
  { value: "children", label: "Children (5-12)", icon: "🧒" },
  { value: "young_adult", label: "Young Adult (13-18)", icon: "👦" },
  { value: "adult", label: "Adult (18+)", icon: "👤" },
  { value: "all_ages", label: "All Ages", icon: "👨‍👩‍👧‍👦" },
];

const artStyles = [
  { value: "cartoon", label: "Cartoon", preview: "🎨" },
  { value: "anime", label: "Anime", preview: "🌸" },
  { value: "watercolor", label: "Watercolor", preview: "🖌️" },
  { value: "realistic", label: "Realistic", preview: "📸" },
  { value: "digital_art", label: "Digital Art", preview: "💻" },
];

const moodEmojis = ["😊", "😮", "😍", "😢", "😨", "😂", "🤔", "😌", "🥳", "😤"];

const surprisePrompts = [
  "A magical library where books come alive at midnight",
  "Two rival space pirates discover they're siblings",
  "A detective who can solve crimes by tasting food",
  "A dragon who's afraid of flying learns courage",
  "Time-traveling barista saves the coffee universe",
];

export default function StoryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    prompt: "",
    title: "",
    genre: "",
    tone: "",
    target_audience: "",
    mood_emoji: "",
    art_style: "",
    scenes_count: 5,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSurpriseMe = () => {
    const randomPrompt =
      surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
    const randomGenre = genres[Math.floor(Math.random() * genres.length)].value;
    const randomTone = tones[Math.floor(Math.random() * tones.length)].value;
    const randomAudience =
      audiences[Math.floor(Math.random() * audiences.length)].value;
    const randomStyle =
      artStyles[Math.floor(Math.random() * artStyles.length)].value;
    const randomEmoji =
      moodEmojis[Math.floor(Math.random() * moodEmojis.length)];

    setFormData((prev) => ({
      ...prev,
      prompt: randomPrompt,
      genre: randomGenre,
      tone: randomTone,
      target_audience: randomAudience,
      art_style: randomStyle,
      mood_emoji: randomEmoji,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValid =
    formData.prompt &&
    formData.genre &&
    formData.tone &&
    formData.target_audience &&
    formData.art_style;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-slate-900/70 backdrop-blur-sm border-slate-800 shadow-2xl shadow-purple-950/20">
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-3 text-2xl text-slate-100">
            <Wand2 className="w-7 h-7 text-fuchsia-400" />
            Story Configuration
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Story Prompt */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="prompt"
                  className="text-lg font-semibold text-slate-200"
                >
                  Your Story Idea
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleSurpriseMe}
                  className="border-fuchsia-700 text-fuchsia-300 hover:bg-fuchsia-950"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Surprise Me!
                </Button>
              </div>
              <Textarea
                id="prompt"
                placeholder="Describe your story idea... (e.g., 'A young wizard discovers a secret garden where time moves differently')"
                value={formData.prompt}
                onChange={(e) => handleInputChange("prompt", e.target.value)}
                className="min-h-[120px] text-base border-slate-700 bg-slate-800/50 text-slate-200 placeholder:text-slate-500 focus:border-fuchsia-500 focus:ring-fuchsia-400"
              />
            </div>

            {/* Optional Title */}
            <div className="space-y-3">
              <Label
                htmlFor="title"
                className="text-lg font-semibold text-slate-200"
              >
                Story Title (Optional)
              </Label>
              <Input
                id="title"
                placeholder="Leave blank to let AI generate a title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="text-base border-slate-700 bg-slate-800/50 text-slate-200 placeholder:text-slate-500 focus:border-fuchsia-500 focus:ring-fuchsia-400"
              />
            </div>

            {/* Genre Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-slate-200">
                Genre
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {genres.map((genre) => (
                  <motion.button
                    key={genre.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("genre", genre.value)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                      formData.genre === genre.value
                        ? "border-fuchsia-500 bg-gradient-to-br from-fuchsia-900/60 to-purple-900/60 text-fuchsia-200 shadow-lg shadow-fuchsia-950/50"
                        : "border-slate-700 text-slate-300 hover:border-fuchsia-700 hover:bg-fuchsia-950/30"
                    }`}
                  >
                    <div className="text-2xl mb-2">{genre.emoji}</div>
                    <div className="font-semibold text-sm">{genre.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tone & Audience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-slate-200">
                  Tone
                </Label>
                <Select
                  value={formData.tone}
                  onValueChange={(value) => handleInputChange("tone", value)}
                >
                  <SelectTrigger className="h-12 text-base border-slate-700 bg-slate-800/50 text-slate-200 focus:border-fuchsia-500 focus:ring-fuchsia-400">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {tones.map((tone) => (
                      <SelectItem key={tone.value} value={tone.value}>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tone.color}`}
                        >
                          {tone.label}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-lg font-semibold text-slate-200">
                  Target Audience
                </Label>
                <Select
                  value={formData.target_audience}
                  onValueChange={(value) =>
                    handleInputChange("target_audience", value)
                  }
                >
                  <SelectTrigger className="h-12 text-base border-slate-700 bg-slate-800/50 text-slate-200 focus:border-fuchsia-500 focus:ring-fuchsia-400">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    {audiences.map((audience) => (
                      <SelectItem key={audience.value} value={audience.value}>
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{audience.icon}</span>
                          <span>{audience.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Art Style */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-slate-200">
                Visual Style
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {artStyles.map((style) => (
                  <motion.button
                    key={style.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("art_style", style.value)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                      formData.art_style === style.value
                        ? "border-fuchsia-500 bg-gradient-to-br from-fuchsia-900/60 to-purple-900/60 text-fuchsia-200 shadow-lg shadow-fuchsia-950/50"
                        : "border-slate-700 text-slate-300 hover:border-fuchsia-700 hover:bg-fuchsia-950/30"
                    }`}
                  >
                    <div className="text-2xl mb-2">{style.preview}</div>
                    <div className="font-semibold text-sm">{style.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mood Emoji */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-slate-200">
                Story Mood
              </Label>
              <div className="flex flex-wrap gap-3">
                {moodEmojis.map((emoji) => (
                  <motion.button
                    key={emoji}
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleInputChange("mood_emoji", emoji)}
                    className={`w-14 h-14 rounded-2xl border-2 text-2xl transition-all duration-300 flex items-center justify-center ${
                      formData.mood_emoji === emoji
                        ? "border-fuchsia-500 bg-gradient-to-br from-fuchsia-900/60 to-purple-900/60 shadow-lg transform scale-110"
                        : "border-slate-700 hover:border-fuchsia-700 hover:bg-fuchsia-950/30"
                    }`}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={!isValid}
                className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-700 hover:to-purple-700 text-white py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-purple-800/40"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                Generate My Story
                <Wand2 className="w-5 h-5 ml-3" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
