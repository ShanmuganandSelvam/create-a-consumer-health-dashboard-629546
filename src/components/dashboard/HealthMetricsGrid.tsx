import { Activity, Heart, Brain, Thermometer, Scale, Moon } from 'lucide-react';
import { bayerSansClasses } from '@/lib/bayer-sans';
import { MetricCard } from './MetricCard';

export function HealthMetricsGrid() {
  const metrics = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      change: "+2",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      change: "-5",
      icon: Activity,
      color: "text-blue-500"
    },
    {
      title: "Body Temperature",
      value: "98.6",
      unit: "°F",
      change: "0",
      icon: Thermometer,
      color: "text-orange-500"
    },
    {
      title: "Weight",
      value: "165",
      unit: "lbs",
      change: "-2",
      icon: Scale,
      color: "text-green-500"
    },
    {
      title: "Sleep",
      value: "7.5",
      unit: "hours",
      change: "+0.5",
      icon: Moon,
      color: "text-indigo-500"
    },
    {
      title: "Stress Level",
      value: "Low",
      unit: "",
      change: "stable",
      icon: Brain,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className={bayerSansClasses.heading.h5}>Health Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
}