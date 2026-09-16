export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: '#F6F6FB',
        panel: '#FFFFFF',
        raised: '#F7F7FC',
        hairline: '#ECECF4',
        ink: {
          DEFAULT: '#1C1A2E',
          muted: '#6B7089',
          faint: '#9A9FB5',
        },
        accent: {
          DEFAULT: '#7C5CFC',
          hover: '#6B49F2',
          soft: 'rgba(124,92,252,0.10)',
          line: 'rgba(124,92,252,0.28)',
        },
        good: '#10B981',
        warn: '#F59E0B',
        bad: '#EF4444',
        info: '#3B82F6',
      },
      borderRadius: {
        panel: '14px',
      },
    },
  },
}
