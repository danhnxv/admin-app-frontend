import Bg from '@/screens/login/components/Bg';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Bg />
      {children}
    </div>
  );
}
