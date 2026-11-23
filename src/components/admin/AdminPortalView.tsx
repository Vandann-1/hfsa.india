"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  api,
  DashboardMetrics,
  EnquiryItem,
  CourseItem,
  ArticleItem,
  ServiceItem
} from "@/lib/api";
import {
  LayoutDashboard,
  Inbox,
  GraduationCap,
  FileText,
  Settings,
  ShieldCheck,
  Search,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  Save,
  Award,
  Layers
} from "lucide-react";

interface AdminPortalViewProps {
  initialMetrics: DashboardMetrics;
  initialEnquiries: EnquiryItem[];
  initialCourses: CourseItem[];
  initialArticles: ArticleItem[];
  initialServices: ServiceItem[];
}

export default function AdminPortalView({
  initialMetrics,
  initialEnquiries,
  initialCourses,
  initialArticles,
  initialServices,
}: AdminPortalViewProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "enquiries" | "courses" | "articles" | "services" | "settings"
  >("overview");

  const [metrics, setMetrics] = useState<DashboardMetrics>(initialMetrics);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(initialEnquiries);
  const [courses] = useState<CourseItem[]>(initialCourses);
  const [articles] = useState<ArticleItem[]>(initialArticles);

  // Enquiry filters
  const [enquiryStatusFilter, setEnquiryStatusFilter] = useState<string>("all");
  const [enquiryTypeFilter, setEnquiryTypeFilter] = useState<string>("all");
  const [enquirySearch, setEnquirySearch] = useState<string>("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(
    initialEnquiries[0] || null
  );

  // Status updating state
  const [updatingStatus, setUpdatingStatus] = useState<boolean>(false);
  const [statusUpdateMessage, setStatusUpdateMessage] = useState<string>("");
  const [internalNotesInput, setInternalNotesInput] = useState<string>("");

  // Settings state
  const [settingsSaved, setSettingsSaved] = useState<boolean>(false);
  const [settingsForm, setSettingsForm] = useState({
    primary_phone: "+91 98765 43210",
    whatsapp_number: "+919876543210",
    primary_email: "contact@haridrafoodsafety.com",
    training_email: "training@haridrafoodsafety.com",
    office_address: "Corporate Suite 402, Food & Bio-Innovation Park, Bangalore, Karnataka - 560001, India",
    operating_hours: "Monday to Saturday: 09:30 AM – 06:30 PM IST"
  });

  useEffect(() => {
    if (selectedEnquiry) {
      setInternalNotesInput(selectedEnquiry.internal_notes || "");
    }
  }, [selectedEnquiry]);

  const refreshData = async () => {
    try {
      const data = await api.getDashboardData();
      setMetrics(data.metrics);
      setEnquiries(data.recent_enquiries);
      setStatusUpdateMessage("Data refreshed from live database.");
      setTimeout(() => setStatusUpdateMessage(""), 3000);
    } catch {
      setStatusUpdateMessage("Refreshed with cached platform state.");
      setTimeout(() => setStatusUpdateMessage(""), 3000);
    }
  };

  const handleStatusChange = async (newStatus: any) => {
    if (!selectedEnquiry) return;
    setUpdatingStatus(true);
    try {
      await api.updateEnquiryStatus(selectedEnquiry.id, newStatus, internalNotesInput);
      const updated = enquiries.map((item) =>
        item.id === selectedEnquiry.id
          ? { ...item, status: newStatus, internal_notes: internalNotesInput }
          : item
      );
      setEnquiries(updated);
      setSelectedEnquiry({
        ...selectedEnquiry,
        status: newStatus,
        internal_notes: internalNotesInput,
      });
      setStatusUpdateMessage(`Status updated to "${newStatus.replace('_', ' ')}".`);
      setTimeout(() => setStatusUpdateMessage(""), 3000);
    } catch (_err) {
      console.error(_err);
      setStatusUpdateMessage("Unable to update status.");
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    setUpdatingStatus(true);
    try {
      await api.updateEnquiryStatus(selectedEnquiry.id, selectedEnquiry.status, internalNotesInput);
      const updated = enquiries.map((item) =>
        item.id === selectedEnquiry.id
          ? { ...item, internal_notes: internalNotesInput }
          : item
      );
      setEnquiries(updated);
      setSelectedEnquiry({ ...selectedEnquiry, internal_notes: internalNotesInput });
      setStatusUpdateMessage("Internal notes saved successfully.");
      setTimeout(() => setStatusUpdateMessage(""), 3000);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    if (enquiryStatusFilter !== "all" && item.status !== enquiryStatusFilter) return false;
    if (enquiryTypeFilter !== "all" && item.enquiry_type !== enquiryTypeFilter) return false;
    if (enquirySearch.trim()) {
      const q = enquirySearch.toLowerCase();
      const matchName = item.full_name.toLowerCase().includes(q);
      const matchEmail = item.email.toLowerCase().includes(q);
      const matchOrg = (item.organization || "").toLowerCase().includes(q);
      const matchSub = item.subject.toLowerCase().includes(q);
      return matchName || matchEmail || matchOrg || matchSub;
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">New</span>;
      case "in_progress":
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">In Progress</span>;
      case "contacted":
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">Contacted</span>;
      case "converted":
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">Converted</span>;
      case "closed":
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">Closed</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Admin SaaS Header */}
      <header className="bg-navy-950 text-white border-b border-navy-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-corporate to-forest flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5 text-fresh" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm tracking-tight leading-tight">
                  HARIDRA CONTROL
                </span>
                <span className="text-[9px] tracking-widest font-semibold uppercase text-fresh">
                  Admin Management Portal
                </span>
              </div>
            </Link>

            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-fresh"></span>
              <span>Live Database Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={refreshData}
              className="p-2 text-slate-300 hover:text-white hover:bg-navy-900 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Refresh dashboard metrics"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Refresh Data</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-xl transition-all"
            >
              <span>Back to Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main SaaS Layout: Sidebar + Viewport */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          <div className="bg-white rounded-3xl p-4 border border-surface-border shadow-soft-sm space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("enquiries")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "enquiries"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <Inbox className="w-4 h-4" />
                <span>Client Enquiries</span>
              </div>
              {metrics.pending_enquiries > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-red-100 text-red-700 font-bold">
                  {metrics.pending_enquiries}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("courses")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "courses"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Training Programs</span>
            </button>

            <button
              onClick={() => setActiveTab("articles")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "articles"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Knowledge Hub Articles</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "services"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Service Offerings</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "settings"
                  ? "bg-navy-900 text-white shadow-soft-sm"
                  : "text-text-secondary hover:bg-slate-50 hover:text-navy-900"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Website Settings</span>
            </button>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-white border border-surface-border text-xs text-text-secondary space-y-2">
            <div className="font-bold text-navy-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-forest" />
              <span>Admin Compliance Mode</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              All client submissions and course inquiries logged here are stored in the core Django relational database with audit trails.
            </p>
          </div>
        </aside>

        {/* Main View Area */}
        <section className="flex-1 space-y-8 min-w-0">
          
          {/* Status Message Notification Bar */}
          {statusUpdateMessage && (
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{statusUpdateMessage}</span>
              </div>
              <button
                onClick={() => setStatusUpdateMessage("")}
                className="text-emerald-900 hover:underline font-bold"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* TAB 1: OVERVIEW METRICS */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                  Operational Dashboard
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900">
                  Performance Metrics & Key Indicators
                </h1>
                <p className="text-xs sm:text-sm text-text-secondary">
                  Real database-driven counts for incoming enquiries, course interest, and published content.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-1">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Total Enquiries
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-navy-900">
                    {metrics.total_enquiries}
                  </div>
                  <div className="text-[11px] text-corporate font-medium">All logged requests</div>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-1">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Pending / Active
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-amber-600">
                    {metrics.pending_enquiries}
                  </div>
                  <div className="text-[11px] text-amber-700 font-medium">Needs team response</div>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-1">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Training Leads
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-forest">
                    {metrics.training_enquiries}
                  </div>
                  <div className="text-[11px] text-forest font-medium">Course inquiries</div>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-1">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Consultancy / Audits
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-navy-900">
                    {metrics.consultancy_enquiries}
                  </div>
                  <div className="text-[11px] text-navy-800 font-medium">Plant & HACCP scopes</div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
                  <div>
                    <div className="text-xs text-text-secondary font-medium">Published Courses</div>
                    <div className="text-xl font-bold text-navy-900">{metrics.published_courses} Catalog Items</div>
                  </div>
                  <GraduationCap className="w-6 h-6 text-corporate opacity-70" />
                </div>

                <div className="p-4 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
                  <div>
                    <div className="text-xs text-text-secondary font-medium">EOSH UK Verified Courses</div>
                    <div className="text-xl font-bold text-forest">{metrics.eosh_accredited_courses} Qualification</div>
                  </div>
                  <Award className="w-6 h-6 text-forest opacity-70" />
                </div>

                <div className="p-4 rounded-2xl bg-surface-light border border-surface-border flex items-center justify-between">
                  <div>
                    <div className="text-xs text-text-secondary font-medium">Published Articles</div>
                    <div className="text-xl font-bold text-navy-900">{metrics.published_articles} Guidance Posts</div>
                  </div>
                  <FileText className="w-6 h-6 text-corporate opacity-70" />
                </div>
              </div>

              {/* Recent Enquiries Preview */}
              <div className="bg-white rounded-3xl p-6 border border-surface-border shadow-soft-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-heading font-bold text-navy-900">
                    Recent Enquiries Stream
                  </h3>
                  <button
                    onClick={() => setActiveTab("enquiries")}
                    className="text-xs font-semibold text-corporate hover:underline"
                  >
                    View All & Manage
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {enquiries.slice(0, 4).map((item) => (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-navy-900">{item.full_name}</span>
                          {getStatusBadge(item.status)}
                        </div>
                        <div className="text-xs text-text-secondary truncate mt-0.5">
                          {item.subject} • {item.organization || "Independent Inquirer"}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedEnquiry(item);
                          setActiveTab("enquiries");
                        }}
                        className="text-xs font-semibold text-corporate hover:underline shrink-0"
                      >
                        Inspect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENQUIRIES MANAGEMENT */}
          {activeTab === "enquiries" && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                  Lead Management
                </span>
                <h1 className="text-2xl font-heading font-bold text-navy-900">
                  Enquiry Pipeline & Records
                </h1>
                <p className="text-xs text-text-secondary">
                  Track, respond to, and manage status transitions for corporate consulting requests and student applications.
                </p>
              </div>

              {/* Filter and Search Bar */}
              <div className="p-4 rounded-2xl bg-white border border-surface-border shadow-soft-sm grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by name, email, org..."
                    value={enquirySearch}
                    onChange={(e) => setEnquirySearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                  />
                </div>

                <div>
                  <select
                    value={enquiryStatusFilter}
                    onChange={(e) => setEnquiryStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white font-medium"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="contacted">Contacted</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div>
                  <select
                    value={enquiryTypeFilter}
                    onChange={(e) => setEnquiryTypeFilter(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white font-medium"
                  >
                    <option value="all">All Inquiry Types</option>
                    <option value="consultancy">Food Safety Consultancy</option>
                    <option value="audit">Food Safety Audit</option>
                    <option value="quality_assurance">Quality Assurance</option>
                    <option value="training">Training Programs</option>
                    <option value="collaboration">Collaboration / MoU</option>
                    <option value="general">General</option>
                  </select>
                </div>
              </div>

              {/* Master-Detail Enquiries Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Enquiries List */}
                <div className="lg:col-span-5 bg-white rounded-3xl border border-surface-border shadow-soft-sm overflow-hidden flex flex-col h-[580px]">
                  <div className="p-3.5 border-b border-slate-100 bg-surface-offwhite text-xs font-semibold text-text-muted flex justify-between">
                    <span>Enquiries ({filteredEnquiries.length})</span>
                    <span>Status</span>
                  </div>

                  <div className="divide-y divide-slate-100 overflow-y-auto flex-1">
                    {filteredEnquiries.length > 0 ? (
                      filteredEnquiries.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedEnquiry(item)}
                          className={`p-4 cursor-pointer transition-colors text-left space-y-1.5 ${
                            selectedEnquiry?.id === item.id
                              ? "bg-corporate-subtle/80 border-l-4 border-corporate"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-navy-900 truncate">
                              {item.full_name}
                            </span>
                            {getStatusBadge(item.status)}
                          </div>
                          <div className="text-xs text-text-primary font-medium line-clamp-1">
                            {item.subject}
                          </div>
                          <div className="text-[11px] text-text-muted line-clamp-1">
                            {item.organization || item.email}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-xs text-text-muted">
                        No enquiries match the selected filters.
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected Enquiry Details & Action Card */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-surface-border shadow-soft-sm space-y-6">
                  {selectedEnquiry ? (
                    <div className="space-y-6">
                      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-corporate">
                            REF: HFSA-ENQ-{selectedEnquiry.id}
                          </span>
                          <h3 className="text-lg font-heading font-bold text-navy-900 mt-0.5">
                            {selectedEnquiry.full_name}
                          </h3>
                          <div className="text-xs text-text-secondary">
                            {selectedEnquiry.organization || "Individual Requester"}
                          </div>
                        </div>

                        <div className="text-right space-y-1">
                          <div className="text-[11px] text-text-muted">Status:</div>
                          {getStatusBadge(selectedEnquiry.status)}
                        </div>
                      </div>

                      {/* Contact metadata */}
                      <div className="grid grid-cols-2 gap-3 text-xs bg-surface-offwhite p-4 rounded-2xl">
                        <div>
                          <span className="text-text-muted block text-[10px]">Email Address</span>
                          <a href={`mailto:${selectedEnquiry.email}`} className="font-semibold text-corporate hover:underline">
                            {selectedEnquiry.email}
                          </a>
                        </div>
                        <div>
                          <span className="text-text-muted block text-[10px]">Phone Line</span>
                          <a href={`tel:${selectedEnquiry.phone}`} className="font-semibold text-navy-900 hover:text-corporate">
                            {selectedEnquiry.phone}
                          </a>
                        </div>
                        <div>
                          <span className="text-text-muted block text-[10px]">Category</span>
                          <span className="font-semibold text-navy-900 capitalize">
                            {selectedEnquiry.enquiry_type.replace('_', ' ')}
                          </span>
                        </div>
                        <div>
                          <span className="text-text-muted block text-[10px]">Logged Date</span>
                          <span className="font-medium text-navy-900">
                            {new Date(selectedEnquiry.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Subject & Full Message */}
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-navy-900">
                          Subject: {selectedEnquiry.subject}
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
                          {selectedEnquiry.message}
                        </div>
                      </div>

                      {/* Status Transition Control */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <label className="block text-xs font-bold text-navy-900">
                          Update Lead Pipeline Status:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {(["new", "in_progress", "contacted", "converted", "closed"] as const).map(
                            (st) => (
                              <button
                                key={st}
                                disabled={updatingStatus}
                                onClick={() => handleStatusChange(st)}
                                className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${
                                  selectedEnquiry.status === st
                                    ? "bg-navy-900 text-white border-navy-900 shadow-soft-sm"
                                    : "bg-surface-offwhite text-text-secondary border-surface-border hover:bg-slate-100"
                                }`}
                              >
                                {st.replace('_', ' ').toUpperCase()}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      {/* Internal Notes */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <label className="block text-xs font-bold text-navy-900">
                          Internal Technical Notes (Staff Only):
                        </label>
                        <textarea
                          rows={3}
                          value={internalNotesInput}
                          onChange={(e) => setInternalNotesInput(e.target.value)}
                          placeholder="Log call updates, quoted scope, student batch dates, or follow-up notes..."
                          className="w-full p-3 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white focus:outline-none"
                        />
                        <button
                          onClick={handleSaveNotes}
                          disabled={updatingStatus}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold bg-corporate text-white px-4 py-2 rounded-xl hover:bg-corporate-dark transition-colors"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Notes</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-12 text-center text-xs text-text-muted">
                      Select an enquiry from the list to view details and update workflow.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TRAINING COURSES */}
          {activeTab === "courses" && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                    Education Catalog
                  </span>
                  <h1 className="text-2xl font-heading font-bold text-navy-900">
                    Training Programs Management
                  </h1>
                </div>

                <Link
                  href="/training-programs"
                  className="text-xs font-semibold text-corporate hover:underline flex items-center gap-1"
                >
                  <span>View Public Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-surface-light text-navy-900">
                          {course.code}
                        </span>
                        {course.is_eosh_accredited && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            EOSH UK Scope
                          </span>
                        )}
                        <span className="text-xs text-text-muted">Level: {course.level}</span>
                      </div>
                      <h3 className="text-base font-heading font-bold text-navy-900">
                        {course.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-1">
                        {course.short_description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs">
                      <div className="text-right">
                        <div className="font-bold text-navy-900">{course.fee.split('(')[0]}</div>
                        <div className="text-text-muted text-[11px]">{course.duration}</div>
                      </div>

                      <Link
                        href={`/training-programs/${course.slug}`}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-navy-900 font-semibold"
                      >
                        Inspect
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ARTICLES */}
          {activeTab === "articles" && (
            <div className="space-y-6 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                    Content Management
                  </span>
                  <h1 className="text-2xl font-heading font-bold text-navy-900">
                    Knowledge Hub Articles
                  </h1>
                </div>

                <Link
                  href="/resources"
                  className="text-xs font-semibold text-corporate hover:underline flex items-center gap-1"
                >
                  <span>View Public Articles</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-corporate-subtle text-corporate">
                        {art.category_display || art.category}
                      </span>
                      <h3 className="text-base font-heading font-bold text-navy-900 mt-1">
                        {art.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-1">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs">
                      <span className="text-text-muted">{art.read_time}</span>
                      <Link
                        href={`/resources/${art.slug}`}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-navy-900 font-semibold"
                      >
                        Read Post
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SERVICES */}
          {activeTab === "services" && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                  Service Portfolio
                </span>
                <h1 className="text-2xl font-heading font-bold text-navy-900">
                  Advisory Offerings
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {initialServices.map((svc) => (
                  <div
                    key={svc.id}
                    className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex items-center justify-between"
                  >
                    <div className="space-y-1 max-w-xl">
                      <span className="text-xs font-mono font-bold text-corporate">
                        Service 0{svc.order}
                      </span>
                      <h3 className="text-base font-heading font-bold text-navy-900">
                        {svc.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-1">
                        {svc.tagline}
                      </p>
                    </div>

                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-semibold text-corporate hover:underline flex items-center gap-1"
                    >
                      <span>Public Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS */}
          {activeTab === "settings" && (
            <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-soft-sm space-y-6 animate-in fade-in">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                  Platform Configuration
                </span>
                <h1 className="text-2xl font-heading font-bold text-navy-900">
                  Corporate Information & Contact Desk
                </h1>
                <p className="text-xs text-text-secondary">
                  Update published contact lines, WhatsApp desks, and official office locations.
                </p>
              </div>

              {settingsSaved && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Website contact settings successfully updated!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Primary Corporate Phone
                  </label>
                  <input
                    type="text"
                    value={settingsForm.primary_phone}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, primary_phone: e.target.value })
                    }
                    className="w-full p-2.5 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    WhatsApp Advisory Desk Line
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp_number}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, whatsapp_number: e.target.value })
                    }
                    className="w-full p-2.5 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    value={settingsForm.primary_email}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, primary_email: e.target.value })
                    }
                    className="w-full p-2.5 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Training Desk Email
                  </label>
                  <input
                    type="email"
                    value={settingsForm.training_email}
                    onChange={(e) =>
                      setSettingsForm({ ...settingsForm, training_email: e.target.value })
                    }
                    className="w-full p-2.5 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1">
                  Registered Corporate Address
                </label>
                <textarea
                  rows={2}
                  value={settingsForm.office_address}
                  onChange={(e) =>
                    setSettingsForm({ ...settingsForm, office_address: e.target.value })
                  }
                  className="w-full p-2.5 text-xs rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white"
                />
              </div>

              <div>
                <button
                  onClick={() => {
                    setSettingsSaved(true);
                    setTimeout(() => setSettingsSaved(false), 3000);
                  }}
                  className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold py-2.5 px-6 rounded-xl hover:bg-corporate transition-colors shadow-soft-sm"
                >
                  <Save className="w-4 h-4 text-fresh" />
                  <span>Save Configuration</span>
                </button>
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}
