import React, { useState } from "react";
import {
  Search,
  Download,
  Share2,
  Play,
  Clock,
  HardDrive,
  ChevronDown,
  Filter,
  LayoutGrid,
  List,
  MoreVertical,
  Calendar,
  ArrowDownUp,
} from "lucide-react";

// === DATA ===

const videos = [
  {
    id: 1,
    title: "Wedding_Reception_Final.mp4",
    originalSize: "1.8 GB",
    compressedSize: "612 MB",
    compressionRatio: 66,
    duration: "12:34",
    uploadDate: "Feb 22, 2026",
    status: "ready",
    thumbnail: null,
  },
  {
    id: 2,
    title: "Product_Demo_Q1_2026.mp4",
    originalSize: "420 MB",
    compressedSize: "168 MB",
    compressionRatio: 60,
    duration: "3:45",
    uploadDate: "Feb 21, 2026",
    status: "shared",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Brand_Anthem_v3.mov",
    originalSize: "2.1 GB",
    compressedSize: "714 MB",
    compressionRatio: 66,
    duration: "1:30",
    uploadDate: "Feb 20, 2026",
    status: "processing",
    thumbnail: null,
  },
  {
    id: 4,
    title: "Client_Testimonial_Sarah.mp4",
    originalSize: "890 MB",
    compressedSize: "312 MB",
    compressionRatio: 65,
    duration: "4:12",
    uploadDate: "Feb 19, 2026",
    status: "ready",
    thumbnail: null,
  },
  {
    id: 5,
    title: "Social_Reel_Instagram_Feb.mp4",
    originalSize: "156 MB",
    compressedSize: "52 MB",
    compressionRatio: 67,
    duration: "0:30",
    uploadDate: "Feb 18, 2026",
    status: "shared",
    thumbnail: null,
  },
  {
    id: 6,
    title: "Onboarding_Tutorial_v2.mp4",
    originalSize: "1.2 GB",
    compressedSize: "480 MB",
    compressionRatio: 60,
    duration: "8:15",
    uploadDate: "Feb 17, 2026",
    status: "ready",
    thumbnail: null,
  },
  {
    id: 7,
    title: "Conference_Keynote_2026.mov",
    originalSize: "3.4 GB",
    compressedSize: null,
    compressionRatio: null,
    duration: "45:00",
    uploadDate: "Feb 24, 2026",
    status: "processing",
    thumbnail: null,
  },
  {
    id: 8,
    title: "BTS_Photoshoot_March.mp4",
    originalSize: "680 MB",
    compressedSize: "238 MB",
    compressionRatio: 65,
    duration: "2:48",
    uploadDate: "Feb 16, 2026",
    status: "ready",
    thumbnail: null,
  },
];

const statusConfig = {
  ready: {
    label: "Ready",
    bg: "rgba(34, 197, 94, 0.1)",
    text: "#22C55E",
  },
  processing: {
    label: "Processing",
    bg: "rgba(245, 158, 11, 0.1)",
    text: "#F59E0B",
  },
  shared: {
    label: "Shared",
    bg: "rgba(59, 130, 246, 0.1)",
    text: "#3B82F6",
  },
};

const filterOptions = ["All", "Processing", "Ready", "Shared"];
const sortOptions = ["Date", "Name", "Size"];

// === COMPONENTS ===

function StatusBadge({ status }) {
  const config = statusConfig[status];
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: config.bg, color: config.text }}
    >
      {status === "processing" && (
        <span className="w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse" style={{ backgroundColor: config.text }} />
      )}
      {config.label}
    </span>
  );
}

