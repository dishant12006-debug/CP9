'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search, Download, Mail, DollarSign, Calendar, RefreshCw, Layers, CheckCircle2, Inbox, Eye, X } from 'lucide-react';
import Link from 'next/link';

interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  created_at?: string;
}

interface NewsletterSubscriber {
  id?: string;
  email: string;
  created_at?: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'contacts' | 'newsletter'>('contacts');
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/submissions');
      if (!res.ok) throw new Error('Failed to load data.');
      const data = await res.json();
      setContacts(data.contacts || []);
      setNewsletter(data.newsletter || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const formatDate = (iso?: string) => {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  };

  const totalEstimatedBudget = contacts.reduce((sum, c) => {
    const map: Record<string, number> = { '2k-5k': 3500, '5k-10k': 7500, '10k-20k': 15000, '20k+': 25000 };
    return sum + (map[c.budget] || 0);
  }, 0);

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch = [c.name, c.email, c.message].some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesService = serviceFilter === 'All' || c.service === serviceFilter;
    return matchesSearch && matchesService;
  });

  const filteredNewsletter = newsletter.filter((n) =>
    n.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportToCSV = (type: 'contacts' | 'newsletter') => {
    let csv = 'data:text/csv;charset=utf-8,';
    if (type === 'contacts') {
      csv += 'Date,Name,Email,Service,Budget,Message\n';
      filteredContacts.forEach((c) => {
        csv += [formatDate(c.created_at), `"${c.name}"`, c.email, c.service, c.budget, `"${c.message}"`].join(',') + '\n';
      });
    } else {
      csv += 'Date,Email\n';
      filteredNewsletter.forEach((n) => { csv += [formatDate(n.created_at), n.email].join(',') + '\n'; });
    }
    const link = document.createElement('a');
    link.href = encodeURI(csv);
    link.download = `${type}_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const serviceLabel = (s: string) => ({
    'web-design': 'Web Design', 'email-flows': 'Email Marketing',
    'closed-loop': 'Closed Loop', 'branding': 'Branding',
  }[s] || s);

  const budgetLabel = (b: string) => ({
    '2k-5k': '$2k–$5k', '5k-10k': '$5k–$10k', '10k-20k': '$10k–$20k', '20k+': '$20k+',
  }[b] || b);

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans antialiased relative overflow-x-hidden selection:bg-white selection:text-black">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white mb-4 transition-colors group">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to site
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight">Admin Dashboard</h1>
            <p className="text-white/50 text-sm mt-1">Manage leads and newsletter subscribers.</p>
          </div>
          <button onClick={fetchData} disabled={loading}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-semibold transition-all cursor-pointer disabled:opacity-50">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Contacts', value: loading ? '...' : contacts.length, sub: 'Active project requests', icon: <Inbox className="w-10 h-10" />, color: 'text-blue-400' },
            { label: 'Newsletter Subs', value: loading ? '...' : newsletter.length, sub: 'Audience list', icon: <Mail className="w-10 h-10" />, color: 'text-emerald-400' },
            { label: 'Est. Pipeline', value: loading ? '...' : `$${totalEstimatedBudget.toLocaleString()}`, sub: 'Based on budget ranges', icon: <DollarSign className="w-10 h-10" />, color: 'text-yellow-400' },
            { label: 'Services', value: loading ? '...' : [...new Set(contacts.map(c => c.service))].length, sub: 'Unique service types', icon: <Layers className="w-10 h-10" />, color: 'text-purple-400' },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 relative overflow-hidden hover:border-white/10 transition-all">
              <div className={`absolute right-4 top-4 opacity-10 ${s.color}`}>{s.icon}</div>
              <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-2">{s.label}</div>
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className={`text-[10px] mt-2 font-semibold ${s.color}`}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Tabs & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-white/5 pb-6">
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/5">
            {(['contacts', 'newsletter'] as const).map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all cursor-pointer capitalize ${activeTab === tab ? 'bg-white text-black' : 'text-white/60 hover:text-white'}`}>
                {tab === 'contacts' ? `Contacts (${contacts.length})` : `Newsletter (${newsletter.length})`}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white/20" />
            </div>
            {activeTab === 'contacts' && (
              <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none text-white/80 cursor-pointer">
                <option value="All" className="bg-[#0c0c0e]">All Services</option>
                <option value="web-design" className="bg-[#0c0c0e]">Web Design</option>
                <option value="email-flows" className="bg-[#0c0c0e]">Email Marketing</option>
                <option value="closed-loop" className="bg-[#0c0c0e]">Closed Loop System</option>
                <option value="branding" className="bg-[#0c0c0e]">Branding</option>
              </select>
            )}
            <button onClick={() => exportToCSV(activeTab)}
              disabled={loading || (activeTab === 'contacts' ? filteredContacts.length === 0 : filteredNewsletter.length === 0)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black text-sm font-semibold cursor-pointer disabled:opacity-50">
              <Download className="w-4 h-4" />Export CSV
            </button>
          </div>
        </div>

        {error && <div className="mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

        {/* Table */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
            <RefreshCw className="w-8 h-8 animate-spin text-white/40 mb-4" />
            <p className="text-white/40 text-sm">Loading...</p>
          </div>
        ) : activeTab === 'contacts' ? (
          filteredContacts.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-2xl">
              <Inbox className="w-12 h-12 mx-auto text-white/20 mb-4" />
              <p className="text-white/40 text-sm">No contacts found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.01]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    {['Date', 'Name', 'Email', 'Service', 'Budget', 'Actions'].map((h, i) => (
                      <th key={h} className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/50 ${i === 5 ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredContacts.map((c, i) => (
                    <tr key={c.id || i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="px-6 py-5 text-sm whitespace-nowrap text-white/70">
                        <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-white/30" />{formatDate(c.created_at)}</div>
                      </td>
                      <td className="px-6 py-5 text-sm font-semibold whitespace-nowrap">{c.name}</td>
                      <td className="px-6 py-5 text-sm whitespace-nowrap text-white/60">{c.email}</td>
                      <td className="px-6 py-5 text-sm whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">{serviceLabel(c.service)}</span>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-emerald-400 whitespace-nowrap">{budgetLabel(c.budget)}</td>
                      <td className="px-6 py-5 text-sm text-right whitespace-nowrap">
                        <button onClick={() => setSelectedContact(c)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer">
                          <Eye className="w-3.5 h-3.5" />View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          filteredNewsletter.length === 0 ? (
            <div className="text-center py-20 border border-white/5 rounded-2xl">
              <Mail className="w-12 h-12 mx-auto text-white/20 mb-4" />
              <p className="text-white/40 text-sm">No subscribers found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.01]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    {['Date', 'Email', 'Status'].map((h, i) => (
                      <th key={h} className={`px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/50 ${i === 2 ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredNewsletter.map((n, i) => (
                    <tr key={n.id || i} className="hover:bg-white/[0.01] transition-colors">
                      <td className="px-6 py-5 text-sm whitespace-nowrap text-white/70">
                        <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-white/30" />{formatDate(n.created_at)}</div>
                      </td>
                      <td className="px-6 py-5 text-sm font-semibold">{n.email}</td>
                      <td className="px-6 py-5 text-sm text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                          <CheckCircle2 className="w-3 h-3" />Subscribed
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>

      {/* Contact Detail Modal */}
      <AnimatePresence>
        {selectedContact && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedContact(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#09090d] border border-white/10 rounded-[24px] p-8 relative z-10 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-2">{serviceLabel(selectedContact.service)}</span>
                  <h3 className="text-2xl font-bold">{selectedContact.name}</h3>
                </div>
                <button onClick={() => setSelectedContact(null)}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div>
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Email</span>
                  <a href={`mailto:${selectedContact.email}`} className="text-sm font-medium hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-white/40" />{selectedContact.email}
                  </a>
                </div>
                <div>
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Budget</span>
                  <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-500/50" />{budgetLabel(selectedContact.budget)}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-white/5">
                  <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-1">Date</span>
                  <span className="text-sm text-white/80 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-white/40" />{formatDate(selectedContact.created_at)}
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Message</span>
                <div className="text-sm text-white/90 leading-relaxed bg-[#050508] p-5 rounded-xl border border-white/5 max-h-60 overflow-y-auto whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setSelectedContact(null)}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-black text-sm font-semibold cursor-pointer">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
