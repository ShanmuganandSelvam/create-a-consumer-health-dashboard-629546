import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme';
import { DashboardLayout } from './components/dashboard/DashboardLayout';

function App() {
  return (
    <CloudFrontThemeProvider defaultTheme="bayer">
      <DashboardLayout />
    </CloudFrontThemeProvider>
  );
}

export default App;