function VideoCard({ video }) {
  return (
    <div
      className="group bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl overflow-hidden
                 hover:border-[#333333] transition-all duration-200"
    >
      {/* === THUMBNAIL === */}
      <div className="relative aspect-video bg-[#111111] flex items-center justify-center overflow-hidden">
        {/* Placeholder gradient — replace with actual thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />

        {/* Play overlay */}
        <div
          className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                      flex items-center justify-center opacity-0 group-hover:opacity-100
                      transition-opacity duration-200 cursor-pointer"
        >
          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
        </div>

        {/* Duration badge */}
        <span
          className="absolute bottom-2 right-2 z-10 px-2 py-0.5 rounded text-xs font-medium
                     bg-black/70 text-white backdrop-blur-sm"
        >
          {video.duration}
        </span>

        {/* Processing overlay */}
        {video.status === "processing" && (
          <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-[#F59E0B] border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-[#F59E0B] font-medium">Compressing...</span>
            </div>
          </div>
        )}
      </div>

      {/* === CARD BODY === */}
      <div className="p-4 space-y-3">
        {/* Title + Status row */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-sm font-semibold text-[#E5E7EB] truncate flex-1"
            title={video.title}
          >
            {video.title}
          </h3>
          <StatusBadge status={video.status} />
        </div>

        {/* Metadata */}
        <div className="space-y-1.5">
          {/* File size + compression */}
          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <HardDrive className="w-3.5 h-3.5 text-[#6B7280] flex-shrink-0" />
            {video.compressedSize ? (
              <span>
                {video.originalSize}
                <span className="mx-1 text-[#6B7280]">&rarr;</span>
                {video.compressedSize}
                <span className="ml-1.5 text-[#22C55E] font-medium">
                  -{video.compressionRatio}%
                </span>
              </span>
            ) : (
              <span>{video.originalSize}</span>
            )}
          </div>

          {/* Upload date */}
          <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <Calendar className="w-3.5 h-3.5 text-[#6B7280] flex-shrink-0" />
            <span>{video.uploadDate}</span>
          </div>
        </div>

        {/* === ACTION BUTTONS === */}
        <div className="flex items-center gap-2 pt-1">
          <button
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg
                       text-xs font-medium text-[#9CA3AF] bg-transparent border border-[#333333]
                       hover:text-[#E5E7EB] hover:bg-[#2a2a2a] hover:border-[#3a3a3a]
                       transition-all duration-150 min-h-[36px]"
            disabled={video.status === "processing"}
            style={{ opacity: video.status === "processing" ? 0.4 : 1 }}
          >
            <Share2 className="w-3.5 h-3.5" />
            Share
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg
                       text-xs font-medium text-[#9CA3AF] bg-transparent border border-[#333333]
                       hover:text-[#E5E7EB] hover:bg-[#2a2a2a] hover:border-[#3a3a3a]
                       transition-all duration-150 min-h-[36px]"
            disabled={video.status === "processing"}
            style={{ opacity: video.status === "processing" ? 0.4 : 1 }}
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

// === MAIN SCREEN ===

export default function WorkspaceScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Date");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Filter and search logic
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      video.status === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Sort logic
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortBy === "Date") {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    }
    if (sortBy === "Name") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "Size") {
      const parseSize = (s) => {
        const num = parseFloat(s);
        return s.includes("GB") ? num * 1024 : num;
      };
      return parseSize(b.originalSize) - parseSize(a.originalSize);
    }
    return 0;
  });

  const videoCount = filteredVideos.length;

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-[#E5E7EB]"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* === HEADER === */}
      <header className="border-b border-[#1e1e1e]">
        <div className="max-w-[1440px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Left: Title + count */}
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-[#E5E7EB]">My Videos</h1>
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a1a1a]
                           border border-[#1e1e1e] text-[#9CA3AF]"
              >
                {videos.length} videos
              </span>
            </div>

            {/* Right: Upload button placeholder */}
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                         text-white bg-gradient-to-r from-[#3B82F6] to-[#2563EB]
                         hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200
                         shadow-lg shadow-blue-500/20"
            >
              Upload Video
            </button>
          </div>
        </div>
      </header>

      {/* === TOOLBAR: Search + Filters === */}
      <div className="border-b border-[#1e1e1e]">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[240px] max-w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-[#1a1a1a]
                           border border-[#333333] text-[#E5E7EB] placeholder-[#6B7280]
                           focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]
                           transition-colors duration-150"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-[#1e1e1e]" />

            {/* Status filters */}
            <div className="flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-[#6B7280] mr-1" />
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150
                    ${
                      activeFilter === filter
                        ? "bg-[#3B82F6] text-white"
                        : "bg-[#1a1a1a] text-[#9CA3AF] border border-[#1e1e1e] hover:border-[#333333] hover:text-[#E5E7EB]"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-[#1e1e1e]" />

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium
                           bg-[#1a1a1a] text-[#9CA3AF] border border-[#1e1e1e]
                           hover:border-[#333333] hover:text-[#E5E7EB] transition-all duration-150"
              >
                <ArrowDownUp className="w-3.5 h-3.5" />
                Sort: {sortBy}
                <ChevronDown className="w-3 h-3" />
              </button>

              {showSortDropdown && (
                <div
                  className="absolute top-full mt-1 right-0 w-36 py-1 rounded-lg
                             bg-[#1e1e1e] border border-[#333333] shadow-lg z-20"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs transition-colors
                        ${
                          sortBy === option
                            ? "text-[#3B82F6] bg-[rgba(59,130,246,0.1)]"
                            : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#2a2a2a]"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Results count */}
            <span className="text-xs text-[#6B7280] ml-auto">
              {videoCount} {videoCount === 1 ? "video" : "videos"}
              {activeFilter !== "All" && ` (${activeFilter.toLowerCase()})`}
            </span>
          </div>
        </div>
      </div>

      {/* === MAIN CONTENT: Video Grid === */}
      <main className="max-w-[1440px] mx-auto px-8 py-8">
        {sortedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          /* === EMPTY STATE === */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div
              className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-[#1e1e1e]
                          flex items-center justify-center mb-4"
            >
              <Search className="w-7 h-7 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#E5E7EB] mb-1">
              No videos found
            </h3>
            <p className="text-sm text-[#6B7280] max-w-sm">
              {searchQuery
                ? `No results for "${searchQuery}". Try adjusting your search or filters.`
                : `No ${activeFilter.toLowerCase()} videos yet.`}
            </p>
          </div>
        )}
      </main>

      {/* Click outside to close sort dropdown */}
      {showSortDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowSortDropdown(false)}
        />
      )}
    </div>
  );
}
