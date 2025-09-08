import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Sparkles, BookOpen, User, Home, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Home",
    url: createPageUrl("Landing"),
    icon: Home,
  },
  {
    title: "Create Story",
    url: createPageUrl("Creator"),
    icon: Plus,
  },
  {
    title: "My Stories",
    url: createPageUrl("Stories"),
    icon: BookOpen,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="dark min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40">
        <Sidebar className="border-r border-slate-800/60 bg-slate-950/80 backdrop-blur-sm">
          <SidebarHeader className="border-b border-slate-800/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-700/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100">
                  AI StoryWeaver
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  Craft magical stories with AI
                </p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`hover:from-fuchsia-900/40 hover:to-purple-900/40 hover:text-fuchsia-300 transition-all duration-300 rounded-xl mb-2 text-slate-300 ${
                          location.pathname === item.url
                            ? "bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 text-fuchsia-200 shadow-sm"
                            : ""
                        }`}
                      >
                        <Link
                          to={item.url}
                          className="flex items-center gap-3 px-4 py-3"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-3">
                Quick Stats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-4 py-3 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <BookOpen className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">Stories Created</span>
                    <span className="ml-auto font-bold text-cyan-400">0</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Sparkles className="w-4 h-4 text-fuchsia-500" />
                    <span className="text-slate-300">AI Generations</span>
                    <span className="ml-auto font-bold text-fuchsia-400">
                      0
                    </span>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-slate-800/60 p-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-100 text-sm truncate">
                    Creative Writer
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    Start your next adventure
                  </p>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-slate-950/60 backdrop-blur-md border-b border-slate-800/60 px-6 py-4 md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-slate-800 p-2 rounded-xl transition-colors duration-200 text-slate-200" />
                <h1 className="text-xl font-bold text-slate-100">
                  AI StoryWeaver
                </h1>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
