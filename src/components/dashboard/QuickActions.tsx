import { Calendar, Bell, Settings, FileText } from 'lucide-react';
import { bayerSansClasses } from '@/lib/bayer-sans';
import { useThemeColors } from '@/hooks/use-cloudfront-theme';

export function QuickActions() {
  const colors = useThemeColors();
  
  const actions = [
    { icon: Calendar, label: 'Appointments', color: colors.primary('100'), textColor: colors.primary('600') },
    { icon: Bell, label: 'Reminders', color: colors.secondary('100'), textColor: colors.secondary('600') },
    { icon: FileText, label: 'Reports', color: colors.success('100'), textColor: colors.success('600') },
    { icon: Settings, label: 'Settings', color: colors.danger('100'), textColor: colors.danger('600') },
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className={`${bayerSansClasses.heading.h6} mb-4`}>Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map(({ icon: Icon, label, color, textColor }) => (
          <button
            key={label}
            className="flex flex-col items-center p-4 rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-6 h-6 mb-2" style={{ color: textColor }} />
            <span className="text-sm font-medium" style={{ color: textColor }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}