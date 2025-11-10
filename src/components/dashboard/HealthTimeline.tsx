import { Pill, Apple, Moon, Activity } from 'lucide-react';
import { bayerSansClasses } from '@/lib/bayer-sans';
import { useThemeColors } from '@/hooks/use-cloudfront-theme';

export function HealthTimeline() {
  const colors = useThemeColors();

  const timelineEvents = [
    {
      time: '8:00 AM',
      event: 'Morning Medication',
      icon: Pill,
      color: colors.primary('500')
    },
    {
      time: '1:30 PM',
      event: 'Lunch + Vitamins',
      icon: Apple,
      color: colors.success('500')
    },
    {
      time: '4:00 PM',
      event: 'Exercise Session',
      icon: Activity,
      color: colors.secondary('500')
    },
    {
      time: '10:00 PM',
      event: 'Sleep Schedule',
      icon: Moon,
      color: colors.danger('500')
    }
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className={`${bayerSansClasses.heading.h6} mb-4`}>Today's Schedule</h2>
      <div className="space-y-4">
        {timelineEvents.map(({ time, event, icon: Icon, color }) => (
          <div key={time} className="flex items-start space-x-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: color + '20' }}>
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{event}</p>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}