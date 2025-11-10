import { LucideIcon } from 'lucide-react';
import { bayerSansClasses } from '@/lib/bayer-sans';
import { useThemeColors } from '@/hooks/use-cloudfront-theme';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

export function MetricCard({ title, value, unit, change, icon: Icon, color }: MetricCardProps) {
  const colors = useThemeColors();

  return (
    <div className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className={`${bayerSansClasses.heading.h6} text-gray-900`}>{title}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold" style={{ color: colors.primary('600') }}>{value}</span>
            <span className="text-sm text-gray-500">{unit}</span>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${color.replace('text', 'bg')}/10`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      
      <div className="mt-4 flex items-center space-x-2">
        <span className={`text-sm ${change.startsWith('+') ? 'text-green-600' : change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500">vs last week</span>
      </div>
    </div>
  );
}