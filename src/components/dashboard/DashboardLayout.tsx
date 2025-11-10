import { PlusCircle, Activity, Heart, Brain, Thermometer, Scale, Moon } from 'lucide-react';
import { HealthMetricsGrid } from './HealthMetricsGrid';
import { HealthTimeline } from './HealthTimeline';
import { QuickActions } from './QuickActions';
import { bayerSansClasses } from '@/lib/bayer-sans';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className={bayerSansClasses.heading.h4}>
              Consumer Health Dashboard
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
              <PlusCircle className="w-4 h-4" />
              <span>Add Entry</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Quick Actions & Timeline */}
          <div className="md:col-span-3 space-y-6">
            <QuickActions />
            <HealthTimeline />
          </div>

          {/* Main Content Area - Metrics Grid */}
          <div className="md:col-span-9">
            <HealthMetricsGrid />
          </div>
        </div>
      </main>
    </div>
  );
}